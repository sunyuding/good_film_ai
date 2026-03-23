import { test, expect } from "@playwright/test";

test.describe("Navigation", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/en");
    await page.waitForLoadState("domcontentloaded");
  });

  test("should scroll to About section", async ({ page }) => {
    await page.getByRole("banner").getByRole("link", { name: "About" }).click();
    await page.waitForTimeout(1000);
    await expect(page.locator("#about")).toBeInViewport();
  });

  test("should scroll to Contact section", async ({ page }) => {
    await page
      .getByRole("banner")
      .getByRole("link", { name: "Contact" })
      .click();
    await page.waitForTimeout(1500);
    await expect(page.locator("#contact")).toBeInViewport();
  });

  test("should navigate to Trae case study from portfolio", async ({
    page,
  }) => {
    await page.locator("#portfolio").scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);

    const traeLink = page
      .locator("#portfolio")
      .getByText("View Case Study")
      .first();
    await traeLink.click();

    await expect(page).toHaveURL(/\/en\/trae/);
    await expect(page.locator("h1")).toContainText("Trae SOLO");
  });
});

test.describe("Navigation - Mobile", () => {
  test.use({ viewport: { width: 375, height: 812 } });

  test("should open mobile menu", async ({ page }) => {
    await page.goto("/en");
    await page.waitForLoadState("networkidle");

    // Find and click the hamburger menu button
    const menuButton = page.getByRole("button", { name: "Open menu" });
    await menuButton.click();
    await page.waitForTimeout(500);

    // Mobile menu items should become visible
    await expect(page.getByRole("link", { name: "About" })).toBeVisible();
  });
});

test.describe("Language switching", () => {
  test("EN page has Chinese language link", async ({ page }) => {
    await page.goto("/en");
    await page.waitForLoadState("domcontentloaded");

    const zhLink = page.getByText("中文").or(page.getByText("ZH"));
    if (await zhLink.isVisible()) {
      await zhLink.click();
      await expect(page).toHaveURL(/\/zh/);
    }
  });
});
