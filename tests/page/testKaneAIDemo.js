import { expect } from "@playwright/test";
import { formData } from "../../fixture/data.js";

export const runKaneAIDemoTest = async (page) => {
  await page.goto("https://www.lambdatest.com/kane-ai");
  
  await page.locator("section", { hasText: "KaneAI - GenAI-Native Testing" })
    .getByRole("button", { name: "Book a Demo" })
    .click();

  await page.getByRole("textbox", { name: "First Name*" }).fill(formData.firstName);
  await page.getByRole("textbox", { name: "Last Name*" }).fill(formData.lastName);
  await page.getByRole("textbox", { name: "Work Email*" }).fill(formData.email);
  await page.getByRole("textbox", { name: "Phone Number*" }).fill(formData.phone);

  const messageBox = page.getByRole("textbox", { name: "Your message" });
  await messageBox.fill(formData.message);
  await expect(messageBox).toHaveValue(formData.message);
};
