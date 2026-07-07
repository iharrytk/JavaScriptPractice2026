function login(username,password,role='admin',status='inactive'){
    console.log(username,password,role,status);

}


login('naveen','naveen@123');//output: naveen naveen@123 admin inactive
login('naveen','naveen@123',NaN,NaN);//output: naveen naveen@123 NaN NaN
login('naveen','naveen@123',"abc","active");//output: naveen naveen@123 abc active