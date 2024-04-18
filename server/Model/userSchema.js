const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    Name:{type:String},
    Place:{type:String},
    Mob:{type:Number}
})

module.exports = mongoose.model("students",userSchema)