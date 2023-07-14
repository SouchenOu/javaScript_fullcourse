

/***********************************OBJECT-->KEYS****************** **********/
/*****To find out what properties an object has, you can use the Object.keys function. You give it an object, and it returns an array of strings—the object’s property names. */


console.log(Object.keys({x: 0, y: 0, z: 2}));

/***************************OBJECT--->ASSIGN****************************************** */
/******There’s an Object.assign function that copies all properties from one object into another. */


let ObjectA = {
    a: 1,
    b: 2

};

Object.assign(ObjectA, {b:4, c:6});

console.log(ObjectA);

//****************************************AFFECTING TWO OBJECTS*************************** */

let object1 = {
    value:10
};

let object2 = object1;

let object3 = {
    value : 50
};


console.log(object1 === object2);
console.log(object1 === object3);

object1.value = 55;
//The object1 and object2 bindings grasp the same object, which is why changing object1 also changes the value of object2
console.log(object2.value);
/********************************************Change the value of an element in an object****************** */


const score = {visitors: 0, home: 0};
// This is okay
score.visitors = 1;
// This isn't allowed
//--score = {visitors: 1, home: 1};

/******** */
let journal = [];

function addEntry(events, squirals){
    journal.push({events, squirals});
}
addEntry(["A", "B", "C"], false);
addEntry(["D", "E", "F"], true);

console.log(journal[0]);

/***************** */
function tableFor(event, journal) {
    let table = [0, 0, 0, 0];
    for (let i = 0; i < journal.length; i++) {
      let entry = journal[i], index = 0;
 
      if (entry.events.includes(event))
      {
        index += 1;
      } 
      if (entry.squirals == true)
      {
        index += 2;

      }
        table[index] += 1;
    }
  
    return table;
  }
  console.log("The result is-->");
  console.log(tableFor("PITZA", journal));
/******************************** ******INCLUDES***************************** */

//--Arrays have an includes method that checks whether a given value exists in the array.
function journalEvents(journal) {
    let events = [];
    for (let entry of journal) {
      for (let event of entry.events) {
        if (!events.includes(event)) {
          events.push(event);
        }
      }
    }
    return events;
  }
  
  console.log(journalEvents(journal));


  /***************************SHIFT(), UNSHIFT() and PUSH******************** */

  let todoList = [];
function remember(task) {
  todoList.push(task);
}
function getTask() {
  return todoList.shift();
}
function rememberUrgently(task) {
  todoList.unshift(task);
}

remember(10);
remember(20);
remember(30);
console.log("Our to do list is-->");
console.log(todoList);
console.log("Our to do list after shist()");
getTask();
console.log(todoList);
console.log("Add a number in the first position in my todoList");
rememberUrgently(100);
console.log(todoList);

/************************************IndexOf ***************************/

/*---To search for a specific value, arrays provide an indexOf method. The method searches through the array from the start to the end and returns the index at which the requested value was found
//—or -1 if it wasn’t found. To search from the end instead of the start, there’s a similar method called lastIndexOf.*/
console.log([1, 2, 3, 2, 1].indexOf(2));
//1
console.log("one two three".indexOf("ee"));
//11

// console.log([1,2,3,2,1]).lastIndexOf(2);

//**************************************Slice********************************** */

//Another fundamental array method is slice, which takes start and end indices and returns an array that has only the elements between them.

console.log([0,6,4,8].slice(1,3));

function remove(array, index) {
  return array.slice(0, index).concat(array.slice(index + 1));
}
console.log(remove(["a", "b", "c", "d", "e"], 2));
// → ["a", "b", "d", "e"]

/************************************Trim()************************** */

/**The trim method removes whitespace (spaces, newlines, tabs, and similar characters) from the start and end of a string.**/


console.log("  okay \n ".trim());
//okay

/*******************************************Rest parameters*********************** */

//---It can be useful for a function to accept any number of arguments

function max(...numbers)
{
  let result = - Infinity;
  for (let number of numbers)
  {
    if(number > result)
      result = number;
  }
  return result;
}

console.log("The maximum number is -->");
console.log(max(4,1,9,-2));

/*********************************range()************************************ */

/******Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end. */

// console.log(range(1,10));
// //// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(range(5, 2, -1));
// // → [5, 4, 3, 2]
// console.log(sum(range(1, 10)));
// // → 55

/***************************************Repeate function***************** */

function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}
let labels = [];
repeat(5, i => {labels.push(`Unit ${ i + 1}`);});

console.log(labels);

/**************************************Higher order functions***************** */


function greaterThan(n) {
  return m => m > n;
}
let greaterThan10 = greaterThan(10);
console.log(`To test--> ${greaterThan10}`)
console.log(greaterThan10(11));
// → true


/*****And we can have functions that change other functions. */
function noisy(f) 
{
  return (...args) => {
    console.log("calling with", args);
    let result =f (...args);
    console.log("called with", args, ", returned", result);
    return result;
  };
}
noisy(Math.min)(3, 2, 1);
// → calling with [3, 2, 1]
// → called with [3, 2, 1] , returned 1