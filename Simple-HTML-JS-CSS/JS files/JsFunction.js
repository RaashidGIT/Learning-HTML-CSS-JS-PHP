//function = Define code once, and use it many times.
//                   To perform some code, call the function name.

startProgram();

function startProgram(){
    let userName = "Bro";
    let age = 21;
    
    happyBirthday(userName, age);
}

function happyBirthday(u, a){
    console.log("Happy birthday to you!");
    console.log("Happy birthday to you!");
    console.log("Happy birthday dear", u);
    console.log("Happy birthday to you!");
    console.log("You are", a,"years old!");
}