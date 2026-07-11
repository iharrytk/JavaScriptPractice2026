

let sayHi=function(){


    console.log('Hiii Haritha');
}


let sayHello=function(callback){

    callback();

}

sayHello(sayHi);//output:Hiii Haritha

console.log('=====================');
//Utility functions which are reusable
let add=(a,b)=>a+b;
let sub=(a,b)=>a-b;
let multiply=(a,b)=>a*b;
let divide=(a,b)=>a/b;

//core function:which the end user uses
let calculator=function(a,b,callback){

    console.log(callback(a,b));
   
}

//Calling the core function:this function has 2 values and 1 callback function as arguments
calculator(10,20,add);//output:30
calculator(2000,100,sub);//output:1900
calculator(10,20,multiply);//output:200
calculator(10,20,divide);//output:5



console.log('===========================================');


function initDriver(browserName){

    console.log("Launching the browser:"+browserName);
    switch (browserName) {
        case 'chrome':
            console.log("Launching chrome");
            return true;
        case 'firefox':
            console.log("Launching firefox");
            return true;
        case 'IE':
            console.log("Launching IE");
            return true;
    
        default:
            console.log('Please pass the right browser.you entered:'+browserName);
            return false;
    }
}

function enterURL(browsername,url,callback){
    console.log("Executing the test cases in :"+browsername);

   let flag= callback(browsername);
    if(flag){
        console.log('enter the url:'+url);
    }
    else{
        console.log('cannot enter the  url:'+url);

    }
   
    
}

enterURL('xyz','www.nal.com',initDriver);
//output:
// Executing the test cases in :xyz
// Launching the browser:xyz
// Please pass the right browser.you entered:xyz
// cannot enter the  url:www.nal.com