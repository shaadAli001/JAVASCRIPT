'use strict';

// let license = false;
// const test = true;

// ------------------FUNCTIONS-----

// function Students(boy, girl) {
//   let totalStudents = `No: of Boys ${boy} No:of Girls ${girl} Total = ${boy + girl}`;
//   return totalStudents;
// }

// let Class = Students(15, 10);
// console.log(Class);





// Function declaration
// function sum(num1, num2) {
//   return num1 + num2;
// }
// let result = sum(5, 5);
// console.log('Sum is = ' + result);

// // Function Expression
// let sum2 = function (a, b) {
//   return a + b;
// }

// let result2 = sum2(10, 10);
// console.log('Sum is = ' + result2);



// const birthDay = (age) => {
//   return 2037 - age;
// }
// const year = birthDay(2003)
// console.log(year);

// const BirthYear = Number(prompt("Enter Your Age"))

// function calcAge(BirthYear) {
//   return 2026 - BirthYear;
// }

// const age = calcAge(BirthYear);
// console.log(age);

// function fruitCutPiece(nos) {
//   return nos * Math.floor(Math.random() * 3) + 1;
// }

// function fruitsProcess(apples, oranges) {
//   const applePiece = fruitCutPiece(apples);
//   const orangePiece = fruitCutPiece(oranges);
//   return `Juice with ${applePiece} apple piece and ${orangePiece} orange piece`;
// }

// console.log(fruitsProcess(2, 3));

const birthYear = Number(prompt("Enter Your BirthYear"));
const Name = prompt("Enter Your Name");

function getYear(year) {
  return 2026 - year;
}

const data = function yearAfterRetirement(birthYear, name) {
  const age = getYear(birthYear);
  const retirement = 65 - age;
  if (retirement > 0) {
    return `${retirement} Years left for ${name} Retirement`;
  }
  else {
    return `${name} have Retiered`;
  }
}
console.log(data(birthYear, Name));







