import { ShoppingCart } from "lucide-react";

import { useSelector } from "react-redux";




const Cart = ({handleCartClick } : any ) => {
    const cartItems = useSelector((state : any) => state.menuReducers.Cart );
    
    let cartItemsCount = cartItems.reduce((total : any, item : any  ) => total + item.quantity , 0)
    
  return (
    <div className="fixed bottom-6 right-6 bg-white rounded-2xl w-15 h-15 flex justify-center items-center shadow-md ">
      <div onClick={ () => handleCartClick()} >
        <ShoppingCart stroke={"black"} strokeWidth={2} />
        <span className=" bg-orange-400 h-6 w-6 px-1 rounded-full text-sm font-semibold flex justify-center items-center absolute top-1 right-0"> {cartItemsCount} </span>
      </div>
    </div>
  );
};

export default Cart;
