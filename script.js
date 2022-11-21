/*
let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Bakhtiyor");

let firstName = "Bakhtiyor";
console.log(firstName);

//Variable name conventions
let jonas_matilda = "JM";
let $function = 27;
let person = "bob";

let PI = 3.1415;
let myFirstJob = "Coder";
let myCurrentJob = "Teacher";

let job1 = "programmer";
let job2 = "teacher";

console.log(myFirstJob);

/////////////////////////////////////////////////////////
////////////////////////////////////////////////////////

let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'jonas');

/////////////////////////////////////////////////////////
////////////////////////////////////////////////////////

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);

/////////////////////////////////////////////////////////
////////////////////////////////////////////////////////

let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;
// const job;

var job = 'programmer';
job = 'teacher';

lastName = 'Schmedtmann';
console.log(lastName);

/////////////////////////////////////////////////////////
////////////////////////////////////////////////////////

// Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas / 2, ageSarah * 2, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2;

/////////////////////////////////////////////////////////
////////////////////////////////////////////////////////

const firstName = "Jonas";
const lastName = "Schmedtmann";
console.log(firstName + " " + lastName);

/////////////////////////////////////////////////////////
////////////////////////////////////////////////////////

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25;
x *= 4; // x = x * 4 = 100;
x++; // x = x + 1;
x--; // x = x - 1;

/////////////////////////////////////////////////////////
////////////////////////////////////////////////////////

// Comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=;
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);


const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(now - 1991 > now - 2018);

/////////////////////////////////////////////////////////
////////////////////////////////////////////////////////

let x, y;
x = y = 25 - 10 - 5; // x = 10, x = y = 10;
console.log(x, y);

/////////////////////////////////////////////////////////
////////////////////////////////////////////////////////

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);

/////////////////////////////////////////////////////////
////////////////////////////////////////////////////////

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn;
console.log(BMIMark, BMIJohn, markHigherBMI);

/////////////////////////////////////////////////////////
////////////////////////////////////////////////////////

const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const jonas =
  "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(jonasNew);

/////////////////////////////////////////////////////////
////////////////////////////////////////////////////////

const age = 15;

if (age >= 18) {
  console.log("Sarah can start driving license 🚗");
} else {
  const yaersLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yaersLeft} years 😀`);
}

/////////////////////////////////////////////////////////
////////////////////////////////////////////////////////

const birthYear = 1991;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);

/////////////////////////////////////////////////////////
////////////////////////////////////////////////////////

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
} else {
  console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
}

/////////////////////////////////////////////////////////
////////////////////////////////////////////////////////

// type conversion
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Jonas"));
console.log(typeof NaN);
console.log(String(23), 23);

// type coercion
console.log("I am " + 23 + " years old ");
console.log("I am " + String(23) + " years old ");
console.log('23' - '10' - 3);
console.log('23' / '2');

let n = '1' + 1;
n = n - 1;
console.log(n);

/////////////////////////////////////////////////////////
////////////////////////////////////////////////////////

// 5 falsy values: 0, '', underfined, null, NaN;

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jonas"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 0;
if (money) {
  console.log("Don't spend it all ;)");
} else {
  console.log("You should get a job");
}

let height;
if (height) {
  console.log("YAY! Height is defined");
} else {
  console.log("Height is UNDEFINED");
}

/////////////////////////////////////////////////////////
////////////////////////////////////////////////////////

const age = "18";
if (age === 18) console.log("You just became an adult :D (strict)");
if (age == 18) console.log("You just became an adult :D (loose)");

// const favourite = prompt("What's your favourite number?");
// console.log(typeof favourite);

// if (favourite == 23) { // '23' == 23;
//   console.log('Cool! 23 is an amazing number!')
// }
const favourite = Number(prompt("What's your favourite number?"));
console.log(typeof favourite);

if (favourite === 23) {
  // 23 == 23;
  console.log("Cool! 23 is an amazing number!");
} else if (favourite === 7) {
  console.log("7 is also a cool number");
} else if (favourite === 9) {
  console.log("9 is also a cool number");
} else {
  console.log("Number is not 23 or 7 or 9");
}

if (favourite !==23) console.log('Why not 23?');

/////////////////////////////////////////////////////////
////////////////////////////////////////////////////////

const hasDriversLicense = true; // A
const hasGoodVision = false; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// const shouldDrive = hasDriversLicense && hasGoodVision;
// if (shouldDrive) {
//   console.log("Sarah is able to drive!");
// } else {
//   console.log("Someone else should drive...");
// }

const isTired = true; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive!");
} else {
  console.log("Someone else should drive...");
}

/////////////////////////////////////////////////////////
////////////////////////////////////////////////////////

// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;
// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas) {
//   console.log("Dolphins win the trophy 🏆");
// } else if (scoreKoalas > scoreDolphins) {
//   console.log("Koalas win the trophy 🏆");
// } else if (scoreDolphins === scoreKoalas) {
//   console.log("Both win the trophy 🏆");
// }

// Bonus 1

const scoreDolphins = (97 + 112 + 101) / 3;
const scoreKoalas = (109 + 95 + 123) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
  console.log("Dolphins win the trophy 🏆");
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
  console.log("Koalas win the trophy 🏆");
} else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
  console.log("Both win the trophy 🏆");
} else {
  console.log('No one wins the trophy 😭')
}

/////////////////////////////////////////////////////////
////////////////////////////////////////////////////////

const day = "Monday";

switch (day) {
  case "Monday": // day === 'Monday'
    console.log("Plan course structer");
    console.log("Go to coding meetup");
    break;
  case "Tuesday":
    console.log("Prepare theory videos");
    break;
  case "Wednesday":
  case "Thursday":
    console.log("Write code examples");
    break;
  case "Friday":
    console.log("Record videos");
    break;
  case "Saturday":
  case "Sunday":
    console.log("Enjoy the weekend 😀");
    break;
  default:
    console.log("Not a valid day!");
}

if (day === "Monday") {
  console.log("Plan course structer");
  console.log("Go to coding meetup");
} else if (day === "Tuesday") {
  console.log("Prepare theory videos");
} else if (day === "Wednesday" || day === "Thursday") {
  console.log("Write code examples");
} else if (day === "Friday") {
  console.log(day === "Record videos");
} else if (day === "Saturday" || day === "Sunday") {
  console.log("Enjoy the weekend 😀");
} else {
  console.log("Not a valid day!");
}

/////////////////////////////////////////////////////////
////////////////////////////////////////////////////////

const age = 23;
age >= 18;
// ? console.log("I like to drink wine 🍷")
// : console.log("I like to drink water 💧");

const drink = age >= 18 ? "wine 🍷" : "water 💧";
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = "wine 🍷";
} else {
  drink2 = "water 💧";
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? "wine 🍷" : "water 💧"}`);
*/

/////////////////////////////////////////////////////////
////////////////////////////////////////////////////////

const bill = 275;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
);
