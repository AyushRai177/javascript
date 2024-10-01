/*function addTwoNumbers(number1 , number2)
{
    console.log(number1+number2);
    
}
const result = addTwoNumbers(3,2)
console.log("Result:" , result);*/



function addTwoNumbers(number1,number2)
{
    //let result=number1+number2
    //return result
    return number1 + number2
}
const result= addTwoNumbers(3,5)
//console.log(result);


function loginUserMessage(userfullname="Ayush")
{
    if(!userfullname)
    //if(userfullname==undefined)
    {
        console.log("Please enter a username");
        return
    }
    return `${userfullname} just logged in`
}
//console.log(loginUserMessage("Ayush"))
//console.log(loginUserMessage("Raman"))

function calculatePrice(...num1)
{
    return num1
}
//console.log(calculatePrice(200,400,500,600));

// how to pass an object into an function

const user = {
    usernamename:"Ayush",
    price:199
}

function user12(anyobject)
{
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    

}
//user12(user)

//passing the object direct with creating it earlier

user12({
    username: "Ayush" ,
    price :199
})

const myNewArray = [200,400,500,600]

function returnsecondvalue(getarray)
{
    return getarray[1]
}
//console.log(returnsecondvalue(myNewArray));
console.log(returnsecondvalue([200,300,400,500]));

