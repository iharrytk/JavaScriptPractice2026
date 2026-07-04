
//object:key value pair format


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

    }
};


console.log(user);//    output: { name: 'John Doe', age: 30, occupation: 'Software Engineer', isEmployed: true }

console.log(user.name);//    output: John Doe
console.log(user.age);//    output: 30
console.log(user.occupation);//    output: Software Engineer
console.log(user.isEmployed);//    output: true 



console.log(user.address);//    output: { street: '123 Main St', city: 'New York', state: 'NY', zip: '10001' }
console.log(user.address.street);//    output: 123 Main St
console.log(user.address.city);//    output: New York
console.log(user.address.state);//    output: NY
console.log(user.address.zip);//    output: 10001   


user.email="har@gmail.com"; // adding a new property to the object
console.log(user);//    
//output: { name: 'John Doe', 4
// age: 30,
//  occupation: 'Software Engineer',
//  isEmployed: true,
//  address: { street: '123 Main St', city: 'New York', state: 'NY', zip: '10001' }, 
// email: 'har@gmail.com' }


delete user.age; // deleting a property from the object
console.log(user);//    
//output: { name: 'John Doe',
//  occupation: 'Software Engineer',
//  isEmployed: true,
//  address: { street: '123 Main St', city: 'New York', state: 'NY', zip: '10001' }, 
//  email: 'har@gmail.com' }