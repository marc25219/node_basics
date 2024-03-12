/*
 * Author: Marc Ciruelos Santos
 * Date: 11-03-2024
 * Description: Example of PATH module
 */

const path = require("node:path");

// Slash system
console.log(path.sep)

// Join
const filePath = path.join('root', 'folder' ,'file.txt')
console.log(filePath)

// Basename
const base = path.basename('root/folder/file.txt')
console.log(base)

const fileName = path.basename('root/folder/file.txt', '.txt')
console.log(fileName)

const extension = path.extname('root/folder/file.pdf')
console.log(extension)