import {test, expect, Locator} from '@playwright/test';
import {faker} from "@faker-js/faker/locale/ar";


test.describe('Homework16', () => {
    let username: Locator;
    let password: Locator;
    let signInBtn: Locator
    let errorPopup: Locator;

    test.beforeEach(async ({ page }) => {
        await page.goto(process.env.APP_URL);
        await page.waitForLoadState('networkidle');

        username = page.locator('#username');
        password = page.locator('[data-name="password-input"]');
        signInBtn = page.locator('[data-name="signIn-button"]');
        errorPopup = page.locator('[data-name="authorizationError-popup"]');
    })

    test('Empty Login Sign in button' , async ({ page }) => {
        await password.fill(faker.internet.password());
        await expect(signInBtn).toBeDisabled();
    });

    test('Empty Password Sign in button' , async ({ page }) => {
        await username.fill(faker.internet.username());
        await expect(signInBtn).toBeDisabled();
    });

    test('button enabled after filling correct data', async ({ page }) => {
        await username.fill(faker.internet.username());
        await password.fill(faker.internet.password());
        await expect(signInBtn).toBeEnabled();
    });
    test('Invalid credentials popup is visible', async ({ page }) => {
        await username.fill(faker.internet.username());
        await password.fill(faker.internet.password());
        await signInBtn.click();
        await expect(errorPopup).toBeVisible();
    });



})