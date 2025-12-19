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
        unique : true
    },
    status : {
        type : String,
        required : true,
        enum : ["full", "empty"]
    },
    tableId : {
        type : String,
        required : true,
        unique : true
    }
}, 

{
    timestamps : true
}
);

export default mongoose.model("Table", tableSchema);