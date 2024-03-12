/*
 * Author: Marc Ciruelos Santos
 * Date: 11-03-2024
 * Description: Example of fileSystem module. Synchronous example.
 */

const fs = require("node:fs");

// Synchronous

// Stats
const stats = fs.statSync("./file1.txt");

console.log(
  "Stats :",
  stats.isFile(),
  stats.isDirectory(),
  stats.isSymbolicLink(),
  stats.size
);

// Read File 1
const text1 = fs.readFileSync("./file1.txt", "utf-8");
console.log("File text: " + text1);

// Read File 2
const text2 = fs.readFileSync("./file2.txt", "utf-8");
console.log("File text: " + text2);
