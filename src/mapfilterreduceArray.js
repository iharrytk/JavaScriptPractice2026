

numberarray=[1,2,3,4,5];
let resultarray=numberarray.map(e=>e*2);
console.log(numberarray);//output:[ 1, 2, 3, 4, 5 ]
console.log(resultarray);//output:[ 2, 4, 6, 8, 10 ]

console.log('========================');

sqrtarray=[1,2,3,4,5];
let resultsqrt=sqrtarray.map(e=>e*e);
console.log(resultsqrt);//output:[ 1, 4, 9, 16, 25 ]

console.log('=============================');


lowerNAmes=['uday','ankita','navya','senthil']
let uppercase=lowerNAmes.map(e=>e.toUpperCase());
console.log(uppercase);//output:[ 'UDAY', 'ANKITA', 'NAVYA', 'SENTHIL' ]


console.log('=======================');

//condition is every element in the numbers array which is divisible by 5 and returns 0
let numbers=[10,20,30,40,50,100,6,8,61,53,46];
let resultdivisibleby5=numbers.filter(e=>e%5===0)
console.log(resultdivisibleby5);//output:[ 10, 20, 30, 40, 50, 100 ]


let resultgreaterthan30=numbers.filter(e=>e>30)
console.log(resultgreaterthan30);//output:[ 40, 50, 100, 61, 53, 46 ]

let allevens=numbers.filter(e=>e%2===0);
console.log(allevens);//output:[
//    10, 20, 30, 40, 50,
//   100,  6,  8, 46
// ]

let allodds=numbers.filter(e=>e%2===1);
console.log(allodds);//output:[ 61, 53 ]

//


console.log('=================================================');

let prodductarray=['apple  iphone','apple pods','apple macbook','samsung galaxy','samsung macbook']
//filter products that have apple and then filter product that has macbook
let productResult=prodductarray.filter(e=>e.startsWith('apple')).filter(e=>e.includes('macbook'));
console.log(productResult);//output:[ 'apple macbook' ]


console.log('=================================================');

let prodductarrayy=['apple  iphone','apple pods','apple macbook','samsung galaxy','samsung macbook']
//filter products that have apple and then filter product that has macbook
let productResultt=prodductarrayy.filter(e=>e.startsWith('apple'))
                                    .filter(e=>e.includes('macbook'))
                                        .map(e=>e.replace('macbook','MACBOOK'));
console.log(productResultt);//output:[ 'apple MACBOOK' ]


console.log('==========================================');


//add all numbers of the array
individualnumber=[10,20,30,40,50];
let total=individualnumber.reduce((sum,n)=>sum+n,0);
console.log(total);//output: 150

console.log('==========================================');


//combine the whole address array
address=['600'," ","S"," ","promenade blvd"," ","APT"," ","101"];
let wholeadress=address.reduce((whole,n)=>whole+n,'');
console.log(wholeadress);//output:600 S promenade blvd APT 101

console.log('==========================================');

//chain all the methods==>number array:even-->square them-->sum

let myNumbers=[1,2,3,4,5,6,7,8,9,10];
let totalsum=myNumbers.filter(n=>n%2===0)//[2,4,6,8,10]
                            .map(n=>n*n)//[4,16,36,64,100]
                                .reduce((sum,e)=>sum+e,0);//[220]
console.log(totalsum);//output:220
