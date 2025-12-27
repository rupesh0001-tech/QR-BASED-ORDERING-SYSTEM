import { createSlice } from "@reduxjs/toolkit";


interface OrderI {
    order_id: string;
    table: string;
    items: any[];
    _id: string;
    name: string;
    quantity: number;
    order_status: string;
    total_price: number;
    payment_method: string;
    payment_status: string;
}

interface initStateI {
    Orders : OrderI[]
}

const initState : initStateI = {
    Orders:  [],
};

export const orderSlice = createSlice({
    name : 'order', 
    initialState : initState,
    reducers : {
        CreateOrder : (state, action) => {
            let { order } : any = action.payload;
            state.Orders.push(order);
        }
    }
})

export const { CreateOrder } = orderSlice.actions;
export default orderSlice.reducer;