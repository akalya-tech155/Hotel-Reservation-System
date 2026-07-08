/*

Module 1
Room Search
Scenario

Open Website

↓

Select City

↓

Choose Check-in Date

↓

Choose Check-out Date

↓

Select Guests

↓

Click Search

↓

Verify Available Hotels

Skills Learned

✔ Date Picker

✔ Dropdown

✔ Dynamic Locator

✔ Assertions

Example Test
test("Search hotel", async ({ page }) => {

await page.goto("URL")

await page.getByPlaceholder("Where are you going?").fill("Dubai")

await page.locator("checkin").click()

await page.locator("15").click()

await page.locator("checkout").click()

await page.locator("20").click()

await page.click("Search")

await expect(page.locator(".hotel-card")).toHaveCount(5)

})

*/