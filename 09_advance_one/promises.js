
// fetch('hhrps://someething.com').then().catch().finally()


// How to create a promise 
const promiseOne=new Promise(function(resolve,reject)
{
    // Do an async task 
    // DB CALL, cryptography, network 
    setTimeout(function(){
        console.log("Async task is completed");
        resolve()
    },1000)
})
promiseOne.then(function(){
    console.log("task is done");
})


// how to create promises 

let myPromise = new Promise((resolve, reject) => {
    let success = true;
    
    setTimeout(() => {
        if (success) {
            resolve("Operation Successful!");
        } else {
            reject("Operation Failed!");
        }
    }, 2000);
});
  
//Handling Promises with .then() & .catch()
// We use .then() to handle resolved  promises 
//  .catch() to handle errors

myPromise
    .then((message) => {
        console.log("✅ Success:", message);
    })
    .catch((error) => {
        console.log("❌ Error:", error);
    });

    //🔹 If resolve() is called → "✅ Success: Operation Successful!"

//If reject() is called → "❌ Error: Operation Failed!"