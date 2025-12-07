import mongoose from "mongoose";


interface UserI extends mongoose.Document {
    name : string,
    email : string,
    password : string,
    role : string
}


const userSchema  = new mongoose.Schema<UserI>({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true,
        lowercase : true,
        trim : true

    },
    password : {
        type : String,
        required : true,
        min : 6,
        max : 1024,
        select : false
    },
    role : {
        type : String,
        required : true,
        enum : ["admin", "chef"]

    }
}, {
    timestamps : true    
});


const User = mongoose.model<UserI>("User", userSchema); 
export default User