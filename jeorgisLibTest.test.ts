import { By } from "selenium-webdriver";
import { LibraryClass } from "./jeorgisPage";

const lib = new LibraryClass();
const fs= require('fs');


test("testing buttons and search functions", async () => {
    await lib.navigate();
    await lib.driver.manage().window().maximize();
    await lib.click(lib.askBtn);
    await lib.driver.sleep(1000);

    //! catalog search test 

    await lib.searchC('Sword of Truth');
    await lib.cataTabs();
    await lib.driver.sleep(1000);
    
    await lib.searchC('12345678901234567890123456789012345678901234567890');
    await lib.numTabs();
    await lib.driver.sleep(1000);
    
    await lib.searchC('!@#$%^&*!@');
    await lib.symTabs();
    await lib.driver.sleep(1000);
    
    await lib.searchC('qweryuiopasdfghjklzxcvbnmqwertyuiopasdfghjklzxcvbn');
    await lib.letTabs();

    //!website search test
    await lib.driver.sleep(1000);
    await lib.click(lib.webSiteBtn);
    await lib.searchW('Rosetta Stone');
    await lib.driver.sleep(2000);
    let webText = await lib.getWebResults();
    expect(webText).toContain('Rosetta Stone');
    await fs.writeFile(`${__dirname}/Website.png`,
    await lib.driver.takeScreenshot(), "base64",
    (e) => {
        if (e) console.error(e)
        else console.log('picture worked')
    });
    await lib.click(lib.homeBtn);




   //!Location search test

   await lib.click(lib.locationsBtn);
   await lib.driver.sleep(1000);
   await lib.click(lib.daybreak);
   await lib.click(lib.address);
   await lib.driver.sleep(1000);
   await lib.locTabs();

   await lib.canHover();
   await lib.driver.sleep(1000);
   await lib.click(lib.getDir);
   await lib.dirTabs(); 
   await lib.click(lib.homeBtn);

   //! Drop down menu testing

   await lib.click(lib.eventsBtn);
   await lib.driver.sleep(1000);
   await lib.click(lib.bigPlay);
   await fs.writeFile(`${__dirname}/bigplay.png`,
    await lib.driver.takeScreenshot(), "base64",
    (e) => {
        if (e) console.error(e)
        else console.log('picture worked')
    });

   await lib.click(lib.eventsBtn);
   await lib.driver.sleep(1000);
   await lib.click(lib.winReading);
   await fs.writeFile(`${__dirname}/WinterReading.png`,
    await lib.driver.takeScreenshot(), "base64",
    (e) => {
        if (e) console.error(e)
        else console.log('picture worked')
    });

   await lib.click(lib.learnBtn);
   await lib.driver.sleep(1000);
   await lib.click(lib.health);
   await fs.writeFile(`${__dirname}/Health.png`,
    await lib.driver.takeScreenshot(), "base64",
    (e) => {
        if (e) console.error(e)
        else console.log('picture worked')
    });

   await lib.click(lib.learnBtn);
   await lib.driver.sleep(1000);
   await lib.click(lib.homework);
   await fs.writeFile(`${__dirname}/Homework.png`,
    await lib.driver.takeScreenshot(), "base64",
    (e) => {
        if (e) console.error(e)
        else console.log('picture worked')
    });

   await lib.click(lib.whatWeBtn);
   await lib.driver.sleep(1000);
   await lib.click(lib.comingSoon);
   await fs.writeFile(`${__dirname}/ComingSoon.png`,
    await lib.driver.takeScreenshot(), "base64",
    (e) => {
        if (e) console.error(e)
        else console.log('picture worked')
    });

   await lib.click(lib.whatWeBtn);
   await lib.driver.sleep(1000);
   await lib.click(lib.newMusic);
   await lib.driver.sleep(2000);
   await fs.writeFile(`${__dirname}/NewMusic.png`,
    await lib.driver.takeScreenshot(), "base64",
    (e) => {
        if (e) console.error(e)
        else console.log('picture worked')
    });

   await lib.click(lib.weRecommendBtn);
   await lib.driver.sleep(1000);
   await lib.click(lib.bookClub);
   await lib.driver.sleep(2000);
   await fs.writeFile(`${__dirname}/BookClub.png`,
    await lib.driver.takeScreenshot(), "base64",
    (e) => {
        if (e) console.error(e)
        else console.log('picture worked')
    });

   await lib.click(lib.weRecommendBtn);
   await lib.driver.sleep(1000);
   await lib.click(lib.forTeens);
   await lib.driver.sleep(2000);
   await fs.writeFile(`${__dirname}/ForTeens.png`,
    await lib.driver.takeScreenshot(), "base64",
    (e) => {
        if (e) console.error(e)
        else console.log('picture worked')
    });
    await lib.driver.sleep(1000);
    await lib.click(lib.homeBtn);
    await lib.driver.sleep(2000);

    //! Testing accessibility functions
    await  lib.getElement(By.css('.mon-logo-image'));

    await lib.click(lib.access);
    
    await lib.driver.sleep(5000);
    await lib.click(lib.eventsBtn);
    await lib.scroll();

   




   await lib.driver.quit();


});