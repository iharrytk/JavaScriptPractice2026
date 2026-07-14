let myresolvepromise=Promise.resolve('task is complete');

let myrejectpromise=Promise.reject('task is not complete');


myresolvepromise.then((result)=>console.log(result));
myrejectpromise.catch((error)=>console.log(error));


console.log('================================================');


let p1=Promise.resolve('Page title validated');
let p2=Promise.resolve('Page image validated');
let p3=Promise.resolve('Page logo validated');
Promise.all([p1,p2,p3])
        .then((result)=>console.log(result))


console.log('================================================');


let p11=new Promise((resolve,reject)=>{

setTimeout(()=>{
    resolve('display logo on the page visible')
},3000);
});

let p12=new Promise((resolve,reject)=>{

setTimeout(()=>{
    resolve('page header visible')
},3000);
});

let p13=new Promise((resolve,reject)=>{

setTimeout(()=>{
    resolve('page footer visible')
},3000);
});

Promise.all([p11,p12,p13])
        .then((result)=>console.log(result));



console.log('================================================');

let c11=new Promise((resolve,reject)=>{

        setTimeout(()=>{
            resolve('display logo on the page visible')
        },3000);
 });
let c12=new Promise((resolve,reject)=>{

        setTimeout(()=>{
            reject('login form error with loading')
        },3000);
});
let c13=new Promise((resolve,reject)=>{

        setTimeout(()=>{
            resolve('load footer of the page')
        },3000);
});
Promise.all([c11,c12,c13])
        .then((result)=>console.log(result))
        .catch((error)=>console.log(error));


console.log('================================================');

let r11=new Promise((resolve,reject)=>{

        setTimeout(()=>{
            resolve('display logo on the page visible')
        },1000);
 });
let r12=new Promise((resolve,reject)=>{

        setTimeout(()=>{
            reject('login form error with loading')
        },3000);
});
let r13=new Promise((resolve,reject)=>{

        setTimeout(()=>{
            resolve('load footer of the page')
        },5000);
});
Promise.race([r11,r12,r13])
        .then((result)=>console.log(result))
        .catch((error)=>console.log(error));


console.log('================================================');

let s11=new Promise((resolve,reject)=>{

        setTimeout(()=>{
            resolve('display logo on the page visible')
        },1000);
 });
let s12=new Promise((resolve,reject)=>{

        setTimeout(()=>{
            reject('login form error with loading')
        },6000);
});
let s13=new Promise((resolve,reject)=>{

        setTimeout(()=>{
            resolve('load footer of the page')
        },5000);
});
Promise.allSettled([s11,s12,s13])
        .then((result)=>console.log(result))
        .catch((error)=>console.log(error));



console.log('================================================');

let x11=new Promise((resolve,reject)=>{

        setTimeout(()=>{
            reject('display logo on the page visible')
        },1000);
 });
let x12=new Promise((resolve,reject)=>{

        setTimeout(()=>{
            reject('login form error with loading')
        },6000);
});
let x13=new Promise((resolve,reject)=>{

        setTimeout(()=>{
            reject('load footer of the page')
        },5000);
});
let x14=new Promise((resolve,reject)=>{

        setTimeout(()=>{
            reject('load second footer of the page')
        },4000);
});
Promise.any([x11,x12,x13,x14])
        .then((result)=>console.log(result))
        .catch((error)=>console.log(error));




