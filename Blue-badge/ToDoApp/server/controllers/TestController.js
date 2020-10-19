// controller with one get request that responds with a message
 that says "hello from the test controller"


 const {Router} = require ('express');

 const testControllerRouter=Router();

 testControllerRouter.get("/",(request, response) =>{
      let message = "hello from the test controller!";
      response.send(message);
 });

 module.exports=testControllerRouter;