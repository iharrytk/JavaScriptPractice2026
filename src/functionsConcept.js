//simple function with no parameters or return type
function test(){
    console.log("test function");
}


test();//output: test function



//no input but returns something

function getTrainerName(){
    console.log("Your Trainer name is:");
    let trainerName='Naveen';
    return trainerName;

}
let trainername=getTrainerName();
console.log(trainername);//output:Your Trainer name is:Naveen


//Function takes some input parameters and some returns:

/**
 * 
 * @param {number} a 
 * @param {number} b 
 * @returns 
 */
function add(a,b){

    console.log("adding a and b");
    let c= a+ b;
    return c;
}

let result=add(10,20);
console.log(result);//output:adding a and b 30

let resulttt=add(10,'Naveen');
console.log(resulttt);//output:adding a and b 10Naveen

/**
 * 
 * @param {string} studentName 
 * @returns student marks
 */

function studentMarks(studentName){

   let marks=-1;

    console.log("The student name is:"+studentName);

    switch (studentName.trim().toLowerCase()) {
        case "ankit":
            console.log("his/her marks is 90");
            marks=90;
            break;
        case "naveen":
            console.log("his/her marks is 100");
            marks=100;
            break;
        case "vishnu":
            console.log("his/her marks is 78");
            marks=78;
            break;
    
        default:
            console.log(`${studentName} is not in the list`);
            break;
            
    }

    return marks;



}

let marks=studentMarks('xxx');
console.log(marks);//output:The student name is:xxx
//xxx is not in the list
//-1