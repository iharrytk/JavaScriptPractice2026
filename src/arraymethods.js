//ArrayMethods

let num=[1, 2, 3, 4, 5];
console.log(num);//    output: [ 1, 2, 3, 4, 5 ]

num.push(6); // adding a new value at the end of the array
console.log(num);//    output: [ 1, 2, 3, 4, 5, 6 ]

num.unshift(0); // adding a new value at the beginning of the array
console.log(num);//    output: [ 0, 1, 2, 3, 4, 5, 6 ]


num.pop(); // removing the last value of the array
console.log(num);//    output: [ 0, 1, 2, 3, 4, 5 ]


num.shift(); // removing the first value of the array
console.log(num);//    output: [ 1, 2, 3, 4, 5 ]


let num=[1, 2, 3, 4, 5];
num.splice(2, 1); // removing the value at index 2
console.log(num);//    output: [ 1, 2, 4, 5 ]

console.log("=======================================");

let fruits=["apple", "banana", "orange", "grapes"];
fruits.splice(1, 2);    // removing the values at index 1 and 2
console.log(fruits);//    output: [ 'apple', 'grapes' ]

console.log("=======================================");

let fruits=["apple", "banana", "orange", "grapes"];
fruits.splice(1, 2, "kiwi", "mango"); // removing the values at index 1 and 2 and adding new values at index 1 and 2
console.log(fruits);//    output: [ 'apple', 'kiwi', 'mango', 'grapes' ]

console.log("=======================================");

let fruits=["apple", "banana", "orange", "grapes"];
console.log(fruits);//    output: [ 'apple', 'banana', 'orange', 'grapes' ]
fruits.splice(0,1, "pear");// removing the value at index 0 and adding new value at index 0
console.log(fruits);//    output: [ 'pear', 'banana', 'orange', 'grapes' ]


console.log("=======================================");

//Array index of method returns the first index of the value in the array.
// // If the value is not found, it returns -1.
let num=[1, 2, 3, 4, 5,1, 2, 3, 4, 5,1, 2, 3, 4, 5];
console.log(num.indexOf(0)); //indexof method returns -1 if the value is not found in the array
console.log(num.indexOf(3)); //    output: 2
console.log(num.indexOf(5)); //    output: 4

//give the second occurence of value 1 in the array
console.log(num.indexOf(1, 1)); //    output: 5 -at 5th index the second occurence of value 1 is present in the array


let num=[1, 2, 3, 4, 5,1, 2, 3, 4, 5,1, 2, 3, 4, 5];
console.log(num.indexOf(5,num.indexOf(5)+1));//    output: 9 -at 9th index the second occurence of value 5 is present in the array


//print 3 occurences of value 5 in the array
let num=[1, 2, 3, 4, 5,1, 2, 3, 4, 5,1, 2, 3, 4, 5];
let x=console.log(num.indexOf(5,num.indexOf(5)+1));

console.log(num.indexOf(5,num.indexOf(5,num.indexOf(5)+1)+1)); //    output: 14 -at 14th index the third occurence of value 5 is present in the array