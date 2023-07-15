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

var hello = "Hello";

console.log(hello);

hello.innerHtml = "option";
console.log(hello);

/***************************************Logical operator **********************/

//---    !
//---    && and
//---     || Or

//*****************************Condition ? if true : else************************ */

let theGender = "Male";

theGender === "Male" ? console.log("Mr") : console.log("Mrs");
// if(tehGender === "Male")
// {
//     console.log("Mr");
// }else
//     console.log("Mrs");


//***** */ we can put a condition in a console.log()
console.log("**Put a condition in a console**");
console.log(`${theGender == "Male" ? "Mr" : "Mrs"}`);


/*********************************Logical OR || , Null undefined + Any Falsy value */


let price = null;
let test1 = undefined;
let test2 = 0;

console.log(`The price is ${price || 200}`);
console.log(`the test1 value is ${test1 || 100}`);
console.log(`The test2 value is ${test2 || 300}`);



/*************************************String methods part1******************************** */

//----charAt()
//--trim() will remove the spaces
let theName = " souchen  ";
console.log(theName.charAt(1));
console.log(theName.length);
console.log(theName.trim());

/*************************************String methods part2******************************** */

//---indexOf(value [Mand], start [Opt] 0)
//--lastIndexOf(value [Mand], start [opt] Length)
//--slice(Start [Mand], End [Opt] not include End)
//--Repeate(Times)[ES6]
//--split(seperator[Opt], Limit[Opt])



//------indexof : to search for the index of a character --> starting from the beginning
//------LastIndexOf : to search for the index of a character --> starting from the End
let a = "42 cumpus france";

console.log("The position of 'c' using IndexOf");
console.log(a.indexOf("c"));
// from the index 8 we will search about the index of (france)
console.log(a.indexOf("france", 8));

console.log("the position of 'c' using lastIndexOf");
console.log(a.lastIndexOf("c"));

//---slice : to cut from a sentence

console.log(a.slice(1)); // here cut from the character 1
console.log(a.slice(2,5)); // here cut from character position 2 to character position 4


//--------repeat()  -->repeat a sentence or a word number of time

console.log(a.repeat(3));


//------split ->  cut a sentence by using any indice

console.log(a.split(" ")); // split by using space

console.log("split with two parameters");
console.log(a.split("c", 5)); // split by using c , 5 time

/*************************************String methods part3******************************** */

//----substring(start [Mand], End [Opt] not including End)
//----substr(srat [Mand], characters to extract)
//----Includes(Value[Mand], start[Opt] Default 0) [ES6]
//---StartWith(Value [Mand], Start [Opt] Default 0) [ES6]
//---endWith(Value [Mand], Length [Opt] Default Full Length) [ES6]

let variable = "souchen from Morroco";
console.log("impliment substring-->");
console.log(variable.substring(2,6)); // give from ondex 2 to 5
console.log("impliment substr-->");
console.log(variable.substr(2,6)); // give from index 2 to 6

console.log("impliment includes with one element in parameter-->");
console.log(variable.includes("from")); // check if our sentence containe the word 'from'
console.log("Impliment includes with two element in parameter-->");
console.log(variable.includes("souchen", 3));// from the index 3 search for word 'souchen' if it exist return true else return false



console.log(variable.startsWith("s")); //if our sentence start with character 's' return true sinon return false
console.log(variable.startsWith("s",3)); //if our sentence from the character index 3 start with character 's' return true sinon return false

console.log("impliment function endsWith() with one parameter-->");
console.log(variable.endsWith("o")); // if our sentence end with character 'o' return true sinon return false
console.log("impliment function endsWith with two parameter-->");
console.log(variable.endsWith("e", 6)); // if our sentence from character 0 to character 6, ends with 'e' return true sinon return false


/***********************************Nullish Coalescing operator ??  ***************** ************/

var test = undefined;
console.log(`The price is--> ${test ?? 300}`);

/******************************************Switch statement**************** */

/**
 * Switch(expression)
 * {
 *          case1:
 *              code Block
 *              break;
 *          case2:
 *              code Block
 *              Break;
 *           default:
 *              code Block
 *} 
 *
 *      --Default Ordering
 *      --Multiple Match
 * 
 * 
 */

 let day = 0;

 switch(day)
 {
    case 0:
        console.log("Monday");
        break;
    case 1:
        console.log("thursday");
        break;
    default:
        console.log("Nothing");
 }