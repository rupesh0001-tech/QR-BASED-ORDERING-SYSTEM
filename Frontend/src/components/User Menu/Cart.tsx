import { ShoppingCart } from "lucide-react";
import { useSelector } from "react-redux";



const Cart = () => {
    const countOfItems = useSelector((state : any) => state.menuReducers.Cart )
  return (
    <div className="fixed bottom-6 right-6 bg-white rounded-2xl w-15 h-15 flex justify-center items-center shadow-md ">
      <div>
        <ShoppingCart stroke={"black"} strokeWidth={2} />
        <span className=" bg-orange-400 h-6 w-6 px-1 rounded-full text-sm font-semibold flex justify-center items-center absolute top-1 right-0"> {countOfItems.length} </span>
      </div>
    </div>
  );
};

export default Cart;
