async function greet(){

   return 'hello world';
}

greet().then((result)=>console.log(result))

console.log('===============================================');


function fetchData(){


    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
           let userData={
                myname:'haritha',
                age:33
            }
            console.log("fetching the data after 3 seconds...");
            resolve(userData);
        },3000);
     });

}

fetchData().then((result)=>{console.log(result);})



console.log('===============================================');

function fetchData(){ 
    return new Promise((resolve,reject)=>{ 
        setTimeout(()=>{
       
        console.log('fetching the data after 3 seconds');
        let userData={
        myname:'haritha',
        role:'SDET',
        age:33
        }
        resolve(userData);

        },3000);
    });
}
async function getData(){
    console.log('I am now going to fetchData() method ');
    let result=fetchData();
    console.log(result);
   
}

getData();

