import { test, expect } from "@playwright/test";

test.describe("Homepage - English", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/en");
    await page.waitForLoadState("domcontentloaded");
  });

  test("should load and display hero section", async ({ page }) => {
    await expect(page).toHaveTitle(/Good Film/i);
    await expect(page.locator("h1")).toBeVisible();
    await expect(page.locator("h1")).toContainText(/Silicon Valley|Hollywood/);
  });

  test("should display navigation with dropdowns", async ({ page }) => {
    const header = page.getByRole("banner");
    await expect(header).toBeVisible();

    // Check main nav links exist in header
    await expect(header.getByText("About")).toBeVisible();
    await expect(header.getByText("Services")).toBeVisible();
    await expect(header.getByText("Reel")).toBeVisible();
    await expect(header.getByText("Contact")).toBeVisible();
  });

  test("should display Trusted By clients strip", async ({ page }) => {
    await expect(page.getByText("Trusted by")).toBeVisible();
    await expect(page.getByText("ByteDance", { exact: true })).toBeVisible();
    await expect(page.getByText("TetherIA", { exact: true })).toBeVisible();
  });

  test("should display founder/team section", async ({ page }) => {
    const teamSection = page.getByText("Jenny Liu");
    await teamSection.scrollIntoViewIfNeeded();
    await expect(teamSection).toBeVisible();
    await expect(page.getByText("Founder & CEO")).toBeVisible();
    await expect(page.getByText(/USC and UCLA/)).toBeVisible();
  });

  test("should display portfolio section with items", async ({ page }) => {
    const portfolio = page.getByText("Selected Work");
    await portfolio.scrollIntoViewIfNeeded();
    await expect(portfolio).toBeVisible();

    // Check portfolio items exist
    await expect(page.getByText("Trae SOLO GA Release")).toBeVisible();
    await expect(
      page.getByRole("heading", { name: /TetherIA/ })
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: /Kids Against Hunger/ })
    ).toBeVisible();
  });

  test("should display contact form", async ({ page }) => {
    const contact = page.getByText("Let's Create");
    await contact.scrollIntoViewIfNeeded();
    await expect(contact).toBeVisible();
    await expect(page.getByText("Send Message")).toBeVisible();
  });

  test("should have working CTA buttons", async ({ page }) => {
    const ctaPortfolio = page.getByText("View Our Reel");
    await expect(ctaPortfolio).toBeVisible();

    const ctaContact = page.getByText("Start a Project");
    await expect(ctaContact).toBeVisible();
  });
});

test.describe("Homepage - Chinese", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/zh");
    await page.waitForLoadState("domcontentloaded");
  });

  test("should load Chinese version", async ({ page }) => {
    await expect(page.locator("h1")).toBeVisible();
    await expect(page.locator("h1")).toContainText(/硅谷|好莱坞/);
  });

  test("should display Chinese nav and content", async ({ page }) => {
    const header = page.getByRole("banner");
    await expect(header.getByText("关于")).toBeVisible();
    await expect(header.getByRole("link", { name: "服务" })).toBeVisible();
    await expect(header.getByText("作品")).toBeVisible();
  });
});
