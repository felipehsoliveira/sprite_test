import { test, expect } from '@playwright/test';
const elements = require('../data/elements.ts')

test.describe('E2E sprite tests', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('http://www.uitestingplayground.com/');
    });

    test('Click dynamic Button', async ({ page }) => {
        await page.locator(elements.mapping.dynamic_locator).click();
        await expect(page).toHaveTitle(/Dynamic ID/);
        await page.locator(elements.mapping.blue_button).click();

    })

    test('Find the class attribute', async ({ page }) => {
        await page.locator(elements.mapping.class_locator).click();
        await expect(page).toHaveTitle(/Class Attribute/);
        page.on('dialog', dialog => console.log(dialog.message() && dialog.accept()));
        
        await page.locator(elements.mapping.btn_class_atribute).click();
        await page.locator(elements.mapping.blue_button).click();

    });

    test('Click delay button', async ({ page }) => {
        await page.locator(elements.mapping.loadDelay_locator).click();
        await expect(page).toHaveTitle('Load Delays');
        await page.locator(elements.mapping.blue_button).click();

    })
});