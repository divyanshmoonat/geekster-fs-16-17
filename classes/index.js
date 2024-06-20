// import fs from "fs"; // ESM
const fs = require("fs"); //CJS

const writeFileDemo = () => {
  // Write operation
  fs.writeFile("sample1.txt", "Hello there!", (err) => {
    if (err) {
      console.log("ERROR OCCURED WHILE WRITING FILE");
      return;
    }
    console.log("File written successfully");
  });
};

const readFileDemo = () => {
  fs.readFile("sample.txt", (err, data) => {
    if (err) {
      console.log("ERROR READING FILE", err);
      return;
    }
    console.log("FILE DATA =>", data.toString());
  });
};

readFileDemo();
