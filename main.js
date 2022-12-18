// JavaScript Type Conversion
/*
    Converting String to Numbers...
    1. The global method Number() converts a variable into a number.
    2. A numeric string converts to a number.
    3. An empty string converts to 0.
    4. A non numeric string converts to NaN(Not a Number).
*/
const inputNumber = "7500";
console.log(typeof inputNumber);// check data type
console.log(Number(inputNumber)); //convert string to number
console.log(typeof Number(inputNumber)); //check data type

let inputNumber1 = "";
console.log(Number(inputNumber1)); // An empty string converts to 0.

inputNumber1 = "sazib";
console.log(Number(inputNumber1)); // A non numeric string converts to NaN(Not a Number)

/* 
    Converting Numbers to Strings...
    1. The global method String() can convert numbers to strings.
    2. It can be used on any type of numbers, literals, variables or expressions.
*/
inputNumber1 = 123;
console.log(String(inputNumber1)); //converting number to string
console.log(typeof String(inputNumber1)); //check data type

console.log(String(inputNumber1 + 120)); //converting number to string
console.log(typeof String(inputNumber1)); //check data type.

//The Number Method toString() does the same...
console.log(inputNumber1.toString()); //converting number to string
console.log(typeof inputNumber1.toString()); //check data type.

/* 
    Converting Dates to Numbers...
    1. The global method Number() can be used to convert dates to Numbers.
*/

// let d = Date(); // date are shown in string.'
let d = new Date(); // date are shown in array..
console.log(d); // return todays date & time..
console.log(Number(d));
/* akhane jodi amra sudu Date() function ta use kori tahole amra oi ta k number a convert korte parbo nah...tobe jodi amra new Date() funtion ta use kori tahole seta array return korbe & seta k amra number a convert korte parbo... */

console.log(d.getTime());
console.log(typeof d.getTime()); // eita o number funtion er moto kaj kore..date k number a convert kore...

/*
    Converting Dates to Strings
    1. The global method String() can convert dates to strings.
*/
console.log(String(d)); // Converting date to string
console.log(typeof String(d)); // check data type..

console.log(d.toString()); // eita o string function er moto kaj kore...date k string a convert kore...
console.log(typeof d.toString());

/*
    Converting Booleans to Numbers.
    1. The global method Number() can also convert booleans to numbers.
*/

y = false;
console.log(Number(y)); // convert boolean to number.. it returns 0

y = true;
console.log(Number(y)); // convert boolean to number.. it returns 1

/*
    Converting Booleans to Strings.
    1. The global method String() can also convert booleans to String.
*/
y = false;
console.log(String(y)); // convert boolean to number.. it returns false.

y = true;
console.log(String(y)); // convert boolean to number.. it returns true.

/*
    Converting  number to boolean
*/
y = 123;
console.log(Boolean(y)); // convert number to boolean..it returns true..
y = "";
console.log(Boolean(y)); // convert number to boolean..it returns false..

/*
    Converting  string to boolean
*/
let name = "sazib";
console.log(Boolean(name)); // convert string to boolean..it returns true..
name = "";
console.log(Boolean(name)); // convert string to boolean..it returns false..


/*
    JavaScript type Coercion...(autometic type converting processes)
    . When JavaScript tries to operate on a "wrong" data type, it will try to convert the value to a "right" type.
    . the result is  not always what you expect.
*/

console.log(6 + null); // returns 6. here null is converted to 0.
console.log("6" + null); // returns 6null. here null is convert to string.
console.log("6" + 2); // returns 62. here 2 is convert to string
console.log("6" - 2); // returns 4. here 5 is convert to number.
console.log("6" * 2); // returns 12. here 5 is convert to number.
console.log("6" / 2); // returns 3.here 6 is convert to number.
console.log("6" - "2"); // returns 4.here 6 & 2 are convert to number

console.log( 5 + 10 + 5 + "5"); // returns 205. here last number 5 convert to string
console.log("100" - "50" + 10); // returns 60. here 100 & 50 are convert to number.
console.log("15" - "5" - "4" - "3" + 5); // returns 8..here 15,5, 4, 3 are convert to number
console.log("15" - "5" - "4" - "3" + "5"); // returns 35..here 15,5, 4, 3 are convert to number only last number 5 cannot be converted into number..

/* NB... akhane + operator ta concatination kore dey tai oi ta autometicaly convertion ta hoy nah thik vabe baki onno sob operator er jonno sob e thik ache..tai + er time a amader k valo kore dekte hobe... */

/*
    JavaScript Truthy & Falsy Value...
    ...Falsy values are:: ::
    1. 0
    2. ""
    3. null
    4. undefined
    5. NaN
    ... Truthy values are:: ::
    uporer falsy value gula bad diye baki ja ja ache sob e truthy value...
    NB... js a truthy and falsy value bolte je value gular man boolean a false ase segula falsy..r je gular man true ase segula truthy value...
*/

console.log(Boolean(0)); // return false...
console.log(Boolean("")); // return false...
console.log(Boolean(null)); // return false...
console.log(Boolean(undefined)); // return false...
console.log(Boolean(NaN)); // return false...

console.log(Boolean(" ")); // return true...
console.log(Boolean("1")); // return true...
console.log(Boolean("sazib")); // return true...

// Conditional Statements: If...else

// if(condition){
//     it works when condition is true.
// } else {
//     it works when condition is false.
// }

// if-else example... ... ...
const job = 0;
if(job){
    console.log("I have a Good Job"); // it works when condition is true.
}else{
  console.log("Looking for a Job"); // it works when condition is false.
}
// salary example... ... ...
let salary = 15000;
if(salary){
    console.log("My salary is set.");
}else {
    console.log("My salary is not set.");
}
// earning example... ... ...
let earning = 25000;

if (earning >= 30000) {
  console.log("his earning is good.");
} else if (earning >= 20000) {
  console.log("his earing isn't good.");
} else {
  console.log("his earning isn't good enough!");
}

// week days example... ... ... 
const today = "";

if (today == "saturday") {
  console.log("Today is Saturday.");
} else if (today == "sunday") {
  console.log("Today is Sunday.");
} else if (today == "monday") {
  console.log("Today is Monday.");
} else if (today == "tuesday") {
  console.log("Today is Tuesday.");
} else if (today == "wednesday") {
  console.log("Today is Wednesday.");
} else if (today == "thursday") {
  console.log("Today is Thursday.");
} else {
  console.log("Today is Friday.");
}

// nested if-else example... ... ...
const x = 8;
if(x >= 10) {
  if(x == 10) {
    console.log("X is equal to 10");
  }else {
    console.log("X is greater than 10");
  }
} else {
  console.log("X is smaller than 10");
}

// Switch Statements
let day = "monday";
switch (day) {
  case "saturday":
    console.log("Today is Saturday.");
    break;
  case "sunday":
    console.log("Today is Sunday.");
    break;
  case "monday":
    console.log("Today is Monday.");
    break;
  case "tuesday":
    console.log("Today is Tuesday.");
    break;
  case "wednesday":
    console.log("Today is Wednesday.");
    break;
  case "thursday":
    console.log("Today is Thursday.");
    break;
  default:
    console.log("Today is Friday.");
}










