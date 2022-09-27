import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'Portals Ecommerce',
  webDir: '../../dist/apps/shell',
  bundledWebRuntime: false,
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
        {
          name: 'help',
          webDir: '../../dist/apps/help',
        },
      ],
    },
  },
};

export default config;
