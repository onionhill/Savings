const axios = require('axios');
const cheerio = require('cheerio');
const puppeteer = require('puppeteer');

async function webcruiter_cherrio(){
    const response = await axios.get('https://722400.webcruiter.no/Main/Recruit/Public/4466508031?language=NB').then( (response) => {
        const $ = cheerio.load(response.data);
        const title_row = $('.card-block .row:first');
        const title = title_row.find('h2:first').text().trim();
        const url = title_row.find('a:first').attr('href');
        const img_url = title_row.find('img:first').attr('src');

        const deadline = $('span:contains("Søknadsfrist")').closest('div').next().text().trim();

        console.log('title for classified is : ' + title+ "\n" , url, "\n",deadline, "\n",img_url);
    });
}

//webcruiter_cherrio();


async function jobb_i_norge_puppeteer(){
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto('https://www.jobbnorge.no/ledige-stillinger/stilling/227836/stipendiat-innen-nevropsykologi');

    await page.click('#coiPage-1 > div.coi-banner__page-footer > button.coi-banner__accept');

    const text = await page.evaluate(() => {
        return document.querySelector('h1.heading').innerText;
    });

    console.log('text is : ' + text);
    //await browser.close();
}


jobb_i_norge_puppeteer();