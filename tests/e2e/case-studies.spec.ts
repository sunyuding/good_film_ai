import { test, expect } from "@playwright/test";

const CASE_STUDIES = [
  {
    path: "/en/trae",
    title: "Trae SOLO",
    client: "ByteDance",
    hasVideo: true,
  },
  {
    path: "/en/tether",
    title: "TetherIA",
    client: "TetherIA",
    hasVideo: true,
  },
  {
    path: "/en/river-of-life",
    title: "River of Life",
    client: "River of Life Foundation",
    hasVideo: true,
  },
  {
    path: "/en/kah",
    title: "Kids Against Hunger",
    client: "Kids Against Hunger",
    hasVideo: true,
  },
];

for (const study of CASE_STUDIES) {
  test.describe(`Case Study: ${study.title}`, () => {
    test(`should load ${study.title} page`, async ({ page }) => {
      await page.goto(study.path);
      await page.waitForLoadState("domcontentloaded");

      await expect(page.locator("h1")).toBeVisible();
      await expect(page.locator("h1")).toContainText(study.title);
    });

    test(`should display project meta for ${study.title}`, async ({
      page,
    }) => {
      await page.goto(study.path);
      await page.waitForLoadState("domcontentloaded");

      await expect(page.getByText("Client", { exact: true })).toBeVisible();
      await expect(
        page.getByText(study.client, { exact: true })
      ).toBeVisible();
      await expect(page.getByText("Year", { exact: true })).toBeVisible();
    });

    test(`should have back to reel link on ${study.title}`, async ({
      page,
    }) => {
      await page.goto(study.path);
      await page.waitForLoadState("domcontentloaded");

      const backLink = page.getByText("Back to Reel");
      await expect(backLink).toBeVisible();
    });

    if (study.hasVideo) {
      test(`should have video element on ${study.title}`, async ({
        page,
      }) => {
        await page.goto(study.path);
        await page.waitForLoadState("domcontentloaded");

        const video = page
          .locator("iframe[src*='youtube']")
          .or(page.locator("video"));
        await expect(video.first()).toBeVisible();
      });
    }
  });
}

test.describe("Case Study - Chinese versions", () => {
  test("Trae page loads in Chinese", async ({ page }) => {
    await page.goto("/zh/trae");
    await page.waitForLoadState("domcontentloaded");

    await expect(page.locator("h1")).toContainText("Trae SOLO");
    await expect(page.getByText("案例详情")).toBeVisible();
    await expect(page.getByText("客户", { exact: true })).toBeVisible();
  });

  test("KAH page loads in Chinese", async ({ page }) => {
    await page.goto("/zh/kah");
    await page.waitForLoadState("domcontentloaded");

    await expect(page.locator("h1")).toContainText("Kids Against Hunger");
    await expect(page.getByText("案例详情")).toBeVisible();
  });
});
