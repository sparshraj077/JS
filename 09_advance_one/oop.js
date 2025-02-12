// OOP

// ##Object 
// - collection of properties and methods 
// - to lowerCase

const user={
    username:"sparsh",
    loginCount:8,
    signedIn:true,
    getUserDetails:function(){
        console.log("got user details fom database");
    }


}

console.log(user.username);
console.log(user.getUserDetails());

// constructor function 
const promiseOne=new Promise()
const date =new Date()

