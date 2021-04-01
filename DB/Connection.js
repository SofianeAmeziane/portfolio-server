
const config = require('../config/dev');
const mongoose = require('mongoose');
require('./models/portfolio');
exports.ConnectionDb = () =>{
return mongoose.connect(config.DB_URI , 
    {
      useNewUrlParser:true,
      useUnifiedTopology:true,
      useCreateIndex:true
    } , (err)=>{
      if (err) {console.log(err);}
      else
       {
         console.log('Conected to DB');
      }
    });
}
