/*
 * Author: Marc Ciruelos Santos
 * Date: 11-03-2024
 * Description: Example of OS module
 */

const os = require("node:os");

console.log(os.platform());
console.log(os.arch());
console.log(os.cpus());
