import { test, expect } from '@playwright/test';


test.describe('navigation', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('http://www.uitestingplayground.com/');
    });

    test('Enter the page', async ({ page }) => {
        await page.getByRole('link', { name: 'Dynamic ID' }).click();
        // await page.pause();
        await expect(page).toHaveTitle(/Dynamic ID/);
        await page.getByRole('button', { name: 'Button with Dynamic ID' }).click();

    })

    test('Find the class attribute', async ({ page }) => {
        //Unfortunately, the pop-up is not triggering the simulated click.

        await page.getByRole('link', { name: 'Class Attribute' }).click();

        await expect(page).toHaveTitle(/Class Attribute/);
        page.on('dialog', dialog => console.log(dialog.message() && dialog.accept()));
        
        await page.locator("//button[contains(concat(' ', normalize-space(@class), ' '), ' btn-primary ')]").click();
        await page.locator("button.btn-primary").click();

    });


    test('click delay button', async ({ page }) => {
        await page.getByRole('link', { name: 'Load Delay' }).click();
        await expect(page).toHaveTitle('Load Delays');
        await page.getByRole('button', { name: 'Button Appearing After Delay' }).click();

    })
});