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

//*************Arrow function************************* */
let printTest1 = () =>
{
    return 1;
}

let printTest2 = () => 2;

let printTest3 = (num1, num2) => num1 + num2; 

/*************************Block scope************************* */

//but when we declare  a 'x' variable with var in inside and outside  of the condition we will have a problem of duplicated variable


var x = 10;
if(10 ===10)
{
    let x = 50;
    console.log(`our x here is-> ${x}`);
}

console.log(`Our x here is--> ${x}`);

/********************************* */
/****************Scope  Lexical scope **************/

function parent()
{
    let x = 10;

    function shild()
    {
        console.log(`The x is ${x}`);
    }
    shild();
}

parent();

/*********************Higher order Function - MAP******************* */


/**** Higher order functions 
 * is a function that accepts functions as parameters and/or returns a function
 * 
 * 
 * 
 * --------Map:
 * ----method created a new array
 * populated with the results of calling a provided function on every element
 * In the calling array
 * 
 * Syntax:   map(callBackFunction(Element, Index, Array) {}, thisArg)
 * -Element => The current element being processed in the array
 * -Index => The index of the current element being processed in the array
 * -Array => The current array
 * 
 */

let myNums = [10,20,30,40,50,60,70,80,90];
let newArray = [];

for(let i = 0; i < myNums.length ; i++)
{
    newArray.push(myNums[i] * 2);
}

// we will implement this using map
// Method 1

console.log("Test1**************");
let mapTest1 = myNums.map(function(element, Index, array){
     return element + element;
    //  console.log(`Current element ${element}`);
    //  console.log(`Current index ${Index}`);
    //  console.log(`Current array ${array}`);
    
    }, 10);
console.log("After using map***");
console.log(mapTest1);

// Method 2*
console.log("Test2******");
let mapTest2 = myNums.map((element) => element + element);
console.log(mapTest2);



//example

console.log("Test3********");

function ADD(element)
{
    element + element; 
}

let mapTest3 = myNums.map(ADD);

console.log(mapTest3);


/***************Map Practise********************** */

console.log("Exercice1-->  UpperCase to LowerCase and vise versa ");

let tabTest1 =  [1, -10, -200, 20];
let SwappingElzero = "SoUcHeNFROM1337";
let ignoreBoolean = "Elz123ero";

let sw = SwappingElzero.split("").map(function(element, Index, array){
    return (element === element.toUpperCase()) ? element.toLowerCase() : element.toUpperCase();
});
console.log(`Map testing--> ${sw}`);


console.log("Exercice2-->  nigative to positive and vise versa");

let env = tabTest1.map(function (element, Index, Array){
    return -element;
})

console.log(env);


console.log("Exercice3--> IS not a number");

let NotNB = ignoreBoolean.split("").map(function(element, Index, Array){
    return  isNaN(parseInt(element)) ? element : "";
})

console.log(NotNB);

// Arrow function version
console.log("Arrow function");


let NotNb = ignoreBoolean.split("").map((element)=> (isNaN(parseInt(element)) ? element : ""))
console.log(NotNb);



/**************************************Filter******************** */

let Myfriends = ["soukaina", "basma", "kawtar","arwa", "meriem", "khawla", "Ahmed"];
let numbers = [10, 20, 100, 400];

// Test Map vs Filter
console.log("Map vs filter Test1********");
console.log("Using Map test1*****");
let filterTest1 = numbers.map(function(element){
    return element + element;
});

console.log(filterTest1);


console.log("Using filter test2****");
let filterTest2 = Myfriends.filter(function(element){
    return element.startsWith("A");
});

console.log(filterTest2);

// filter : filtrer les element , so here it will note return true or false but it will filter impaire element and return just paire element
// that is the difference between map and filter --> map return true or false but filter it will filter wrong element
console.log("Using filter test3****");
let filterTest3 = numbers.filter(function(element){
    return element % 2 === 0 ? true : false;

})

console.log(filterTest3);


console.log("Using filter test4");
let mot = ["code", "Hallo", "Salut", "abs", "bz"];
let mots = "code Hallo Salut abs bz";
let filtertest4 = mot.filter(function(element){
    return element.length <= 4;
})

console.log(filtertest4);

// This example show the difference between map and filter

