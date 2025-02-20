import mongoose from "mongoose";

//schema ===> modela
//collection ===> table
//cluster fotor => database => collection

const usersSchema = new mongoose.Schema({
    name: {type: String, require: true},
})

export const Users = mongoose.model("users", usersSchema)
