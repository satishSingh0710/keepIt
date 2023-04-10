import mongoose from "mongoose";

const noteSchema = mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String, 
        required: true
    },
    heading: {
       type: String, 
       required: true
    },
    note: {
        type: String,
        required: true,
    }
    
}, {timeStamps: true});

const Note = mongoose.model('Note', noteSchema);
export default Note;