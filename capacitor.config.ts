import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.twohlen.app',
  appName: '2HLEN Viewer',
  webDir: 'out',
  server: {
    androidScheme: 'https'
  }
};

export default config;
