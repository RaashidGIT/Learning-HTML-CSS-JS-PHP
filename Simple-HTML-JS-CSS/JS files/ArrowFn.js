// arrow function expression = compact alternative to a traditional function expression
//      =>

// You don't curly braces {} if your function uses more than one statement.

/*
const greeting = (userName) => console.log(`Hello ${username}`);
*/

/*
const percent = (x,y) => x / y * 100;

console.log(`${percent(45, 50)}%`);
*/

const grades = [100, 50, 90, 60, 80, 70];

grades.sort((x, y) => y - x);
grades.forEach((element) => console.log(element));