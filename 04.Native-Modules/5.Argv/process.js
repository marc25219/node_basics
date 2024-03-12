/*
 * Author: Marc Ciruelos Santos
 * Date: 11-03-2024
 * Description: Example of the process function
 */

// Array of the input arguments
console.log(process.argv)

// current working directory
console.log(process.cwd());

// environment variables //-- URL=https://www.google.es node 1.Process.js
console.log(process.env.URL)

// Correct
process.exit(0)

// Wrong
process.exit(1)

// Listen an maganage processes

process.on('exit', (() => {
    // management
}))