import { test, expect } from '@playwright/test';

const TD_URL = 'https://fe-delivery.tallinn-learning.ee';

test.beforeEach(async ({ page }) => {
    await page.goto(TD_URL);
    await page.waitForLoadState('networkidle');
});

test('TD negative auth test 1', async ({ page }) => {
    const username = page.locator('#username');
    const password = page.locator('[data-name="password-input"]');
    const signInBtn = page.locator('[data-name="signIn-button"]');
    const errorPopup = page.locator('[data-name="authorizationError-popup"]');


    await username.fill('user3');
    await password.fill('qwerqwerqwerqwerqwer');
    await signInBtn.click();
    await expect(errorPopup).toBeVisible();
});