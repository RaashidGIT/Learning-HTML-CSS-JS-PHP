let element = document.querySelector("#fruit");
let child = element.firstElementChild;
child.style.backgroundColor = "lightgreen";

/*
let element = document.querySelector("#fruit");
let child = element.lastElementChild;
child.style.backgroundColor = "lightgreen";
*/

/*
let element = document.querySelector("#fruit");
let child = element.children[0]];
child.style.backgroundColor = "lightgreen";
*/

/*
let element = document.querySelector("#fruit");
let child = element.children;
child.style.backgroundColor = "lightgreen";
*/

/*
let element = document.querySelector("#fruit");
let child = Array.from(element.children);

children.forEach(child => child.style.backgroundColor = "lightgreen");
*/

// .firstElementChild
// .lastElementChild
// .parentElement
// .nextElementSibling
// .previousElementSibling
// .children[]
// Array.from(.children)

/*
let element = document.querySelector("#fruit");
let child = element.lastElementChild;
child.style.backgroundColor = "lightgreen";

//Here the last child would be the script tag, be aware of it.
*/

/*
let element = document.querySelector("#vegetables");
let parent = element.parentElement;
parent.style.backgroundColor = "lightgreen";
*/

/*
let element = document.querySelector("#vegetables");
let sibling = element.nextElementSibling;
sibling.style.backgroundColor = "lightgreen";
*/

/*
let element = document.querySelector("#vegetables");
let sibling = element.previousElementSibling;
sibling.style.backgroundColor = "lightgreen";
*/