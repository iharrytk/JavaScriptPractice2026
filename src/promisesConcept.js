let myPromise=new Promise((resolve,reject)=>{

    let sucess=false;

    if(sucess){
        resolve('Test Completed')

    }
    else{
        reject('Test Not Completed')
    }
});

myPromise
        .then((result)=>{
            console.log(result);

        })
        .catch((error)=>{
            console.log(error);

        });




console.log('====================================================');

let dataPromise=new Promise(


    (resolve,reject)=>{

        let elementFound=false;
        if(elementFound){
            setTimeout(()=>{
            resolve('data is received from the server')

        ,3000});
        }
        else{
            reject('data not found');
        }
        
    }
);


dataPromise
        .then((result)=>{
            console.log(result);
        })
        .catch((error)=>{
            console.log(error);
        });



console.log('====================================================');



function userData(){

    return new Promise((resolve,reject)=>{

        setTimeout(()=>{
            let user={
                name: 'priya',
                age:33
            }
            resolve(user);

        },3000);


    });

};

userData()
        .then(
            (result)=>
                    {console.log(result.name);}
        )




console.log('====================================================');



function userData(){

    return new Promise((resolve,reject)=>{

        let flag=false;
        if(flag){

            setTimeout(()=>{
            let user={
                name: 'priya',
                age:33
            }
            resolve(user);

        },3000);

        }
        else{
            setTimeout(()=>{
           
            
            reject('DATA not created.Data not found 204 error');

        },3000);
        }
    });

};

userData()
        .then(
            (result)=>
                    {console.log(result.name);}
        )
        .catch(
            (error)=>{console.log(error);}
        )
        .finally(

            ()=>{console.log('Disconnect from db');

            }
        )

console.log('================================================');

//promise chaining


