import { Page } from "@playwright/test";

export default class loginPage { //import

    constructor(protected page: Page){
    
    }

    public async loginToApplication(){
        await this.page.locator('').fill('')
    }
}

