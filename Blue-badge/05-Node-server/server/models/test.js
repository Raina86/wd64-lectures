//7                     //1
module.exports=function(sequelize, Datatypes){
                  //2     //3
   return sequelize.define('test',{ //4
      //5          //6
      testdata:Datatypes.STRING

   });
};