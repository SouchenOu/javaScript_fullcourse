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

 //************************************Arrays************************************** */
 let myFriends = ["soukaina", "fati", "salma"];
 let books = ["test1", "test2", ["test3","test4"]];

 console.log(`Hello ${myFriends[0]}`);
 console.log(`Hello ${myFriends[1]}`);
 console.log(`Hello ${myFriends[1][3]}`);
 console.log(`Our book name --> ${books[2][0]}`);

 books[1] = "Harry potter"; // we can change the value of an element in array

 console.log(`My favorite book is--> ${books[1]}`);

 console.log(`The length of my array is--> ${books.length}`);

 /* Arrays methods [Adding and removing]

 ---unshift("","" Add Element to the first)
 ---Push("","") Add Element to the End
 ---shift() Remove first element from array
 ---Pop() Remove Last element from array

 */

 // unshift

var tab = ["13","37","42","24"];

tab.unshift("11","12","13"); // Add this element to the first of my array--> [11,12,13,13,37,42,24]

console.log(tab);

tab.push("30","40"); // push this element to the end of my array

tab.shift();
console.log("our array after impliment shift");
console.log(tab);
tab.pop();
console.log("our array after impliment pop");
console.log(tab);

/************************************Search in array************************************** */
/*****
 * Arrays Mrthod[Search]
 * indexof(Search Element, From Index[Opt])
 * lastIndexOf(search Element, From index[Opt])
 * includes(valueToFind, fromIndex[Opt])
 * 
 * 
 */


let myArray = ["A1", "A2", "A2", "A3"];

console.log(myArray.indexOf("A2")); // search for the position of element 'A2' in myArray
console.log(myArray.indexOf("A3", 3));// from the position 3 search for element A3

console.log(myArray.lastIndexOf("A2"));// search for element A2 from the end of our array

console.log(myArray.includes("A2")); // if a A2 exist in my array return true sinon return false
console.log(myArray.includes("A3", 1));// if from the position 1 element A3 exist return true sinon return false


/*******************************Sorting array*********************************** */


var arr=["10", 100, 200, 1000, 6, "60", "souchen"];

console.log(arr.sort()); // sort our element from the smallest to the biggest
console.log(arr.reverse()); // reverse all element sorting


/*************************************Slicing and splicing array***************************** */
/***
 * slice(start[opt], End [Opt] Not Including End)
 * --slice()=> All Array
 * 
 * ** */


var arr2 = ["Allmagn", "maroc", "france", "china", "Portugal", "Canada"];

console.log(arr2.slice()); // give all the element in the array
console.log(arr2.slice(1));// give me the element of the array from the position 1
console.log(arr2.slice(1,3)); //from the position one give me two element (it will print --> "Allmagn", "maroc", "france")
console.log(arr2.slice(-3));// starting count from the End so the element number -3 is china so will print from 'china' to the end'

arr2.splice(0,0, "uk", "US"); // from index 0 delete 0 element and put in first position 'UK' and 'US'
console.log(`Test one for splice--> ${arr2}`);
arr2.splice(1, 1, "tamazirt", "America");// from the index 1 delete element that his index is 1 and add this two element 'tamazirt' and 'America'
console.log(`Test two for splice--> ${arr2}`);

/****************************************Joining Arrays***************************************** */

/***** Arrays Method[Joining]
 * concat(array, array)==> return new array
 * join(Seperator)
 */

let list1= ["T1", "T2", "T3", "T4"];
let list2= ["Y1","Y2","Y3", "Y4"];
let list3=["U1","U2","U3","U4"];

let allList = list1.concat(list2);

console.log(`Our allList is--> ${allList}`);

// we can cancat 3 arrays in the same time

let allthreeList = list1.concat(list2,list3);

console.log(`Our three lists --> ${allthreeList}`);

// we can concat more than 3 elements in the same time

let elements = list1.concat(list2, list3, ["mam", "dad"], "souchen");

