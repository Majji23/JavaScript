import { chromium, firefox, test } from "@playwright/test";

test("login redbus in Edge", async () => {
    //Launch EDGE browser instance
    // Launch a Chromium browser instance
    const browser = await chromium.launch({channel:'msedge', headless: false, args: ['--start-maximized']});
    // Create a new browser context and page
    const context = await browser.newContext();
    // Open a new page
   const page =await context.newPage();
    await page.goto("https://www.redbus.in/");
    const pageTitle = await page.title();
    const pageURL = page.url();
    // Log the title and URL of the page
    console.log("Page Title:", pageTitle);
    console.log("Page URL:", pageURL);

    // Wait for 5 seconds to observe the page
    await page.waitForTimeout(5000);

    //Launch Firefox browser instance
    const firefoxBrowser = await firefox.launch({channel:'firefox', headless:false, args:['--start-maximized']});
    //create a new broser context and page
    const firefoxContext = await firefoxBrowser.newContext();
    // Open a new page in Firefox
    const firepoxPage= await firefoxContext.newPage();
    // Navigate to the same URL in Firefox
    firepoxPage.goto('https://www.flipkart.com');
    const firefoxPageTitle = await firepoxPage.title();
    const firefoxPageURL = firepoxPage.url();
    // Log the title and URL of the Firefox page
    console.log("Firefox Page Title:", firefoxPageTitle);
    console.log("Firefox Page URL:", firefoxPageURL);
    // Wait for 5 seconds to observe the Firefox page
    await firepoxPage.waitForTimeout(5000);

    //close the browsers
    await browser.close();
    await firefoxBrowser.close();
});