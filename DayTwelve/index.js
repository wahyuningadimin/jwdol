const { fetchData }= require("./async");
const { person, arr }= require("./json");
const tryThrow = require("./testing");





console.log(person)
console.log(arr)
fetchData
//kalo yg mau d import itu banyak, bisa pake {} (eg.{person, person2, arr, arr2})
//kalo cma 1, gaperlu {}

console.log(tryThrow)