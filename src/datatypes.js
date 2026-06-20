//datatypes:var,let const

//data can be SVGAnimatedInteger,boolean string

//var is not used in mordern JS,let and const are used instead
//var allows declaration of duplication of variables,let and const do not allow duplication of variables

//var  has 2 main issues:1)it allows declaration of duplication of variables,
// 2)it allows hoisting-where the variable gives the output as undefined when we try to access before initialization
//var declaration
var x=10;
var x=20;
var x=30;
console.log(x); //30

//var reinitialization
var y=10;
y=20;
console.log(y); //20

//var hoisting
console.log(z); //undefined
var z=10;
console.log(z); //10

//let does not allow declaration of duplizations,let allows re initialization
//let does not allow hoisting,if we try to access before initialization  it gives reference error:cannot access before initialization

//let declaration
let a=100;
//let a=200; //SyntaxError: Identifier 'a' has already been declared
console.log(a);


//let reinitialization
let b=100;
b=200;
console.log(b); //200

//let hoisting
//console.log(c);//ReferenceError: Cannot access 'c' before initialization
let c=100;



//all contant universal values are declared using const,like pi,page title,page url,base url.
//const does not allow declaration of duplizations,const does not allow re initialization
//const does not allow hoisting,if we try to access before initialization  it gives reference error:cannot access before initialization


const DAYS_IN_WEEK=7;
//DAYS_IN_WEEK=8; //TypeError: Assignment to constant variable.
console.log(DAYS_IN_WEEK); //7


//const hoisting
//console.log(PI); //ReferenceError: Cannot access 'PI' before initialization
const PI=3.14;
console.log(PI); //3.14