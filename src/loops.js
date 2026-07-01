
//while loop is used to execute a block of code repeatedly as long as a specified condition is true


//while condition is satisfied , the code block will be executed
//else,exit the loop and continue with the next statement after the loop


let i=1;
while(i<=10){
    console.log(i);
    i++;//1 to 10
    //++i;//1 to 10
   // i=i+1;//1 to 10
}


console.log("=============");


//for loop

for(let i=1;i<=10;i++){
    console.log(i);//1 to 10
}


for(let i=10;i>=1;i--){
    console.log(i);//10 to 1
}


for(;;){
    console.log("infinite loop");//infinite loop because the for condition is always considered as true.
    //for loop has 3 parts:initialization,condition and increment/decrement. 
    // If we don't provide any condition, it is considered as true.
    //not mandatory to provide all 3 parts of for loop. We can provide only 1 or 2 parts of for loop.
    //for(;;) is equivalent to while(true)
    //initialization can be written outside the for loop and increment/decrement can be written inside the loop body.
}


let  i=1;
for(;i<=10;){
    console.log(i);
    i++;
}


for(;;){
    console.log("infinite loop");
    break; //to exit the infinite loop, we can use break statement. 
    //It will exit the loop and continue with the next statement after the loop.
}



console.log("==============");
 console.log("do while loop");

let k=1;
do{
   
    console.log(k);
    k++;//1 to 10
} while(k<=10);