console.log("To show the difference between map and filter");
let twoTests = ["10", "check1", 20, "hallo"];

let mapTest5 = twoTests.map(function(element){
    return isNaN(parseInt(element));
})
console.log("About map");
console.log(mapTest5);

let filterTest5 = twoTests.filter(function(element){
    return isNaN(parseInt(element)); 
})
console.log("About filter");
console.log(filterTest5);

/********************Reduce method******************* */

//method execute a reducer function on each  element of the array
//resulting in a single output value


// syntax : reduce(callBackFunc(Accumulator, current_value, current_index, Source_array{ }, initialValue))
//--Accumulator : the accumulator value previously returned in the last invocation
//--Current val: The current element being processed in the array
//--Index : The index of the current element being processed in the array
//--------------Starts from index 0 if an initialValue is provided 
//--------------otherwise, it starts from index 1
//-Array => The current Array


console.log("Tesing reduce function");
let reduceTest1 = [12, 13, 14, 15];

let add = reduceTest1.reduce(function(accu, current, index, src){
    console.log(`accu is-> ${accu}`);
    console.log(`current is-->${current}`);
    console.log(`index is --> ${index}`);
    console.log(`src is--> ${src}`);
    return accu + current;
}, 5);
// 5 here in the initial value we will be start with (it will be accu valut)
/* so the result is 
5 + 12
17 + 13
30 + 14
44 + 15
THE final result is 54
*/

console.log("Practise reduce");

console.log("Practice 1");

let theBiggest = ["Bla", "Propaganda", "Other", "abc", "Battery", "Test"];
let removeChars = ["E", "@", "@", "L", "Z", "@", "@", "E", "R"];

let reduceTest3 = theBiggest.reduce(function(accu, current){
    return (accu.length > current.length) ? accu : current;
})

console.log(`The biggest element is-> ${reduceTest3}`);

console.log("Practise 2");

let reduceTest4 = removeChars.filter(function(element){
    return !element.startsWith("@");
}).reduce(function(accu, current){
    return `${accu} ${current}`;
})
console.log(reduceTest4);

/****************************ForEach********************** */

//---- Method executes a provided  function once for each arrayElement

/*syntax forEach(callBackFunction(Element, Index, Array){}, thisArg)
---Element=> The current element bieng processed in the array
---Index=> The index of the current element being  processed in the array
---Array=> The current Array

Note:
---Doesnt return Anything
---Break will not  Break the Loop

*/


let liElement = document.querySelectorAll("ul li");
console.log(liElement);


// let forAchTest1 = liElement.forEach(function(element){
//     element.onclick = function(){
//         console.log(this);
//     };
// });


let forAchTest2 = liElement.forEach(function(element){
            element.onclick = function(){
                element.classList.add("active");
                console.log(this);
            };
});

let divsAll = document.querySelectorAll(".content");
let forAchTest3 = liElement.forEach(function(element){
    element.onclick = function(){
        element.classList.remove("active");
        console.log(this);

        divsAll.forEach(function(element){
            element.style.display = "none";
        })


    }
})
   

/******************Higher order function challenge ******************/

let string1 = "1, 2,3,EE, l, z, e, r, O, _ , W, e, b, -, S, c, h, o, o, l, 2, 0 ,z";

let solution = '????';

console.log(solution);


console.log("Exercice about map, filter, reduce, forEach ");
let result = string1.split("").map(function(element){
    return element === element.toUpperCase() ? element.toLowerCase() : element;

}).filter(function(element){
    return element.startsWith("e") || element.startsWith("l") || element.startsWith("z") || element.startsWith("e") || element.startsWith("r") || element.startsWith("o") || element.startsWith("w") || element.startsWith("s") || element.startsWith("b") || element.startsWith("e") || element.startsWith("r") || element.startsWith("o") || element.startsWith("w") || element.startsWith("s") || element.startsWith("c") || element.startsWith("e") || element.startsWith("r") || element.startsWith("o") || element.startsWith("w") || element.startsWith("s") || element.startsWith("h") || element.startsWith("e") || element.startsWith("r") || element.startsWith("o") || element.startsWith("w") || element.startsWith("s") || element.startsWith("o") || element.startsWith("e") || element.startsWith("r") || element.startsWith("o") || element.startsWith("w") || element.startsWith("s") || element.startsWith("l") ;
    
    
}).reduce(function(accu, current){
    console.log(`accu--> ${accu}`);
    //(accu !== current) ? console.log(accu) : console.log("");
})