console.log(`concat more that three elements-> ${elements}`);


console.log(`join function result-> ${elements.join()}`); // will seperate all element of my array with ','
console.log(`join function result-> ${elements.join("")}`) // will print the elements array without any seperator
console.log(`join function result-> ${elements.join(" $ ")}`); //will seperate elements with '$'

/***************************************Loop for********************************** */
/******mainLoop and nestedLoop */

let products = ["keyboard", "Mouse", "Pen", "Pad", "Monitor"];

let colors = ["Red", "Green", "Black"];

mainLoop: for(let i = 0; i < products.length; i++)
{
    console.log(products[i]);
    nestedLoop: for(let j = 0; j < colors.length; j++)
    {
        console.log(`- ${colors[j]}`);
        if(colors[j] === "Green"){
            break mainLoop;
        }
    }
}


/***************************Advanced implimentation for Loop***************** */

let produit = ["Pad", "Monitor", "Iphone"];

let i = 0;

for(; i < produit.length; i++)
{
    console.log(produit[i]);
}

/**********************************Add products to page***************************** */


let pro1 = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];

let col = ["red", "Green", "Blue"];

let showCount = 5;
document.write(`<h1> show ${showCount} product</h1>`);

for(let i = 0; i < pro1.length; i++)
{
    document.write(`<div>`);
    document.write(`<h3> [${i + 1}]${pro1[i]}</h3>`);
   

    for(let j = 0; j < col.length; j++)
    {
        document.write(`<p>${col[j]}</p>`);
    }
    document.write(`<p>${col.join(" | ")}</p>`);
    document.write(`</div>`);

}



/*************************************Functions *********************** */

//-- what is Functions?
//-- User-undefined vs Built iN
//--Syntax + Basic Usage
//--Example From Real Life
//--Parameter + Argument
//--Practical Example


//syntax1
function sayHello()
{
    console.log(`Hello friends`);
}
//syntax2
const saySalut = function()
{
    console.log("Salut mon amie");
}
//Syntax3

const SayHallo = () =>{
    console.log("Hallo Hallo");
}



console.log("****");
const hummus = function(factor) {
    const ingredient = function(amount, unit, name) {
      let ingredientAmount = amount * factor;
      if (ingredientAmount > 1) {
        unit += "s";
      }
      console.log(`${ingredientAmount} ${unit} ${name}`);
};
    ingredient(1, "can", "chickpeas");
    ingredient(0.25, "cup", "tahini");
    ingredient(0.25, "cup", "lemon juice");
    ingredient(1, "clove", "garlic");
    ingredient(2, "tablespoon", "olive oil");
    ingredient(0.5, "teaspoon", "cumin");
};

hummus(123);

/******************************************** */

const check1 = (y) => { 
    return y * 2;
}

const check2 = y => y * 3;
/********************Rest parameters***************** */

function calcule(...numbers)
{
    let result = 0;
    for(let i = 0; i < numbers.length; i++)
    {
        result += numbers[i];
    }
    console.log(`The sum is -> ${result}`);
}

calcule(10,20,30,40,50,60,70);


/**********************Anonymous function***************************** */


let calculeLet = function (num1, num2)
{
    return num1 + num2;
}
console.log(calculeLet(10,20));


document.getElementById("firstBTN").onclick = function()
{
    document.write("salue mon amie");
}

setTimeout(function(){console.log("Good job")}, 2000);
/***************Function inside a function ******************* */
console.log("Impliment a function inside another function");
function sayMessage(fName, lName)
{
    let message = "Ich bin soukaina";

    function concatMsg()
    {
        return `${message}, ${fName}, ${lName}`;
    }

    return concatMsg();

}
console.log(sayMessage("soukaina", "Ouchen"));

/*************************************Objects******************** */
console.log("object implement");

let day1 = {
    squirrel : false,
    events: ["work", "touched tree", "pizza", "running"]
};

console.log(day1.squirrel);


