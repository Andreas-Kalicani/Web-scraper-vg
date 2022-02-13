const cheerio = require("cheerio");
const express = require("express");
const axios = require("axios");
const app = express();
const port = process.env.PORT || 5000


axios({
    method: "get",
    url: "https://www.vg.no/"
}).then(res => {
    const html = res.data;
    const $ = cheerio.load(html)
    const articles = []
   $("a[itemprop=url]").each(function (){
    const title = $(this).find(".headline").text()
    const url = $(this).attr("href")
    console.log(url)
    articles.push({ 
        title, 
        url
    })

  
       
    })
    console.log(articles)
}).catch(err => console.log(err))


app.listen(port, () => {
    console.log(`Server is running in ${port}`)
})

