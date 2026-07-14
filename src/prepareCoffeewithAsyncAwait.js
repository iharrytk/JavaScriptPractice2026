//prepare coffee using Promises

function startMachine(){

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{ console.log('started Machine');
                        resolve();
        },5000);
    });
}


function grindCoffeeBeans(){

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{ console.log('grinded Coffeee Beans');
                        resolve();
        },3000);
    });
}


function boilWater(){

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{ console.log('boiled the water');
                        resolve();
        },5000);
    });
}


function brewCoffee(){

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{ console.log('brew the cofee');
                        resolve();
        },3000);
    });
}

function pourCofee(){

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{ console.log('poured the Cofee into Cup');
                        resolve();
        },3000);
    });
}



async function prepareCoffee(){
    await startMachine();
    await grindCoffeeBeans();
    await boilWater();
    await brewCoffee();
    await pourCofee();

    console.log("Now get back to your desk");

}


prepareCoffee();
