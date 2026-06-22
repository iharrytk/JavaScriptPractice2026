let i=11;
let j=i++ + ++i;
console.log(i);  //output:13
console.log(j);  //output:24


//======================


let a=11 ,b=22,c;
c=a+b+a++ + b++ + ++a + ++b;
console.log(a);  //output:13
console.log(b);  //output:24
console.log(c);  //output:103


//======================


let i=0;
let j=i++ - --i + ++i - i--;
console.log(i);  //output:0
console.log(j);  //output:1

//======================


let b=true;         
b++;
console.log(b);


//======================

let i=19,j=29,k=9;
let m=i-- -j-- -k--;
console.log(i);  //output:18
console.log(j);  //output:28
console.log(k);  //output:8
console.log(m);  //output:-19


//======================

let m=0 ,n=0;
let p= --m * --n * n-- * m--;
console.log(m);  //output:-2
console.log(n);  //output:-2
console.log(p);  //output:1


//=====================

let x=10n;
console.log(++x);       //output:11n


//=========================


let d=1.5 ,D=2.5;
console.log(d++ + ++D); //output:5






