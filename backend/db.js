const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/hello',{ useUnifiedTopology: true, useNewUrlParser: true }, (err)=>{
    if(!err){
        console.log('Database Connection Successful')
    }else{
        console.log('Error in Connection' + err)
    }
})

module.exports = mongoose;