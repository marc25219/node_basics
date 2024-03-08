// File System Module
const fs = require("node:fs/promises");

// IIFE = Inmediatly Invoked Function Expression

// Asynchronous (but awaits for... = sequencial)
(async () => {
  // Read File 1
  const text1 = await fs.readFile("./file1.txt", "utf-8");
  console.log("Text readed File 1: " + text1);

  console.log("Text message while reading file...");

  // Read File 2
  const text2 = await fs.readFile("./file2.txt", "utf-8");
  console.log("Text readed File 2: " + text2);
})();
