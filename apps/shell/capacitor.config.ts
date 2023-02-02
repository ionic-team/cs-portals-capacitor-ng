import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'Portals Ecommerce',
  webDir: '../../dist/apps/shell',
  bundledWebRuntime: false,
  plugins: {
    Portals: {
      liveUpdatesKey: 'ionic_cloud_public.pem',
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
          name: 'checkout',
          webDir: '../../dist/apps/checkout',
        },
        {
          name: 'help',
          webDir: '../../dist/apps/help',
          liveUpdateConfig: {
            appId: '44897b9b',
            channel: 'production',
            autoUpdateMethod: 'background',
          },
        },
      ],
    },
  },
};

export default config;
