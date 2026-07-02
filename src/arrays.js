// Arrays: same or different type of data are stored together in a single variable. 
// Arrays are used to store multiple values in a single variable. 
// In JavaScript, arrays are written with square brackets [] and can hold any type of data, 
// including numbers, strings, objects, and even other arrays.


let num= [1, 2, 3, 4, 5];
console.log(num[-10]);//    output: undefined
console.log(num[4]);//    output: 5
console.log(num[5]);//    output: undefined
console.log(num[0]); //    output: 1

//lowest index:0
//highest index:length-1

console.log("length of array is: "+num.length); //    output: length of array is: 5



num[4] = 10; // changing the value of index 4
console.log(num[4]); //    output: 10

num[5] = 20; // adding a new value at index 5
console.log(num[5]); //    output: 20
console.log(num);//    output: [ 1, 2, 3, 4, 10, 20 ]


number=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
number[100]= 100; // adding a new value at index 100
console.log(number[100]); //    output: 100
console.log(number.length); //    output: 101
console.log(number); //    output: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, <90 empty items>, 100 ]



console.log("================================");


employeedata=["John", 34, "SDET", 150000, true];
console.log(employeedata);//    output: [ 'John', 34, 'SDET', 150000, true ]

console.log(typeof employeedata); //    output: object


console.log("================================");

//Redeclaration and reinitialization of array is possible in JavaScript only if we use let keyword.
//If we use const keyword, we can not redeclare and reinitialize the array.

const arr=[1, 2, 3, 4, 5];
//arr=[10, 20, 30, 40, 50]; // This will throw an error because we cannot reassign a const variable.

const arr=[10, 20, 30, 40, 50];
console.log(arr); //    output: SyntaxError: Identifier 'arr' has already been declared


console.log("================================");


let nm=Array.of(1, 2, 3, 4, 5);
console.log(nm); //    output: [ 1, 2, 3, 4, 5 ]


console.log("================================");


let arr=Array.from("Hello"); //    output: [ 'H', 'e', 'l', 'l', 'o' ]
console.log(arr);
let arr2=Array.from(12345);//    output: []
console.log(arr2);
