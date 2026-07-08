/*

Page Object Model

Example

SearchPage.ts
import { Page } from "@playwright/test";

export class SearchPage {

constructor(private page: Page){}

city = this.page.locator("#city");

checkin = this.page.locator("#checkin");

checkout = this.page.locator("#checkout");

search = this.page.locator("#search");

async searchHotel(cityName:string){

await this.city.fill(cityName);

await this.search.click();

}

}

*/