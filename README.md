# Portals for Capacitor - Angular

An e-commerce demo application using Ionic Portals for Capacitor with Angular.

This project highlights an Ionic Angular application utilizing a micro frontend (MFE) architecture. Portals for Capacitor enables federation within the Capacitor runtime and allows each MFE to retain independent releases with Live Updates.

Portals for Capacitor complements existing micro frontend tools, with the following toolchain:

- [Nx](https://nx.dev/) - Monorepo Build System
- [@angular-architects/module-federation](https://github.com/angular-architects/module-federation-plugin) - Webpack Module Federation for Angular
- [Portals for Capacitor](https://ionic.io/docs/portals/for-capacitor/overview) - Capacitor MFE Enablement/Live Updates

## Development Notes:

1. Steps to create a new MFE:
   1. `nx generate @nxext/ionic-angular:application myApp`
   2. `nx g @angular-architects/module-federation:init --project myApp --port 420x --type remote`
   3. Revert `tsconfig.base.json` and any `tsconfig.app.json` files. Not sure why the plugin modifies these.
