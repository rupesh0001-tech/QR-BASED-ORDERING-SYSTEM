import { useParams } from "react-router-dom";

const OrderBox = () => {
  const params = useParams();

  return (
    <div className="flex flex-col gap-4 items-center bg-gray-500 shadow-[0px_4px_25px_0px_#0000000D] rounded-xl max-w-lg md:w-full w-11/12 md:py-8 py-6 px-5">

      {/* Order Accepted */}
      <div className="flex w-full justify-center bg-white p-3 rounded-2xl px-10">
        <h1 className="text-md font-semibold">
          Order Accepted by Chef
        </h1>
      </div>

      {/* Order ID */}
      <div className="text-center flex flex-col gap-2 w-full bg-white py-5 px-2 rounded-2xl">
        <h1 className="text-md font-semibold">Order ID</h1>
        <span className="bg-red-200 p-2 rounded-xl font-semibold">
          {params.order_id}
        </span>
      </div>

      {/* Cooking Status */}
      <div className="bg-white p-5 rounded-2xl px-4 flex flex-col items-center gap-3 shadow-sm w-full">

        <h2 className="text-black font-medium text-md text-center">
          Please wait while our chef cooks the best for you
        </h2>

        <p className="text-sm text-gray-500 text-center">
          Your meal is currently being freshly prepared using quality ingredients.
        </p>

        <p className="text-sm text-gray-500 text-center">
          Once the food is ready, it will be packed carefully and sent for delivery.
        </p>

        <p className="text-xs text-gray-400 text-center">
          Thank you for your patience and for choosing us.
        </p>

      </div>

    </div>
  );
};

export default OrderBox;
