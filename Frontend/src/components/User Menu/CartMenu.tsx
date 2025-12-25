import { Grip, Minus, Plus, } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { DecreaseQty, IncreateQty } from "../../store/slices/menuSlices";

const CartMenu = ({ isClicked }: any) => {
  const cartItems = useSelector((state: any) => state.menuReducers.Cart);
  const dispatch = useDispatch();
  const handleIncreaseQuantity = (_id: any) => {
    dispatch(IncreateQty({ _id }));
  };

  const handleDescreaseQuantity = (_id: any) => {
    dispatch(DecreaseQty({ _id }));
  };

  return (
    <div
      className={`fixed bg-white h-[98%] w-full left-0  bottom-0  p-4 rounded-t-4xl overflow-scroll    ${
        isClicked ? "flex flex-col" : "hidden"
      } `}
    >
      <div className="w-full">
        <div className=" p-2 w-full flex justify-center items-center ">
          <Grip size={20} strokeWidth={2} />
          <Grip size={20} strokeWidth={2} />
          <Grip size={20} strokeWidth={2} />
        </div>
        <hr />
        <h1 className=" text-xl font-bold mt-5 mb-5"> Your Cart </h1>
      </div>
      <div className=" flex flex-col justify-center items-center ">
        {cartItems.length === 0 ? (
          <>
            {" "}
            <h1> Your Cart is Empty Please Add Items</h1>{" "}
          </>
        ) : (
          <>
            <div className=" w-full flex flex-col gap-4 justify-center items-center  ">
              {cartItems.map((item: any, idx: any) => {
                return (
                  <div
                    key={idx}
                    className="flex px-3 gap-2 min-w-full min-h-[100px] text-start  justify-center items-center rounded-2xl bg-white border border-gray-800 shadow-md "
                  >
                    {/* Image Section - Using the specific cream background */}
                    <div className="w-20 h-20 flex justify-center items-center bg-[#fefbe5] rounded-2xl flex-col">
                      <img
                        className="w-15 object-contain"
                        src={item.image}
                        alt={item.name}
                      />
                    </div>

                    {/* Content Section */}
                    <div className="py-2 px w-[70%] flex flex-col">
                      {/* Top Part: Name */}
                      <div>
                        <h1 className="text-sm font-bold text-neutral-800">
                          {item.name}
                        </h1>
                      </div>

                      {/* Bottom Part: Prices */}
                      <div className="flex w-full items-center gap-4 mt-4">
                        {/* Price 1 - Orange Pill Style */}
                        <h2 className="bg-orange-300 px-3 py-2 rounded-xl text-sm font-semibold">
                          ₹{item.price}
                        </h2>

                        {/* Price 2 - Styled as secondary text */}
                        <>
                          <div className="flex bg-amber-100 p-2 rounded-4xl w-20 justify-around items-center ">
                            <button
                              onClick={() => handleDescreaseQuantity(item._id)}
                            >
                              <h1 className=" bg-white p-1 rounded-2xl flex justify-center items-center ">
                                {" "}
                                <Minus size={12} strokeWidth={3} />{" "}
                              </h1>
                            </button>

                            <h1 className=" font-semibold ">
                              {" "}
                              {item.quantity}
                            </h1>
                            <button
                              onClick={() => handleIncreaseQuantity(item._id)}
                            >
                              {" "}
                              <h1 className=" bg-white p-1 rounded-2xl flex justify-center items-center   ">
                                {" "}
                                <Plus size={12} strokeWidth={3} />
                              </h1>{" "}
                            </button>
                          </div>
                        </>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartMenu;
