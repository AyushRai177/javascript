//Primitive also known as call by value
// 7 categories are there in primitive datatype 
// 7 types : String ,Number ,Boolean , null , undefined , symbol ,BigInt

//javascript is statically typed or dynamically typed ?
const score = 100
constScorevalue=100.3
let UserEmail; 
const outsidetemp =null

const id =Symbol('1234')
const anotherid =Symbol('1234')
console.log(id === anotherid);
const Bigno=345654357443576654356754n

// Reference type (Non primitive)

//Array, Objects,functions
const heroes =["Shaktiman","Batman","Spiderman"]
let myObj={
    name:"Ayush",
    age:22,    
}
const Myfunction=function(){
    console.log("Hello World");
    
}
console.log(typeof id);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++
//There are manly two types of memory in javascript
//Stack(Primitive) 'whenever stack memory is used we get the copy of the variable', 
//Heap(NonPrimitive)  whenever memory is defined under the heap we get the reference 
//of the variable

let myname="Ayush"
let anothername=myname
anothername="Amit"
console.log(anothername);
console.log(myname);

let userOne ={
    email : "user@google.com",
    upi: "user@ybl"
}
usertwo=userOne

usertwo.email="ayush@google.com"
console.log(userOne.email);
console.log(usertwo.email);


