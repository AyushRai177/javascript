//const tinderUser = new Object()   // Singleton declaration of object
const tinderUser ={}
tinderUser.id="123abc"
tinderUser.name="Ayush"
tinderUser.isLoggedIn=false
//console.log(tinderUser);

const regularuser ={
    "email":"ayush@gmail.com",
    fullname:{
        userfullname:{
        firstname:"Ayush",
        Lastname:"Rai"
    }
}
}

console.log(regularuser.email);


 
const obj1 ={1:"d",2:"c"}
const obj2 ={3:"a", 4:"b"}
//const obj3=Object.assign({},obj1,obj2)   //(target,source)
//console.log(obj3);

const main={...obj1,...obj2}
//console.log(main);

const users = [
    {
    },
    {
    },
    {
    }]

    //users.[1].email

    //console.log(tinderUser);
    //console.log(Object.keys(tinderUser));
    //console.log(Object.entries(tinderUser));
    
    //console.log(tinderUser.hasOwnProperty("isLogged"));

    const course ={
        coursename:"Javascript",
        Instructorname:"Hitesh"
    }
    console.log(course.coursename);

    const {Instructorname:instructor} = course
    console.log(instructor);
   //APIS format they are in the form of objects or they are in the form of array

    /*[
        {},
        {},
        {}
    ]*/ 

        const user = { 
            'name': 'Alex',
            'address': '15th Park Avenue',
            'age': 43
        }
        
        const { name:fullname  } = user // Uncaught SyntaxError: Unexpected token '='
        console.log(fullname);
        
        
        