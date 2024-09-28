//const tinderUser = new Object()   // Singleton declaration of object
const tinderUser ={}
tinderUser.id="123abc"
tinderUser.name="Ayush"
tinderUser.isLoggedIn=false
console.log(tinderUser);

const regularuser ={
    email:"ayush@gmail.com",
    fullname:{
        userfullname:{
        firstname:"Ayush",
        Lastname:"Rai"
    }
}
}

//console.log(regularuser.fullname);


 
const obj1 ={1:"d",2:"c"}
const obj2 ={3:"a", 4:"b"}
//const obj3=Object.assign({},obj1,obj2)   //(target,source)
//console.log(obj3);

const main={...obj1,...obj2}
console.log(main);


const users = [
    {
    },
    {
    },
    { 
    }]

    //users.[1].email

    console.log(tinderUser);
    console.log(Object.keys(tinderUser));
    console.log(Object.entries(tinderUser));
    
    console.log(tinderUser.hasOwnProperty("isLogged"));

    const course ={
        coursename:"Javascript",
        Instructorname:"Hitesh"
    }
    //course.Instructorname

    const {Instructorname:instructor} = course
    console.log(instructor);
    
   //APIS format they are in the form of objects or they are in the form of array
    {
        "name": "Ayush Rai",
        "coursename": "Javascript",
        "price":"Free"
    }

    [
        {},
        {},
        {}
    ]