//IIFE is a function that does not have a name.

//IIFE is one of the examples of Anonymous function.

let world=function(){

    console.log('Hello world');
}

world();//output:Hello world


console.log('-----------------------------');
/**
 * 
 * @param {string} browserName 
 */

let initializeDriver=function (browserName){

    console.log(`browser name is ${browserName}`);

    switch (browserName.trim().toLowerCase()) {
        case 'firefox':
            console.log('launch chrome');
            return true;
        case 'chrome':
            console.log('launch chrome');
            return true;
    
        default:
            console.log(`Please pass the right browser.Given ${browserName}`);
            return false;
    }
}

let initBoolean=initializeDriver('chrome');
if(initBoolean){
    console.log('enter url');
}