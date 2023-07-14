window.onload = function()
{
    document.querySelector("h1").style.color = "pink"
}



/*****************Output to screen**************** */

//---window.alert()
//---document.write()
//---console.log()


window.alert("hello souchen");
document.write("hello from 1337 compus");
console.log("hello js course");



/****************************Console Methods**************************** */

//--log
//--error
//--table


console.table(["Ossama", "Ahmed", "souchen"]);


//********************************Styling console************************** */



console.log("Hello %csouchen %cfrom 1337", "color: red; font-size: 40px","color: blue; font-size:20px ");

/********************************What is ECMAScript************ES6************ */
let name = "souchen";
console.log("hello " + name);
console.log(`hello ${name}`);