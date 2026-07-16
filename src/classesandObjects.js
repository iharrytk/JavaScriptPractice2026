class Employee{

    //class or global variables
    empname;
    age;
    role;
    salary;
    isPerm;


    //constructor: only one constructor is allowed
    constructor(empname,age,role,salary,isPerm){
        this.empname=empname;
        this.age=age;
        this.role=role;
        this.salary=salary;
        this.isPerm=isPerm;
    };

    //methods
    study(){
        console.log(`${this.empname} is working here`);
    }

    empInfo(){

        console.log(`${this.empname} ${this.age} ${this.role}`);
    }


};


//obj of the Employee class:using new keyword
let e1=new Employee('tom',33,'SDET',150000,true);
e1.study();
e1.empInfo();