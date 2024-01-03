import { By } from "selenium-webdriver";
import { BasePage } from "./basePage";
const fs= require('fs');


export class LibraryClass extends BasePage {
    //! Locators
    askBtn: By = By.id('lcs_slide_out_button-22303')
    catalogSB: By = By.xpath('(//input[@id="searchTitle"])[3]')
    resultCata: By = By.xpath('//a[text()="Sword of truth"]')
    webSiteBtn: By = By.xpath('(//span[text()="WEBSITE"])[3]')
    websiteSB: By = By.xpath('(//input[@id="searchWebsite"])[3]')
    resultWeb: By = By.xpath('(//b[text()="Rosetta Stone"])[1]')
    homeBtn: By = By.xpath('(//a[text()="The County Library"])[1]')
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
    redDot: By = By.xpath('//div[text()="Daybreak"]')
    getDir: By = By.xpath('//a[text()="Get Directions"]')
    access: By = By.css('mon-logo-image')
    font: By = By.xpath('//button[@class="column arrow-left"]')

    

    
   //! Constructor
    constructor() {
        super({url:'https://www.slcolibrary.org/'})
    };

    //! Methods

    async getCataResults() {
        return this.getText(this.resultCata)
    };

    async getWebResults() {
        return this.getText(this.resultWeb)
    };


    async searchC(searchThing: string) {
        return this.setInput(this.catalogSB, `${searchThing}\n`);
    };

    async searchW(searchThing: string) {
        return this.setInput(this.websiteSB, `${searchThing}\n`);
    };

    async cataTabs() {
        let myTabs = await this.driver.getAllWindowHandles();
        await this.driver.switchTo().window(myTabs[1]);
        await this.driver.sleep(1500);
        let cataText = await this.getCataResults();
        expect(cataText).toContain('Sword of truth'); 
        fs.writeFile(`${__dirname}/catalog.png`,
        await this.driver.takeScreenshot(), "base64",
        (e) =>{
            if (e) console.log;
            else console.log("This worked!");
        });
        await this.driver.close();
        await this.driver.switchTo().window(myTabs[0]);
    };

    
    async locTabs() {
        let myTabs = await this.driver.getAllWindowHandles();
        await this.driver.switchTo().window(myTabs[1]);
        await this.driver.sleep(1500); 
        fs.writeFile(`${__dirname}/loc.png`,
        await this.driver.takeScreenshot(), "base64",
        (e) =>{
            if (e) console.log;
            else console.log("This worked!");
        });
        await this.driver.close();
        await this.driver.switchTo().window(myTabs[0]);
    };

    async dirTabs() {
        let myTabs = await this.driver.getAllWindowHandles();
        await this.driver.switchTo().window(myTabs[1]);
        await this.driver.sleep(1500); 
        fs.writeFile(`${__dirname}/dir.png`,
        await this.driver.takeScreenshot(), "base64",
        (e) =>{
            if (e) console.log;
            else console.log("This worked!");
        });
        await this.driver.close();
        await this.driver.switchTo().window(myTabs[0]);
    };

    async canHover() {
        const hoverAction = this.driver.actions()
        const ctaElement = await this.getElement(this.redDot)
        await this.actionWiggle(hoverAction, ctaElement, 100)
        await hoverAction.perform() // Actions don't actually happen until perform is called
    };

};