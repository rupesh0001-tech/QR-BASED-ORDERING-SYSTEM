import mongoose from "mongoose";


interface MenuItemI extends mongoose.Document {
    name : string,
    description : string,
    price : number,
    category : string,
    image : string,
    status : string
}

const menuItemSchema = new mongoose.Schema<MenuItemI>({
    name : {
        type : String,
        required : true,
        max : 255,
        trim : true
    },
    description : {
        type : String,
        default : '',
        required : false,
        max : 255,
        trim : true
    },
    price : {
        type : Number,
        required : true,
        min : 0
    },
    category : {
        type : String,
        required : true
    },
    image : {
        type : String,
        default : null,
        required : false,
    },
    status : {
        type : String,
        required : true,
        enum : ["available", "unavailable"]
    }

}, {
    timestamps : true
})

export default mongoose.model<MenuItemI>("MenuItem", menuItemSchema); 