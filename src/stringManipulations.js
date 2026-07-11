let str='hello';
console.log(str.length);//output:5
console.log(str.includes('h'));//output:true
console.log(str.includes('ell'));//output:true
console.log(str.includes('a'));//output:false
console.log(str.indexOf('h'));//output:0
console.log(str.indexOf('f'));//output:-1
console.log(str.lastIndexOf('l'));//output:3
console.log(str.slice(0,4));//output:hell
console.log(str.slice(0,5));//output:hello

console.log(str.slice(-1));//output:0
console.log(str.slice(-5));///output:hello
console.log(str.slice(0));//output:hello
console.log(str.startsWith('h'));//output:true
console.log(str.startsWith('t'));//output:false
console.log(str.endsWith('o'));//output:true
console.log(str.endsWith('r'));//output:false

console.log(str.slice(-4,-1));//output:ell
console.log('=================================');

//string substring
//start>=end
//no negative indexing

console.log(str.substring(0,3));//output:hel
console.log(str.substring(0,5));//output:hello
console.log(str.substring(0,1));//output:h
console.log(str.substring(4));//output:o


let strr='playwright';
let wish='HELLO';
console.log(strr.charAt(0));//output:p
console.log(strr.toUpperCase());//output:PLAYWRIGHT
console.log(wish.toLowerCase());//output:hello
console.log('      hello     '.trim());//output:hello
console.log('     hello haritha     hhh'.trimStart());//output:hello haritha     hhh
console.log('     hello haritha     hhh    '.trimEnd());//output:     hello haritha     hhh

console.log('hi hi'.replace('hi','hey'));//output:hey hi
console.log('hi hi'.replaceAll('hi','hey'));//output:hey hey

let dob='01-01-1993';
console.log(dob.replaceAll('-','/'));//output: 01/01/1993


let wishh='hello';
console.log(wishh.concat(" ","Selenium"," ","Automation"));//output:hello Selenium Automation


