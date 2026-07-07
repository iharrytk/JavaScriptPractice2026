function factorialOfNumber(x){

let factorial=1;

for(let i=1;i<=x;i++){
   factorial=factorial*i;

}

return factorial;

}

let number=factorialOfNumber(3);
console.log(number);