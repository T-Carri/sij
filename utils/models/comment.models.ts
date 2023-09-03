import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({

    user: {type: String, required: true},
    comment:{type:String, required:true}
    
},  { timestamps: true })

const Comment = mongoose.models.Comment || mongoose.model("Comment", commentSchema);

export default Comment;


