import mongoose, { Types } from "mongoose";

const contactSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true,
        trim: true
    },
    email : {
        type: String,
        required: true,
        lowercase: true
    },
    phone : {
        type: String,
        required: true
    },
    schoolId : {
        type:mongoose.Schema.Types.ObjectId,
        ref:'School',
        required:true
    },
    assignedTo : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
    },
    tags : [String],
    notes : String,
    lastInteractionDate : Date
},{timestamps:true});

contactSchema.index({schoolId:1});
contactSchema.index({email:1});

export default mongoose.model("Contact",contactSchema);
