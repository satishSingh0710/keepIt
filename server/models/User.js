import mongoose from "mongoose";

const userSchema = mongoose.Schema({
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
        required: true, 
    }, 
    password: {
        type: String, 
        required: true,
        min: 6
    }
}, {timeStamps: true});

const User = mongoose.model("User", userSchema);
export default User;
