let user={

    name:'Haritha',
    age:'33',
    city:'seattle',
    country:'USA'
};

//define function- with object reference as input parameter
function UserDetails(userobj){

    console.log(userobj);

}


//call a function by passing Object reference

UserDetails(user);//output:{ name: 'Haritha', age: '33', city: 'seattle', country: 'USA' }
