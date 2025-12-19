import { createItem } from './admin.menu';
import Table from "../models/table";
import Order from "../models/order";
import MenuItem from "../models/menuItem";
import { Request, Response } from "express";
import { randomUUID } from 'crypto';


export const createOrder = async (req: Request, res: Response) => {
    try {
        const {tableId} = req.params;

        // a cart should contain here  [{ name id quatity }] 
        const {cart, cartPrice} = req.body;
        const table = await Table.findById(tableId);
        
        if(!table){
            return res.status(404).json({
                message : ' table not found '
            })
        }

        if(table.status === 'full'){
            return res.status(400).json({
                message : ' table is already occupied '
            })
        }

        if( cart.length === 0 ){
            return res.status(400).json({
                message : ' Cart is empty '
            })
        }


        const cartItemsId = cart.map((item : any) => {
            return item._id
        });

        const checkIfTheItemsExists = await MenuItem.find( { _id : {$in : cartItemsId} });

        if(checkIfTheItemsExists.length !== cart.length){
            return res.status(400).json({
                message : 'one or more items are unavailable right now '
            })
        }

        const order = await Order.create({
            order_id : table.Table_number, 
            table : table._id,
            items : cart,
            order_status: 'pending',
            total_price : cartPrice,
            payment_method : 'cash',
            payment_status : 'pending'
        });

        res.status(200).json({
            message : ' order created successfully ',
            order
        })
    }catch(error : any){
        res.status(400).json({
            message : ' error while creating the order ',
            error : error.message
        })
    }
}