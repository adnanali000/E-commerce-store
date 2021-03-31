const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/ecommerceOrders',{useNewUrlParser:true},(err)=>{
    if(!err){
        console.log("mongodb connected");
    }
    else{
        console.log("mongodb not connected: ",err);
    }
});
require('./order.model');
