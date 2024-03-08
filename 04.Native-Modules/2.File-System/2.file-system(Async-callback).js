// File System Module
const fs = require("node:fs");

// Asynchronous
// Read File 1
fs.readFile("./file1.txt", "utf-8", (err, text) => {
  console.log("Text readed File 1: " + text);
});

console.log("Text message while reading file...");

// Read File 2
fs.readFile("./file2.txt", "utf-8", (err, text) => {
  console.log("Text readed File 2: " + text);
});
