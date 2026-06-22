//==  means losse equality comparison operator.compares only values and not data type.

//=== means strict equality comparison operator.compares both values and data type.


console.log(1==1); //output:true
console.log(1=="1"); //output:true
console.log(1===1); //output:true
console.log(1==="1"); //output:false
console.log(true==1); //output:true
console.log(true===1); //output:false
console.log(null==undefined); //output:true
console.log(null===undefined); //output:false
console.log(false==0); //output:true
console.log(false===0); //output:false


console.log('haritha'=='Haritha');  //output:false because of case sensitivity
console.log('haritha'==='Haritha');  //output:false because of case sensitivity


