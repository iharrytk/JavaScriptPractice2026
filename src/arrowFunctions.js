let world= ()=>console.log('hellow world');
world();//Output: hellow world


console.log('----------------------------');


//one parameter arrow function

let data=myName=>console.log(`Hi ${myName}`);
data('Haritha');//output: Hi Haritha


console.log('----------------------------');


//one parameter arrow function


let totalCTC=salary=>console.log(`My Salary ${salary+50000}`);
totalCTC(100000);//output:My Salary 150000


console.log('----------------------------');


//two parameter arrow function,multiple lines of code

let addition=(a,b)=>{
    console.log(`the first number is ${a}`);
    console.log(`the second number is ${b}`);
    console.log(`adding them ${a+b}`);
}
addition(10,20);//output:the first number is 10
// the second number is 20
// adding them 30



console.log('----------------------------');



let launchBrowser=(browser)=>{
    
switch(browser){
    case 'chrome':
        console.log('launch chrome');
        return true;
    case 'edge':
        console.log('launch edge');
        return true;
    case 'firefox':
        console.log('launch ff');
        return true;
    default:
        console.log('invalid browser,plz pass the right browser');
        return true;
}
}

let initDriver=launchBrowser('chrome');
if(initDriver){
    console.log('Enter the app url');
}

//output:launch chrome
//Enter the app url

