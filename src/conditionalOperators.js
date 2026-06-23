console.log(10==10); //output: true


//if else statement
let x=10;
if(x>=10){
    console.log("x is greater than or equal to 10");  //output: x is greater than or equal to 10
}
else{
    console.log("x is less than 10");
}



if(true){
    console.log("Condition is true");  //output: Condition is true

}
else{
    console.log("Condition is false");  //unreachable code unneccaseaarily writing else part
}



let eleExists=true;


if(eleExists){
    console.log("Element exists.click on the element");  //output: Element exists//no unreachable code warning because 
    //the logic depends on variable "eleExists".No dead code warning
}
else{
    console.log("Element does not exists");
}


////////////////////


console.log("parallel if else conditions");

let browser='chrome';
if(browser=='chrome'){
    console.log("launch chrome browser");  //output: launch chrome browser.please pass the correct browser name
}
if(browser=='firefox'){
    console.log("launch firefox browser");
}
if(browser=='edge'){
    console.log("launch edge browser");
}
else{
    console.log("please pass the correct browser name");
}


////////////////////////////////////


console.log("if else if else if else conditions");

let browser='chrome';
if(browser=='chrome'){
    console.log("launch chrome browser");  //output: launch chrome browser.please pass the correct browser name

}
else if(browser=='firefox'){
    console.log("launch firefox browser");
}
else if(browser=='edge'){
    console.log("launch edge browser");
}
else{
    console.log("please pass the correct browser name");
}

////////////////////////////////////////////



