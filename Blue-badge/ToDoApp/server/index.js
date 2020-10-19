
// const Express= require("express");
const applicationControllers =require("./controllers/index");

// const expressApplicationObject= new Express();
expressApplicationObject.use("/test, applicationControllers.test");

// expressApplicationObject.post("/challenge",(request, response)=>{
       console.log("[server]: Root GET request recieved");
       console.log("TYPE:",request.method);
       console.log("URL:", request.url);
       console.log("BODY:", request.body);
       let age =request.body["age"]
       let name= request.body["name"]
       if (age < 18) {
        response.send(name + " you will be an adult soon!") 
        
       }
       else{
           response.send(name +" you are an adult!")
       }


       console.log("[server]: Response being dispatched->");
       response.send("Root Route Hit,hello from the todo server");
})

// expressApplicationObject.listen(9001, ()=>{
//     console.log("[server]: App is listening on port 9001");
   

// });

// Challenge: Recieve a POST request at the route "/challenge"
// Takes 2 values inside of the body:
// Name -> A string for a name
// Age -> A number for the age
// Respond with this message:
// If the user is 18 and older, the message will be:
//    "<name>, you are an adult!"
// Otherwise the message will be:
//    "<name>, you will be an adult soon!"

Respons:
const Express= require("express");



const expressApplicationObject= new Express();

expressApplicationObject.use(Express.json());
xpressApplicationObject.post("/challenge",(request, response)=>{
let data= request.body;

let message= data.age>= 18
`${data.name}, you are an adult`
`${data.name}, you will be an adult eventually`;


response.send(message);
});



expressApplicationObject.listen(9001, ()=>{
    console.log("[server]: App is listening on port 9001");
});