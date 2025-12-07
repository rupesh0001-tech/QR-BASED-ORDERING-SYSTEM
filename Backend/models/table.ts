import { stat } from "fs";
import mongoose from "mongoose";

const tableSchema = new mongoose.Schema({
    Table_number : {
        type : Number,
        required : true,
        unique : true 
    },
    table_qr : {
        type : String,
        required : true,
        unique : true
    },
    status : {
        type : String,
        required : true,
        enum : ["available", "unavailable"]
    },
}, 

{
    timestamps : true
}
);

export default mongoose.model("Table", tableSchema);