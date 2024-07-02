import { mongoose } from "mongoose";

const SUser =new mongoose.Schema({
    Name:{type:String ,required:true},
    Email:{type:String,required:true,unique:true},
    Password:{type:String ,required:true},
    Phone:{type:String ,required:true},
})
export const User =mongoose.model("Users",SUser)