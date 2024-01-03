import { LibraryClass } from "./jeorgisPage";

const lib = new LibraryClass();
const fs= require('fs');


test("testing buttons and search functions", async () => {
    await lib.navigate();
    await lib.driver.manage().window().maximize();
    await lib.driver.sleep(1000);
    await lib.click(lib.askBtn);

    //! catalog search test 

    await lib.searchC('Sword of Truth');
    await lib.cataTabs();

    //!website search test
    await lib.driver.sleep(1000);
    await lib.click(lib.webSiteBtn);
    await lib.searchW('Rosetta Stone');
    await lib.driver.sleep(1000);
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
   await fs.writeFile(`${__dirname}/NewMusic.png`,
    await lib.driver.takeScreenshot(), "base64",
    (e) => {
        if (e) console.error(e)
        else console.log('picture worked')
    });

   await lib.click(lib.weRecommendBtn);
   await lib.driver.sleep(1000);
   await lib.click(lib.bookClub);
   await fs.writeFile(`${__dirname}/BookClub.png`,
    await lib.driver.takeScreenshot(), "base64",
    (e) => {
        if (e) console.error(e)
        else console.log('picture worked')
    });

   await lib.click(lib.weRecommendBtn);
   await lib.driver.sleep(1000);
   await lib.click(lib.forTeens);
   await fs.writeFile(`${__dirname}/ForTeens.png`,
    await lib.driver.takeScreenshot(), "base64",
    (e) => {
        if (e) console.error(e)
        else console.log('picture worked')
    });
   






    
   await lib.driver.quit();


});