console.log(`The result is ${result}`);


/****************************Object**************************** */

/*****
 * 
 * 
 * Intro and what is object
 * Testing window object
 * Accessing object
 */

console.log("*************Object practising***********");


let object1 = {
    //Proprties
    theName: "souchen",
    theAge: 24,
    //Methods
    sayHello: function()
    {
        console.log(`hello  souchen`);
    }

}

console.log(object1.theName);
console.log(object1.theAge);
console.log(object1.sayHello());

const theUser = {
    theName : "soukaina ouchen",
    "country of" : "Maroc",
};

console.log(theUser.theName);
console.log(theUser["country of"]);


/********Nested Object and advanced examples************** */

let user1 = {
    name: "soukaina",
    age: 24,
    skils: ["Html", "css", "Js"],
    available: false,
    address: {
        Location:"al yassmina",
        // Thid is the nested object
        place: {
            one: "Agadir",
            two: "khouribga",
        },
    },

    checkAvailable : function()
    {
        if(user1.available === true)
        {
            return `Free for work`;
        }
        return `Not free for work`;
    }
}


console.log("The address is-->");
console.log("Using method 1");
console.log(user1.address.Location);
console.log("Using method 2");
console.log(user1["address"]["Location"]);


console.log("Check available");
console.log(user1.checkAvailable());


console.log("His Skilles is-->");
console.log(user1.skils.join("|"));

/***********************Create object with new keyword************************* */


/******
 * Create with new keyword new Object()
 * 
 */


let user2 = {
    age : 20,
};

console.log("The information about user");
console.log(user2);

user2.age = 30;
console.log("We changed the age");
console.log(user2);

user2["Country"] = "Maroc";
user2.SayHello = function() {
    console.log("Hello souchen");
}


let user3 = new Object();

user3.name = "Ahmed";
user3.age = 26;
let user4 = new Object({
    name : "Salwa",
    age : "62",
    country: "Espagne"
})

/**************************Function This keyword**************** */


/*******
 * This introduction
 * This inside Object Method
 * ----When a function is called as a method of an object, it's this is set to the object
 * the method is called on
 * 
 * 
 * 
 * Global Object:
 * --Test Variable with window and this
 * Global Context
 * Function Context
 * 
 */

document.getElementById("secondBtn").onclick = function(){
    console.log(this); // will console the btn --> <button></button>
}

let user5 = {
    age: 50,
    ageInDays : function()
    {
        this.age = 20; // this set to the object <==> user3.age
        console.log(this.age);
    }
}

//***********************Create Object with create() Method*************** */


let obj = Object.create({}); // we create an object named obj but it is empty

obj.a = 100;
obj.b = "ouchen soukaina";

//Copy an object on a another object

let copyObject = Object.create(obj);
console.log("Method 1");
console.log("a value->");
console.log(copyObject.a);
console.log("b value-->");
console.log(copyObject.b);

let copyObject2 = Object.create({});
copyObject2 = obj;

console.log("Method 2");
console.log("a value->");
console.log(copyObject.a);
console.log("b value-->");
console.log(copyObject.b);


/************Create object with assign() method ************/

let obj1 = {
    prop1:1,
    method1: function()
    {
        return this.prop1;
    },
};

let obj2 = {
    prop2: 2,
    method2: function()
    {
        return this.prop2;
    },
};

let targetObject = {
    prop3 : 3,
    prop4 : 4,
};

let finalObject = Object.assign(targetObject, obj1);
console.log(finalObject); // in finalObject we find obj1 and obj2


let finalObject2 = Object.assign({}, obj1, {prop5: 5, prop6: 6});
console.log(finalObject2);

/***********What is DOM and select elements*********** */

/*******DOM
 * What is DOM?
 * DOM Selector
 * Find element by Id
 * Find element by Tag Name
 * Find element By class Name
 * Find element by css selector
 * Find element by collection
 * 
 * -------title
*/



