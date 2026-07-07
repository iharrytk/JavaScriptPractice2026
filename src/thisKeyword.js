let user={

    //properties:key value pair
    name:'mukul',
    age:'30',
    dept:'IT',
    salary:1000000,

    //functions defined
    login(){
        console.log("user:"+this.name+" is logging");
    },
    resetPassword(){

        console.log("user:"+this.name+" is resetting password");
        this.login();

    }

};

console.log(user);//output:{
//   name: 'mukul',
//   age: '30',
//   dept: 'IT',
//   salary: 1000000,
//   login: [Function: login]
// }


user.resetPassword()//output:user:mukul is resetting password
//user:mukul is logging
