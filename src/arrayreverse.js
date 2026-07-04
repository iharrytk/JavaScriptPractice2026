num=[1, 2, 3, 4, 5];


//loop the array
for(let i=0;i<num.length;i++){
    console.log(num[i]); //    output: 1, 2, 3, 4, 5
}

//reverse the arrray
for(let i=num.length-1;i>0;i--){
    console.log(num[i]);//    output: 5, 4, 3, 2, 1
}

//reverse the array using a extra variable
let count=num.length-1;
for(let i=0;i<num.length;i++){
    console.log(num[count]); //    output: 5, 4, 3, 2, 1 //in this block the variable i is not used, 
    // we can use any variable name instead of i
    count--;
}

//reverse the array using for of loop-by using extra variable 
num=[10, 20, 30, 40, 50];
for(let i of num){

    console.log("The value of i is:"+i);
    countttt=num.length-num.indexOf(i)-1; 
    console.log(num[countttt]);//    output: 50, 40, 30, 20, 10
    

    
}

//reverse the array using for in loop-by using extra variable
num=[10, 20, 30, 40, 50];
for(let index in num){


    countf=num.length-index-1;
    console.log(num[countf]);
}



