const { Builder, By, Key, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const options = new chrome.Options();
const path = require('path');

async function Test(filename) {
    const driver = await new Builder().forBrowser('chrome').setChromeOptions(options).build();
    const assert = require('assert');

    try {
        
        await driver.get('http://localhost:4200/');
        const titleValue = await driver.getTitle();
        assert.strictEqual(titleValue, 'DataIngestion', 'Title attribute should be "Data Ingestion"');  
       
       
        const fileInput = await driver.findElement(By.css('input[type="file"]'));
        await driver.sleep(1000);
        const absoluteFilePath = path.resolve(__dirname, filename);
        await fileInput.sendKeys(absoluteFilePath);
        await driver.sleep(1000);
        
        const CategoryID = await driver.findElement(By.css('input[type="number"]'));
        await driver.sleep(1000);
        await CategoryID.sendKeys(1);
        await driver.sleep(1000);

        const UploadButton = await driver.findElement(By.xpath(`//button[contains(text(), 'Upload')]`));
        const isButtonEnabled = await UploadButton.isEnabled();
        if (isButtonEnabled) {
            await UploadButton.click();
        }

        //await driver.sleep(10000);

        const isElementPresent = await driver.wait(until.elementLocated(By.xpath(`//p[contains(text(),'No files have been ingested yet.')]`)), 5000)
            .then(() => true)
            .catch(() => false);
        return !isElementPresent;

    } finally {
        await driver.quit();
    }
}
(async () => {
    await Test('industry.csv')
        .then((fileIngested) => {
            if (fileIngested) {
                console.log('The file is ingested. Test Passed successfully');
            } else {
                console.log('The file is not ingested. Test Failed');
            }
        })
        .catch((error) => {
            console.error('Test failed:', error);
        });
    await Test('note.txt')
        .then((fileIngested) => {
            if (fileIngested) {
                console.log('The file is ingested. Test Failed');
            } else {
                console.log('The file is not ingested.Test Passed successfully');
            }
        })
        .catch((error) => {
            console.error('Test failed:', error);
        });
})();
