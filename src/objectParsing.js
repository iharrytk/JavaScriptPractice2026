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

//serialization-JavaScript object to JSON String
let userJSON=JSON.stringify(user);
console.log(userJSON);//output:{"name":"John Doe","age":30,"occupation":"Software Engineer","isEmployed":true,"address":{"street":"123 Main St","city":"New York","state":"NY","zip":"10001"},"devices":["iphone","mouse","keyboard"]}



//Deserialziation-Conversion of JSON to JavascriptObj
let userObj=JSON.parse(userJSON);
console.log(userObj);//{
//   name: 'John Doe',
//   age: 30,
//   occupation: 'Software Engineer',
//   isEmployed: true,
//   address: {
//     street: '123 Main St',
//     city: 'New York',
//     state: 'NY',
//     zip: '10001'
//   },
//   devices: [ 'iphone', 'mouse', 'keyboard' ]
// }