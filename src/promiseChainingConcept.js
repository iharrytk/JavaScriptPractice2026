

//promise chaining:  
let myPromise=new Promise(
    (resolve,reject)=>{
        resolve(5);
    }
);

myPromise
        .then(
            (n)=> n*5
            )//n=5*5
        .then(
            (n)=> n*30
            )//n=25*30
        .then(
            (result)=>console.log(result)
        );//result=25*30