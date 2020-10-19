var Express= require('Express');
var router= Express.Router(); 
var sequelize= require('../db');
var TestModel= sequelize.import('../models/test');//1

/**********************************
 * controller Method #1: simple Response
 ***********************************/


router.post('/one', function(req,res){
 
  res.send("Got a post request")
});



/**********************************
 * controller Method #2:persisting Data
 ***********************************/

router.post('/two', function(req,res){
  let testData = "Test data for endpoint two"; //2
    
  TestModel//3
     .create({ //4
         //6
        testdata:testData //5
     }).then (dataFromDatabase =>{
           res.send("Test two went through!")
     })
    });

    /**********************************
 * controller Method #3:req.body
 ***********************************/

router.post('/three', function(req,res){
              //1
  var testData= req.body.testdata.item;
    
  TestModel
     .create({ //2
        testdata:testData 
     })
      res.send("Test three went through!")
     
    });

module.exports = router;
