let add=(a,b)=>a+b;

function Calculator(a,b,callback){
   let result=callback(a,b);
   console.log(result);
}


Calculator(10,30,add);

console.log('=============================');




function Calci(a,b,callback){

  return  callback(a,b);

}

let result=Calci(10,20,(a,b)=>a+b);
console.log(result);



console.log('=============================');


num=[1,2,3,4,5];
num.forEach(element => {let add2toeachelementofnum=element+5
    console.log(add2toeachelementofnum);
}
    
);
//output:
// 6
// 7
// 8
// 9
// 10

console.log('=============================');


num=[1,2,3,4,5];
let resultt=num.filter(e=>e>4);
console.log(resultt);//[ 5 ]




    



