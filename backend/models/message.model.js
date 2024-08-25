import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    senderID:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    receiverID:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    message:{
        type: String,
        required: true
    } //createdAt, updatedAt ==> message.createdAT : 15:30
},{timestamps: true});

const Message = mongoose.model("Message", messageSchema);

export default Message;
