import {test,expect, Locator} from '@playwright/test';

test('loactor in built',async({page})=>{
    await page.goto("https://demoqa.com/automation-practice-form");
    await page.getByPlaceholder("First Name").fill("Satyarth");
    const lastNameField: Locator = page.getByPlaceholder("Last Name");
    await expect(lastNameField).toBeVisible();
    const emailField : Locator = page.getByPlaceholder("name@example.com");
    await expect(emailField).toBeVisible();
await page.getByText("Sports").click();

const SportsChckboxes : string [] =["Sports","Reading","Music"];

for(const checkbox of SportsChckboxes){
    await page.getByText(checkbox).check();
}
await page.pause();
})