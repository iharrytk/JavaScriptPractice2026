//JavaScript Object conversion to JSON Payload
//Serialization
user={
    name: 'Tom',
    age:30,
    city:'LA',
    isActive:true

}


let userJson=JSON.stringify(user);
console.log(userJson);//output:{"name":"Tom","age":30,"city":"LA","isActive":true}

console.log(typeof userJson);//output: string


//DEserialziation
let userObj=JSON.parse(userJson);
console.log(userObj);//output: { name: 'Tom', age: 30, city: 'LA', isActive: true }
console.log(typeof userObj);//output : object