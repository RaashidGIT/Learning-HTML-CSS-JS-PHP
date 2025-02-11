// error = object with a description of 
//             something that went wrong

// eg:- Can't open a file
//      Lose Connection
//      User types incorrect input
//      Type Error


// throw = executes a user-defined error

try{
    let x = window.prompt("Enter a #");
    x = Number(x);
  
    if(isNaN(x)) throw "That wasn't a number!";
    if(x == "") throw "That was empty!";
  
    console.log(`${x} is a number`);
  }
  catch(error){
    console.log(error);
  }
  finally{
    console.log("This always executes");
  }