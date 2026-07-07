

//just function returning productName
function addToCart(productName){
    console.log("hello-add to cart product:"+productName);

    return productName;
};

//a function that has a function expression named 'cart'.While calling the function we use function Expression
let cart=function addToCart(productName){
    console.log("hello-add to cart product:"+productName);

    return productName;
};

cart();//output: hello-add to cart product:undefined

let pdrt=cart();  //The value returned by cart() fucntion expreession is stored in 'pdrt'.
console.log(pdrt);//output: undefined