/* let nameArr = ["A", "B", "C", "D", "E", "F", 9, 10];

nameArr.push("AAA");
nameArr.push("ZZZ");

nameArr.pop();
nameArr.shift();
nameArr.unshift("SAIF");
console.log(nameArr.indexOf("Rimon"));

for (let i = 0; i < nameArr.length; i++) {
  console.log(nameArr[i]);
}

nameArr.splice(1, 3);
console.log(nameArr); */

// ! OBJECT
/* var info = {
  fName: 'SABBIR',
  sName: 'AHMED',
  age: 29,
  myFunc: function () {
    console.log("Printed inside myFunc");
  }
}

console.log(info.age);
console.log(info['fName']);
info.myFunc(); */

//! FUNCTION

function myFunc() {
  console.log("This is a Function call");
}

myFunc();

function sum(a, b) {
  let sum = a + b;
  return sum;
}

console.log(sum(4, 4));
