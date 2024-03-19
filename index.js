const cheerio = require('cheerio')
const axios = require('axios')

const url = 'https://miningpoolstats.stream/vertcoin';
// const url = 'https://coinmarketcap.com/';


const miningData = [];

async function main() {
    try {
        const { data } = await axios.get(url)
        const $ = cheerio.load(data);
        // const listItems = $('#pools > tbody').each((i,e) => {
        //     miningData.push($(e))
        // })

        // const selector = '#pools > tbody > tr:nth-child(1)'
        const selector = "#pools > tbody > tr:nth-child(1)"

        console.log($('body > div > div.content-wrapper > section > table > tbody > tr > td:nth-child(2)').html())

        $(selector).each((parentIdx, parentElm) => {
            console.log(parentElm)
        })

        // const listItems2 = $("#pools > tbody > tr:nth-child(1) > td.sorting_1")
        // console.log(listItems2.html())
    } catch (e) {
        console.log("Error: ", e)
    }

}

main()