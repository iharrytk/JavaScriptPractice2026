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



startMachine()
            .then(()=>grindCoffeeBeans())
            .then(()=>boilWater())
            .then(()=>brewCoffee())
            .then(()=>pourCofee())
            .then(()=>console.log('Cofeee is ready,Drink Now'))
            .finally(()=>console.log('Go back to your desk and start working'));
