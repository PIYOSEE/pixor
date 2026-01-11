import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
   userId : {
    type : String,
    required : true
   },
   plan : {
    type : String,
    required : true
   },
   amount : {
    type : Number,
    required : true
   },
   credits : {
    type : Number,
    required : true
   },
   payment : {
    type : Boolean,
    default: false
   }, 
   data : {
    type : Number
   },
})

const transactionModel = mongoose.models.user || mongoose.model("user",transactionSchema)

export default userModel;