//addition

console.log(5+10);  //output:15
console.log("hello"+" automation");  //output:helloautomation
console.log(1+'1'); //output:11
console.log('1'+'1'); //output:11



//subtraction
console.log(10-5); //output:5
console.log('hello'-5); //output:NaN
console.log('hello'-'automation');  //output:NaN
console.log('10'-5); //output:5
console.log('10'-'5'); //output:5 


//multiplication
console.log(1*"1"); //output:1  
console.log('hello'*5); //output:NaN
console.log('hello'*'automation');  //output:NaN
console.log('10'*5); //output:50
console.log('10'*'5'); //output:50
console.log(-1+"1"*1); //output:0
console.log(1+"1"-2); //output:9


//division
console.log(10/"2"); //output:5 
console.log('hello'/5); //output:NaN
console.log('hello'/'automation');  //output:NaN
console.log('10'/5);    //output:2
console.log('10'+ 10/'5');  //output:102  



//unary plus
console.log("42"+5);    //output:425
console.log(+"42"+5);   //output:47 
console.log(+"hello"+5);    //output:NaN
console.log(+"10"+5);   //output:15
console.log(+"10"+ +"5");   //output:15


//unary minus
console.log(-"42"+5);    //output:-37
console.log(-"hello"+5);    //output:NaN
console.log(-"10"+5);   //output:-5
console.log(-"10"+-"5");   //output:-15 


let bmi="17.88";
console.log(+bmi); //output:17.88
console.log(-bmi); //output:-17.88  
console.log(Number.parseFloat(bmi)+100); //output:117.88
console.log(bmi+100);   //output:17.88100
console.log(+bmi+100);  //output:117.88
