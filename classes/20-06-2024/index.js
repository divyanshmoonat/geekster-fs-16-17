// import fs from "fs"; // ESM
const fs = require("fs"); //CJS
const path = require("path");
const readline = require("readline");
const childProcess = require("child_process");

const wifi = require('node-wifi');

wifi.init({
  iface: null, // network interface, choose a network interface from wifi.interfaces
});

const fileName = __dirname + "users.json"; // Relative path

const writeFileDemo = (filePath, content = "") => {
  // Write operation
  fs.writeFile(filePath, content, (err) => {
    if (err) {
      console.log("ERROR OCCURED WHILE WRITING FILE");
      return;
    }
    console.log("File written successfully");
  });
};

const newUser = {
  id: 3,
  name: "Undertaker",
  age: 60,
};

// Read data from file
const readFileDemo = (filePath) => {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      console.log("ERROR READING FILE", err);
      return;
    }
    console.log("FILE DATA =>", data.toString());
    const usersData = JSON.parse(data.toString());
    usersData.push(newUser);
    console.log(usersData);

    writeFileDemo(fileName, JSON.stringify(usersData));
  });
};

const users = [
  {
    id: 1,
    name: "Roman Regins",
    age: 50,
  },
];

// writeFileDemo(fileName, JSON.stringify(users));
// readFileDemo(fileName);

const appendFileDemo = (filePath, content) => {
  fs.appendFile(filePath, "\n" + content, (err) => {
    if (err) {
      console.log("ERROR WHILE APPENDING DATA TO THE FILE", err);
      return;
    }
    console.log("Data added to file successfully");
  });
};

// appendFileDemo(fileName, JSON.stringify(newUser));

const deleteFileDemo = (filePath) => {
  fs.unlink(filePath, (err) => {
    if (err) {
      console.log("ERROR WHILE DELETING FILE", err);
      return;
    }
    console.log("File deleted successfully");
  });
};

// deleteFileDemo(fileName);

/**
 * fs.rmdir(); // Delte a folder
 * fs.mkdir(); // Create a folder
 * fs.access(); // Check if a file exists
 */

// console.log(__dirname);
// console.log(__filename);

// const fullPath = path.join(__dirname, "files", "../../../../downloads", "example.txt");
// console.log(fullPath);

// D:\Classes\Geekster\downloads\example.txt

// const extension = path.extname(
//   "D:ClassesGeekster\fs-16-17classes\20-06-2024\profile-picture.jpg"
// );
// console.log(extension);

// const pathDetails = path.parse(
//   "D:ClassesGeekster\\fs-16-17classes\\20-06-2024\\profile-picture.jpg"
// );
// console.log(pathDetails);

// const normalizedPath = path.normalize('/path/to/../file.txt');
// const normalizedPath = path.join("/path/to/../file.txt");
// console.log(normalizedPath)

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.question("Enter your name : ", (answer) => {
//   console.log(`Hi, ${answer}`);
//   rl.close();
// });

// childProcess.exec("start code");

wifi.scan((err, networks) => {
  if (err) {
    console.log(err);
  } else {
    console.log(networks);
  }
});