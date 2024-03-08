// File System Module
import { readFile } from "node:fs/promises";

// Asynchronous
Promise.all([
  readFile("./file1.txt", "utf-8"),
  readFile("./file2.txt", "utf-8"),
]).then(([text1, text2]) => {
  console.log("First text:", text1), 
  console.log("Second text:", text2);
});
