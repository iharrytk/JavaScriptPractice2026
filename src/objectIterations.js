
//Object iterations
user={
    name: 'Tom',
    age:30,
    city:'LA',
    isActive:true

}

//for in loop for Object iterations:
for(let key in user){

    console.log(key,`:`,user[key]);
}

//iterating through a larger object with an object inside as well as array inside a Object

user={
    name: "John Doe",
    age: 30,
    occupation: "Software Engineer",
    isEmployed: true,
    address:{
        street: "123 Main St",
        city: "New York",
        state: "NY",
        zip: "10001"

    },

    devices:["iphone","mouse","keyboard"]
};

console.log("=======================");


// iterate through the devices array inside the user object
for (const device of user.devices) {
    console.log(device);
}


console.log("=======================");

//length of devices array inside the object

console.log(user.devices.length);


console.log("=======================");


