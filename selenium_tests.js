const { Builder, By, Key, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const options = new chrome.Options();
const path = require('path');

async function Test() {
    const driver = await new Builder().forBrowser('chrome').setChromeOptions(options).build();
    const assert = require('assert');

    try {
        
        await driver.get('http://localhost:4200/');
        const titleValue = await driver.getTitle();
        assert.strictEqual(titleValue, 'DataIngestion', 'Title attribute should be "Data Ingestion"');  
       
       
        const fileInput = await driver.findElement(By.css('input[type="file"]'));
        await driver.sleep(1000);
        const absoluteFilePath = path.resolve(__dirname, 'industry.csv');
        await fileInput.sendKeys(absoluteFilePath);
        await driver.sleep(2000);
        
        const UploadButton = await driver.findElement(By.xpath(`//button[contains(text(), 'Upload')]`));
        const isButtonEnabled = await UploadButton.isEnabled();
        if (isButtonEnabled) {
            await UploadButton.click();
        }

        console.log('Test passed successfully!');
    } finally {
        await driver.quit();
    }
}

Test();
