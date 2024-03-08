// global variable inherit from globalThis on nodeJs

// GlobalThis: global <<-- nodejs <<-- globalThis --> browser --> window 

console.log(globalThis)
console.log(global)
console.log(globalThis.Math.E)
console.log(global.Math.E)