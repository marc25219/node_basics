/*
 * Author: Marc Ciruelos Santos
 * Date: 11-03-2024
 * Description: Example of fileSystem module reading files (bash ls).
 */
const fs = require("node:fs");

const folder = process.argv[2] ?? '.'

fs.readdir(folder, (err, files) => {
    if (err) {
        console.error('Error reading directory: ', err)
        return;
    }

    files.forEach(file => {
        console.log(file);
    })
})