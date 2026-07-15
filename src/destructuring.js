//Array Destructuring

let arr=[10,20,30];
let [a,b,c]=arr;
console.log([a,b,c]);

console.log('==========================================');

let [x,y,z]=[100,200,300];
console.log(x);
console.log('==========================================');

let [p, ,r]=[30,40,50];
console.log(p,r);

console.log('==========================================');

let ar=[60,40];
let [a1,b1=50]=ar;
console.log(a1);
console.log(b1);
console.log('==========================================');

let num=[1,2,3,4,5,6];
[t1,t2,t3,...pop]=num
console.log(t1,t2,t3);
console.log(pop);


console.log('==========================================');

//Object Destructuring

let customer={
    custname:'peter',
    age:40,
    city:'LA',
    zip:1010
};

function placeOrder({custname,city}){
    console.log(custname,city);
}

placeOrder(customer);

console.log('==========================================');


let page={
    browser:'chrome',
    url:'https://www.nal.com',
    env:'QA',
    username:'nnn',
    passwod:'cdgfr',
    footer:[1,2,3]
}
function launchBrowser({browser,url,env}){
    console.log(browser,url,env);
}

launchBrowser(page);
