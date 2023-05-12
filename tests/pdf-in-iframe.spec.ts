import { test } from '@playwright/test';

test('pdf in iframe', async ({ context, page }) => {
  await page.goto(`file://${__dirname}/pdfInFrame.html`);
  await page.waitForTimeout(5_000);
  await page.goto(
    "https://hardkodeddemos.z13.web.core.windows.net/pdfInFrame.html"
  );
  await page.waitForTimeout(5_000);
});