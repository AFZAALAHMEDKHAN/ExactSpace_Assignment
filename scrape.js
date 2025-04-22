require('dotenv').config();
const puppeteer = require('puppeteer');

const fs = require("fs");

const url_to_scrape = process.env.SCRAPE_URL;

const scrapeWebsite = async () => {
    const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
    executablePath: '/usr/bin/chromium',
  }); 

   //using this for testing
   /*  const browser = await puppeteer.launch({
        headless: true
    })  */

  const page = await browser.newPage();
  await page.goto(url_to_scrape);

  const data = await page.evaluate(() => ({
    title: document.title,
    heading: document.querySelector("h1")?.innerText || "No H1 Found"
  }));

  fs.writeFileSync("scraped_data.json", JSON.stringify(data, null, 2));
  await browser.close();
};

// Call the function
scrapeWebsite();
