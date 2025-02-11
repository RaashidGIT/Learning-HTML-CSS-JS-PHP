// The idea behind a module is that it's a file of reusable code
// We can import sections of pre-written code to use whenever we want
// Great for any general utility values and functions
// Helps to make your code more reusable and maintanable
// Think of modules as seperate chapters of a book


// **********************ES6modules.js **********************
//import {PI, getCircumference, getArea} from "./ES6modulesEx.js";
import * as MathUtil from "./ES6modulesEx.js";

console.log(MathUtil.PI);

let circumference = MathUtil.getCircumference(10);
console.log(circumference);

let area = MathUtil.getArea(10);
console.log(area);