import Table from "../models/table";
import { Request, Response } from "express";
import { v4 as uuidv4 } from 'uuid';
import { genrateUrl } from "../helper/genrateUrl";

const createTable = async (req: Request, res: Response) => {
    try {
        const { table_number }  = req.body;
        if(!table_number){
            return res.status(400).json({
                message : ' table number is required '
            })
        }
       

        const existingTable = await Table.findOne({ table_number });
        if (existingTable) {
            return res.status(400).json({
                message: "Table already exists",
            });
        }
         const tableId = uuidv4();
        const OrderUrlforTable = genrateUrl(tableId);
        const QRcodeUrl = genrateUrl(OrderUrlforTable);

        const table = await Table.create({
            Table_number : table_number,
            table_qr : QRcodeUrl,
            status : "empty",
            tableId
        });
        
        res.status(200).json({
            message: "Table created successfully",
            table,
        });

    }catch(error){
        res.status(400).json({
            message : ' error while genrating the qr code ',
            error : error
        })
    }
};
