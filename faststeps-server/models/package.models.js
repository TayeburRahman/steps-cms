const mongoose = require("mongoose");


const packageModel = new mongoose.Schema(
        {
            name: {
                type: String,  
            },
            service: {
                type: String,  
            },
            package: {
                type: String, 
            },
            offer:{
                type: Array,   
            },  
        } 
    );
 
     
module.exports = mongoose.model('packages', packageModel)