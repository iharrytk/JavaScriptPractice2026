let browser='chrome';
switch(browser){
    case 'chrome':
        console.log('launch chrome');
        break;
    case 'edge':
        console.log('launch edge');
        break;
    case 'firefox':
        console.log('launch ff');
        break;
    default:
        console.log('invalid browser,plz pass the right browser');
        break;
}

console.log("byee");


//using numbers with switch case is a bad practice as shown below
// let marks=90;

// switch (marks) {
//     case marks>90:
//         console.log("grade A++");
//         break;
//     case marks>80:
//         console.log("grade A+");
//         break;

//     default:
//         console.log("grade D");
//         break;
// }