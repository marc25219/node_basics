// In case "/promises" not exists:
// const fs = require("node:fs");
// const { promisify } = require('node:util')
// const readFilePromise = promisify(fs.readFile)

// File System Module
const fs = require("node:fs/promises");

// Asynchronous
// Read File 1
fs.readFile("./file1.txt", "utf-8").then((text) => {
  console.log("Text readed File 1: " + text);
});

console.log("Text message while reading file...");

// Read File 2
fs.readFile("./file2.txt", "utf-8").then((text) => {
  console.log("Text readed File 2: " + text);
});
