// Preparing coffee:

// >>start the machine-5 sec
// >>Grind the coffee beans -4 sec-
// >>Boil the water-4 sec
// >>brew the coffee-3 sec
// >>Pour into cup-1 sec


function startMachine(callback){


    setTimeout(()=>{
        console.log('start the machine');
        callback();
    },5000);
    

};


function grindBeans(callback){


    setTimeout(()=>{
        console.log('grind the beans');
        callback();
    },4000);
    

};


function boilWater(callback){


    setTimeout(()=>{
        console.log('boild the water');
        callback();
    },4000);
    

};

function brewCofee(callback){


    setTimeout(()=>{
        console.log('brew the cofee');
        callback();
    },3000);
    

};

function pourCup(callback){


    setTimeout(()=>{
        console.log('pour cofee into cup');
        callback();
    },1000);
    

};

//Call the functions by passing a function as reference(call back)
startMachine(()=>{
    
    grindBeans(()=>{
        boilWater(()=>{
            brewCofee(()=>{
                pourCup(()=>{
                    console.log('Cofee is ready for you to drink');
                })
            })
        })
    })
});



//output:
// start the machine
// grind the beans
// boild the water
// brew the cofee
// pour cofee into cup
// Cofee is ready for you to drink

console.log('===========================================');

startMachine(()=>{
    boilWater(()=>{
        console.log('Stopped suddenly');
    })
});
//Output:
// start the machine
// boild the water
// Stopped suddenly

