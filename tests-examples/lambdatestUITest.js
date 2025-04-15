import { expect } from "@playwright/test";
import { chromium } from "playwright";
import { formData } from '../fixture/data.js';
const parallelTests = async (capability) => {
  console.log("Initialising test:: ", capability["LT:Options"]["name"]);

  const browser = await chromium.connect({
    wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(
      JSON.stringify(capability)
    )}`,
  });

  const page = await browser.newPage();
  await page.goto('https://www.lambdatest.com/kane-ai');
  await page.locator('section', { hasText: 'KaneAI - GenAI-Native Testing' }).getByRole('button', { name: 'Book a Demo' }).click();
  await page.getByRole('textbox', { name: 'First Name*' }).fill(formData.firstName);
  await page.getByRole('textbox', { name: 'Last Name*' }).fill(formData.lastName);
  await page.getByRole('textbox', { name: 'Work Email*' }).fill(formData.email);
  await page.getByRole('textbox', { name: 'Phone Number*' }).fill(formData.phone);
  const message = formData.message;
  const messageBox = page.getByRole('textbox', { name: 'Your message' });
  await messageBox.fill(message);
  await expect(messageBox).toHaveValue(message);
  await browser.close();
};

// Capabilities array for with the respective configuration for the parallel tests
const capabilities = [
  {
    browserName: "Chrome",
    browserVersion: "latest",
    "LT:Options": {
      platform: "Windows 11",
      build: "Playwright Sample Build",
      name: "Playwright Schedule KaneAI Demo functionality on Windows 11 - Chrome",
      user: "kailashpathak",
      accessKey: "7aVuffQRbXRFUHrYbLhjSvBUiz3ctCih23e42NrDQxnDWErzD1",
      network: true,
      video: true,
      console: true,
    },
  },
  {
    browserName: "MicrosoftEdge",
    browserVersion: "latest",
    "LT:Options": {
      platform: "Windows 11",
      build: "Playwright Sample Build",
      name: "Playwright Schedule KaneAI Demo funcationlity on Windows 11 - MicrosoftEdge",
      user: "kailashpathak",
      accessKey: "7aVuffQRbXRFUHrYbLhjSvBUiz3ctCih23e42NrDQxnDWErzD1",
      network: true,
      video: true,
      console: true,
    },
  },
  {
    browserName: "Chrome",
    browserVersion: "latest",
    "LT:Options": {
      platform: "MacOS Big sur",
      build: "Playwright Sample Build",
      name: "Playwright Schedule KaneAI Demo functionality on MacOS Big sur - Chrome",
      user: "kailashpathak",
      accessKey: "7aVuffQRbXRFUHrYbLhjSvBUiz3ctCih23e42NrDQxnDWErzD1",
      network: true,
      video: true,
      console: true,
    },
  },
]; capabilities.forEach(async (capability) => {
  await parallelTests(capability);
});