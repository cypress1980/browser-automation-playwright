// @ts-check
import { test, expect } from '@playwright/test';
test('Schedule a demo form automation', async ({ page }) => {
   await page.goto('https://www.lambdatest.com/kane-ai');
   await page.locator('section', { hasText: 'KaneAI - GenAI-Native Testing' }).getByRole('button', { name: 'Book a Demo' }).click();

   await page.getByRole('textbox', { name: 'First Name*' }).fill('Peter');
   await page.getByRole('textbox', { name: 'Last Name*' }).fill('Broke');
   await page.getByRole('textbox', { name: 'Work Email*' }).fill('peterbroke@tqa.com');
   await page.getByRole('textbox', { name: 'Phone Number*' }).fill('5676543210');
   await page.getByRole('textbox', { name: 'Your message' }).fill('Looking forward to exploring the capabilities of Kane AI');
});