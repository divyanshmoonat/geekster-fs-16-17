const axios = require("axios");
const cheerio = require("cheerio");
const xlsx = require("xlsx");

const fs = require("fs");

const pageUrl = "https://www.naukri.com/it-jobs?src=gnbjobs_homepage_srch";

// fetch(pageUrl, {
//   headers: {
//     "Content-Type": "text/html",
//   },
// })
//   .then((res) => res.text())
//   .then((data) => console.log(data))
//   .catch((err) => console.log("ERR", err));

const getPageData = async () => {
  try {
    const response = await axios.get(pageUrl, {
      headers: {
        "Content-Type": "text/html",
      },
    });
    const data = response.data; // HTML Data
    console.log(data);

    // const pageData = fs.readFileSync("pagedata.txt");
    // console.log(pageData.toString());
    const pageData = data;
    const $ = cheerio.load(pageData.toString());
    const titles = $(".a-size-medium.a-color-base.a-text-normal"); // Input -> document.querySelector("TARGETING INFORMATION")

    const titlesData = [];

    titles.each((index, element) => {
      const title = $(element).text();
      titlesData.push(title);
      // products.push({
      //   name: title,
      // });
    });

    const pricesData = [];

    const prices = $(".a-price-whole");
    // console.log(prices);
    prices.each((index, element) => {
      const price = $(element).text();
      // console.log(price);
      pricesData.push(price);
    });

    // console.log(titlesData);
    // console.log(pricesData);

    const productsJson = titlesData.map((title, index) => {
      return {
        title,
        price: pricesData[index],
      };
    });

    // console.log(productsJson);

    // fs.writeFileSync("products.json", JSON.stringify(productsJson));

    // Excel

    const workbook = xlsx.utils.book_new();
    const sheet = xlsx.utils.json_to_sheet(productsJson);

    xlsx.utils.book_append_sheet(workbook, sheet, "Products");
    xlsx.writeFile(workbook, "products.xlsx");

    console.log("XLSX file created successfully!");
  } catch (err) {
    console.log("ERR RETREIVING DATA", err);
  }
};

// getPageData();
