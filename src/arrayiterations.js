let num=[1, 2, 3, 4, 5];
//to print all the values of array we can use for loop,
//  for of loop, for in loop, forEach loop, map loop, filter loop, 
// reduce loop, some loop, every loop, find loop, findIndex loop, includes loop, 
// indexOf loop, lastIndexOf loop.


//for loop-index based
let num=[1, 2, 3, 4, 5];
for(let i=0; i<num.length; i++){
    console.log(num[i]); //    output: 1, 2, 3, 4, 5
}

//for of loop: widely used to iterate over the values of an array.
//drawback: we can not get the index of the array using for of loop.We have to iterate from start to end

let num=[1, 2, 3, 4, 5];
for(let value of num){
    console.log(value); //    output: 1, 2, 3, 4, 5
}


//for in loop:  it is used to iterate over the indexes of an array.
//  It is not recommended to use for in loop to iterate over the values of an array 
// because it will also iterate over the properties of the array object.
let num=[10, 20, 30, 40, 50];
for(let index in num){
    console.log(index, num[index]); //   output: 0 10, 1 20, 2 30, 3 40, 4 50
    
}



employeedata=["John", 34, "SDET", 150000, true];

for(let value of employeedata){
    console.log(value);
    if(value==="SDET"){
        console.log("10% hike");
        break;
    }
}

console.log("-----------------------");

for(let i=employeedata.length-1; i>=0; i--){
    console.log(employeedata[i]);//    output: true, 150000, SDET, 34, John
}


console.log("Reversing for of loop");
employeedata=["John", 34, "SDET", 150000, true];

for(let value of employeedata.reverse()){
    console.log(value);//    output: true, 150000, SDET, 34, John
}


console.log("Reversing for in loop");
employeedata=["John", 34, "SDET", 150000, true];

for(let index in employeedata.reverse()){
    console.log(index, employeedata[index]);//    output: 0 true, 1 150000, 2 SDET, 3 34, 4 John
}