let myIdElement = document.getElementById("my-div");
let myTagElements = document.getElementsByTagName("p");
let myClassElements = document.getElementsByClassName("my-span");
/***
 * // we add '#' to id
// we add '.' to class
 */
// we can use querySelector to call any element you want--> (id, class, name element)
let MyQuerySelector = document.querySelector("#my-div"); 
let MyQuerySelector2 = document.querySelector(".my-span");
let MyQuerySelector3 = document.querySelectorAll(".my-span"); // to focus of all spans classes element
console.log(myIdElement);
console.log(myTagElements[1]);

myTagElements[1].innerHtml = "Test"; // To change the continue of second element of <p></p>
myClassElements.innerHtml = "Test2";
MyQuerySelector.innerHTML = "Test3";
MyQuerySelector2.innerHTML = "test4";

console.log(MyQuerySelector);
//console.log(MyQuerySelector2);

// print bodies, titles, forms

console.log(`Title is-> ${document.title}`);
console.log(`body is--> ${document.body}`);
console.log(`forms is--> ${document.forms[0].one.value}` );
console.log(document.links[1].href);

/*****************Get, set elements content attributes***************** */


/*********
 * DOM [Get / Set Elements Content And Attributes]
 * innerHTML
 * textContent
 * Change Attribute Directly
 * Change Attribute With Methods
 * ----GetAttribute
 * ----SetAttribute
 */

console.log("Begin setters and getters");
let Element1 = document.querySelector(".js");

console.log(Element1.innerHTML); // the contenue with HTML element
console.log(Element1.textContent); // the contenue (just txt without HTML element)

Element1.innerHTML = "Text From <span> Main.js </span> File";
Element1.textContent = "Text From <span> text.js </span> File";
console.log(Element1.innerHTML);


// Images

    document.images[0].src = "https://images8.alphacoders.com/738/738473.jpg";
    document.images[0].alt = "Alternate";
    document.images[0].title = "Picture";
    document.images[0].id = "Pic";
    document.images[0].className = "img";


    // getAttribute
console.log("Using getAttribute");
    let MyLink = document.querySelector(".link");

    console.log(MyLink.getAttribute("class"));
    console.log(MyLink.getAttribute("href"));
    //setAttribute

   MyLink.setAttribute("href", "https://twitter.com");


   /*************************Check attribute and examples*************** */

   /****
    * DOM [Check Attributes]
    * Element.Attributes
    * Element.hasAttribute
    * element.hasAttributes
    * Element.removeAttribute
    */


   console.log(document.getElementsByTagName("p")[0].attributes);

   let myP = document.getElementsByTagName("p")[0];

   if(myP.hasAttribute("data-src"))
   {
    console.log("Found");
   }else
    console.log("Not found");


    /**********************Create and append Elements*********** */

    /******
     * DOM [Create Elements]
     * createElement
     * createComment
     * CreateTextNode
     * createAttribute
     * appendchild
     * 
     * 
     */

    /***reate all HTML element by using js */


    let Element2 = document.createElement("div");
    let Element3 = document.querySelector("div");
    let myAttr = document.createAttribute("data-custom");
    Element3.setAttribute("data-custom", "Hello");
    Element3.className = "div1";

    console.log(Element3);

   
    // To put a comment
    let myComment = document.createComment("This is Div");
     Element3.appendChild(myComment);
      // To put all of this inside the body element
     document.body.appendChild(Element3);

/**************************DOM [create Elements]****************/
/****
 * Practice product with heading And Paragraph
 * 
 * 
 */


let MyMainElement = document.createElement("div");
let myheading = document.createElement("h2");
let myParagraph = document.createElement("p");


let myHeadingTest = document.createTextNode("product Title");
let myParagraphText = document.createTextNode("product Title");

MyMainElement.className = 'product';

document.body.appendChild(MyMainElement);
myheading.appendChild(myHeadingTest);
MyMainElement.appendChild(myParagraphText);

/********************DOM [Deal with children*********************] */

/****
 * children
 * childNodes
 * firstChild
 * LastChild
 * FirstElementChild
 * LastElementChild
 * 
 */

let elem = document.querySelector("div");

console.log("*****");
console.log(elem);
console.log("*******");
console.log(elem.children[0]);
console.log("********");
console.log(elem.childNodes[0]);
console.log("***********");
console.log(elem.firstChild);
