import type { PlaywrightTestConfig } from '@playwright/test';
const config: PlaywrightTestConfig = {
  use: {
    screenshot: 'on',
    headless: false,
    ignoreHTTPSErrors: true,
  },
  snapshotDir: './snapshots',
};
export default config;