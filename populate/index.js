
const config = require('../config/dev');
const mongoose = require('mongoose');
const FakeDB = require('./FakeDB')

   mongoose.connect(config.DB_URI , 
    {
      useNewUrlParser:true,
      useUnifiedTopology:true,
      useCreateIndex:true,
      useFindAndModify:false
    } , async(err)=>{
      if (err) {console.log(err);}
      else
       {
           console.log('> starting populating');
           await FakeDB.populate();
           await mongoose.connection.close();
           console.log('> data populated');
      }
    });

