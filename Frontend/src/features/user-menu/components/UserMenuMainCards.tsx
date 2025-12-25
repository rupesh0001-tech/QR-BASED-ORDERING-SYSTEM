import { useDispatch, useSelector } from "react-redux";
import {
  AddToCart,
  DecreaseQty,
  IncreateQty,
} from "../../../store/slices/menuSlices";
import { Minus, Plus } from "lucide-react";
import React from "react";

interface MainCardsProps {
  _id: string;
  image: string;
  name: string;
  description: string;
  price: number;
}

const MainCards = React.memo(({
  name,
  description,
  price,
  _id,
  image
}: MainCardsProps) => {
  const dispatch = useDispatch();

  const handleAddToCart = (_id: any, name: any, price: number, image: string) => {
    dispatch(AddToCart({ _id, name, price, image }));
  };

  const cartItem = useSelector((state: any) =>
    state.menuReducers.Cart.find((item: any) => item._id === _id)
  );

  const handleIncreaseQuantity = (_id: any) => {
    dispatch(IncreateQty({_id}));
  };

  const handleDescreaseQuantity = (_id: any) => {
    dispatch(DecreaseQty({_id}));
  };

  return (
    <div className="flex px-3 gap-6 min-w-full min-h-[125px] text-start items-center justify-between shadow-md rounded-2xl ">
      {/* Image */}
      <div className="w-30 h-27  flex justify-center items-center bg-[#fefbe5] rounded-2xl flex-col  ">
        <img src={image} alt={name} className="w-30 object-contain  " />
        {/* <p className=" p-1 px-2 bg-blue-900 text-white  text-center rounded-2xl text-xs">{category}</p> */}
      </div>

      {/* Content */}
      <div className="py-2 px w-[70%] flex flex-col ">
        <div>
          <h1 className="text-md font-bold text-neutral-800">{name}</h1>

          <p className="text-sm font-medium text-neutral-700 line-clamp-2">
            {description}
          </p>
        </div>

        {/* Bottom row */}
        <div className="flex w-full items-center gap-4 mt-4 ">
          <span className="bg-orange-300 px-3 py-2 rounded-xl text-sm font-semibold">
            ₹{price}
          </span>

          {cartItem? (
            <>
              <div className="flex bg-amber-100 p-2 rounded-4xl w-20 justify-around items-center ">
                <button   onClick={() => handleDescreaseQuantity(cartItem._id)}>
                  <h1 className=" bg-white p-1 rounded-2xl flex justify-center items-center ">
                    {" "}
                    <Minus size={12} strokeWidth={3} />{" "}
                  </h1>
                </button>

                <h1 className=" font-semibold "> {cartItem.quantity}</h1>
                <button onClick={() => handleIncreaseQuantity(cartItem._id)}>
                  {" "}
                  <h1 className=" bg-white p-1 rounded-2xl flex justify-center items-center   ">
                    {" "}
                    <Plus size={12} strokeWidth={3} />
                  </h1>{" "}
                </button>
              </div>
            </>
          ) : (
            <button
              onClick={() => handleAddToCart(_id, name, price, image)}
              className="bg-blue-950 text-white px-3.5 py-3 rounded-xl text-xs font-semibold"
            >
              Add
            </button>
          )}
        </div>
      </div>
    </div>
  );
});

export default MainCards;
