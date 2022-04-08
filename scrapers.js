const puppeteer = require('puppeteer')

async function scrapeLinkedIn(url) {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto(url)

    const el = await page.$x('//*[@id="productTitle"]')
    console.log({el})
}

scrapeLinkedIn('https://www.amazon.com/Godfather-Trilogy-4K-UHD/dp/B09PP57DW7/?_encoding=UTF8&pd_rd_w=094qx&pf_rd_p=cc3d6e86-d477-4b0e-8ce3-a46ea2292f65&pf_rd_r=NXX0XH9QQ8HS7B5CD3BM&pd_rd_r=8036a28e-01ca-45ad-aaec-0d1ee2cfedb2&pd_rd_wg=625PJ&ref_=pd_gw_crs_zg_bs_2625373011')
