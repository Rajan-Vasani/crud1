import mongoose from 'mongoose'
const userSchema = new mongoose.Schema({
    name : {type:String,required:true},
    email: {type:String,required:true},
    password:{type:String,require:true}
})

export const userModel = mongoose.model('userData',userSchema)