import { By } from "selenium-webdriver";
import { BasePage } from "./basePage";
const fs= require('fs')

export class LibraryClass extends BasePage {
    //! Locators
    askBtn: By = By.id('lcs_slide_out_button-22303')
    catalogSB: By = By.xpath('(//input[@id="searchTitle"])[3]')
    webSiteBtn: By = By.xpath('(//span[text()="WEBSITE"])[3]')
    websiteSB: By = By.xpath('(//input[@id="searchWebsite"])[3]')
    eventsBtn: By = By.xpath('//a[text()="Events"]')
    bigPlay: By = By.xpath('//a[text()="The Big Play"]')
    winReading: By = By.xpath('//a[text()="Winter Reading"]')
    learnBtn: By = By.xpath('//a[text()="Learn"]')
    health: By = By.xpath('//a[text()="Health"]')
    homework: By = By.xpath('//a[text()="Homework Help"]')
    whatWeBtn: By = By.xpath('//a[text()="What We Have"]')
    comingSoon: By = By.xpath('//a[text()="Coming Soon"]')
    newMusic: By = By.xpath('//a[text()="New Music"]')
    weRecommendBtn: By = By.xpath('//a[text()="We Recommend"]')
    bookClub: By = By.xpath('//a[text()="Book Clubs"]')
    forTeens: By = By.xpath('//a[text()="For Teens"]')
    locationsBtn: By = By.xpath('//span[text()="Locations"]')
    daybreak: By = By.xpath('//h5[text()="DAYBREAK"]')
    address: By = By.xpath('//a[text()="11358 Grandville Ave, South Jordan, UT 84009"]')
    

    

 
    //! Constructor
    constructor() {
        super({url:'https://www.slcolibrary.org/'})
    };

    //! Methods

    async getResults() {
        return this.getText(this.result)
    };

    async search(searchThing: string) {
        return this.setInput(this.searchBar, `${searchThing}\n`);
    };

    async tabs() {
        let myTabs = await this.driver.getAllWindowHandles();
        await this.driver.switchTo().window(myTabs[1]);
        await this.driver.sleep(1500);
        fs.writeFile(`${__dirname}/xpicture.png`,
        await this.driver.takeScreenshot(), "base64",
        (e) =>{
            if (e) console.log;
            else console.log("This worked!");
        });
        await this.driver.close();
        await this.driver.switchTo().window(myTabs[0]);
    };

};