setTimeout((name,name1,name2)=>
    {
        console.log('say hello after 3 sec:',name)
        console.log('say hello after 3 sec:',name1)
        console.log('say hello after 3 sec:',name2)
    },3000,'Devika','Naveen','haritha');
//output:say hello after 3 sec: Devika
// say hello after 3 sec: Naveen
// say hello after 3 sec: haritha



setTimeout((myname,age)=>{
    console.log('Hello World',myname,'my age is:',age)

},10000,'Haritha',33);
//output:Hello World Haritha my age is: 33


setTimeout(()=>{
    console.log('Hello World')

},10000);//Hello World

console.log('============================================================');

//preparing coffee

setTimeout(
    ()=> {
        console.log('start the machine');
    },2000

);
setTimeout(
    ()=> {
        console.log('grind the beans');
    },4000

);
setTimeout(
    ()=> {
        console.log('boil the water');
    },2000

);

setTimeout(
    ()=> {
        console.log('brew the cofee');
    },2000

);
setTimeout(
    ()=> {
        console.log('start the machinepour it in a cup');
    },2000

);