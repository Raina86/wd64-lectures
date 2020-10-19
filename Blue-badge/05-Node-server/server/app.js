// var express = require('express')
// var app = express();
// var test = require('./controllers/testcontroller')

// // var Express= require('Express');//1
// // var app = Express();//2

// // //3         //4
// // app.listen(3001, function(){
// //   console.log('Hey man!!!') //5

// // });

// // app.use('/api/test', function(req, res){
// //   res.send("This is data from the /api/test endpoint. It's from the server.");
// // });


// // // var Express = require('Express')
// // // var app = Express();
// // var test = require('./controllers/testcontroller')//1
// //            //2           //3
// // app.use('/test', test)

// const sequelize= require("./db")
// sequelize.authenticate()
// 	.then(async () => {
// 		console.log('DB CONNECTED');
// 		return sequelize.sync();
// 	})
// 	.catch(() => {
// 		console.log('Server Crashed');
// 	})

// app.listen(3000, () => {
// 	console.log('App listening on port 3000');
// });
	


// // // var Express = require('Express')
// // // var app = Express();
// // var test = require('./controllers/testcontroller')//1
// // var sequelize = require('./db');

// // //2
// // sequelize.sync(); // tip: pass in {force:true} for resetting tables
// //   app.use('/test', test)






// sequelize.sync(); // tip:{ force:true} for resetting tables

// app.use(express.json());//1

// app.use('test',test)

// app.listen(3001, function(){
//     console.log('App is listening on 3001')
// });



 var Express = require('Express')
 var app = Express();
 var app = express();
var test = require('./controllers/testcontroller')//1
var sequelize = require('./db');


sequelize.sync(); // tip: pass in {force:true} for resetting tables
  app.use(express.json());//1

  app.use('/test', test)

app.listen(3000,function(){
	console.log('App is listening on 3000.')
});

