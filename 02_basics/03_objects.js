// singleton

// object literals

const mySym = Symbol("Key 1")

const Jsuser={
    name:"Ayush",
    "full name":"Ayush Rai",
    [mySym]: "myKey 1",
    age:18,
    email: "ayusraigkp@gmail.com",
    isLoggedIn: false,
    LastLoginDays: ["Monday","Saturday"]
}

/*console.log(Jsuser.email);
console.log(Jsuser["email"]);
console.log(Jsuser["full name"]);
console.log(Jsuser[mySym]);*/   

Jsuser.email="ayushraigkp7@gmail.com"
//Object.freeze(Jsuser)
Jsuser.email="amanraigkp8@gmail.com"
//console.log(Jsuser);

Jsuser.greeting=function(){
    console.log("Hello Js user");
}
Jsuser.greetingTwo=function(){
    console.log(`Hello Js user,${this.name}`);
}
console.log(Jsuser.greeting());
console.log(Jsuser.greetingTwo());

