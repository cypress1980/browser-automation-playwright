// helpers/setup.js
import { chromium } from 'playwright';
//import { chromium, expect } from '@playwright/test';

export const connectToBrowser = async (capability) => {
  const browser = await chromium.connect({
    wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(
      JSON.stringify(capability)
    )}`,
  });
  return browser;
};