import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
   
})

const transactionModel = mongoose.models.user || mongoose.model("user",transactionSchema)

export default userModel;