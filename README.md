# Portals for Capacitor - Angular

An e-commerce demo application using Ionic Portals for Capacitor with Angular.

This project uses a micro frontend architecture to federate micro frontends (MFE) into a host Ionic Angular application. Portals for Capacitor enables federation within the Capacitor runtime and allows each MFE to retain independent releases using Live Updates.

To do so, this project is constructed as a monorepo using [Nx](https://nx.dev/) containing the following apps:

- `@portals-ecommerce/shell` - This is the host Ionic Angular application.
- `@portals-ecommerce/account` - This remote MFE contains the user account feature.
- `@portals-ecommerce/checkout` - This remote MFE contains the checkout feature.
- `@portals-ecommerce/help` - This remote MFE contains the help feature.

Each individual MFE within the monorepo can be found within the `apps` directory. Shared components and business logic exist within the `@portals-ecommerce/shared` package within the `libs/shared` directory.

## Running the Application

This demo can be served for the web. In order to do so, you must run all of the apps:

```bash
# Serve all the apps in parallel:
nx run-many --parallel --target=serve --all

# Alternatively, you can run each app independently:
nx run account:serve
nx run checkout:serve
nx run help:serve
nx run shell:serve -o
```

Run the following steps to build the demo for iOS/Android:

```bash
npx cross-env CAP_BUILD=true nx run-many --target=build --all
nx run shell:sync
nx run shell:open:ios
# nx run shell:open:android
```

## Micro Frontend Configuration

This demo uses the following toolchain to create a micro frontend architecture:

- [@angular-architects/module-federation](https://github.com/angular-architects/module-federation-plugin)
- [Portals for Capacitor](https://ionic.io/docs/portals/for-capacitor/overview)

Portals for Capacitor _extends_ a web based micro frontend solution, enabling MFE within native Capacitor iOS and Android applications.

`@angular-architects/module-federation` is an Angular CLI plugin that facilitates setting up [Module Federation](https://webpack.js.org/concepts/module-federation/) within the Angular ecosystem. This Angular plugin is the demo's web based MFE solution.

### Remote Paths

Portals for Capacitor must load remote MFEs using a Capacitor path. This demo conditionally sets paths based on the platform it is run on:

```typescript
// apps/shell/webpack.config.js

const remotes = process.env.CAP_BUILD
  ? {
      account: '/account/remoteEntry.js',
      help: '/help/remoteEntry.js',
      checkout: '/checkout/remoteEntry.js',
    }
  : {
      account: 'http://localhost:4201/remoteEntry.js',
      help: 'http://localhost:4202/remoteEntry.js',
      checkout: 'http://localhost:4203/remoteEntry.js',
    };
```

This demo uses `cross-env` as a means to set `process.env.CAP_BUILD` during the build process:

```bash
npx cross-env CAP_BUILD=true nx run-many --target=build --all
```

It is important to note that the structure of remote paths may vary depending on the web based MFE solution used:

```JavaScript
// Webpack Module Federation plugin:
{ app1: 'app1@app1/remoteEntry.js' }

// @angular-architects/module-federation plugin:
{ app1: '/app1/remoteEntry.js' }
```

### Capacitor Configuration

Capacitor must be configured so that it knows where MFEs exist on the filesystem:

```typescript
// capacitor.config.ts
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'Portals Ecommerce',
  /* Additional properties omitted for brevity. */
  plugins: {
    Portals: {
      shell: {
        name: 'shell',
        webDir: '../../dist/apps/shell',
      },
      apps: [
        {
          name: 'account',
          webDir: '../../dist/apps/account',
        },
        /* Remaining apps omitted for brevity. */
      ],
    },
  },
};
export default config;
```

There are separate properties for the shell, or main, MFE and the app, or remote, MFEs. The `name` for remote MFEs must correspond to the names provided in the web based MFE solution's configuration.
