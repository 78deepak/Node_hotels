const mongoose = require('mongoose');
const menuSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true,
    },
    taste:{
        type:String,
        required:true,
        enum:['sweet', 'spicy' , 'sour']
    },
    isdrink:{
        type:Boolean,
        default:false,
    },
    num_salse:{
        type:Number,
        default:0
    },
    ingrediants:{
        type:[String],
        default:[]
    }
})


const MenuList = mongoose.model('MenuList',menuSchema);
module.exports = MenuList;