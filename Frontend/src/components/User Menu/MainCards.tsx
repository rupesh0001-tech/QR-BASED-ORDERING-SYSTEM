{
  /* <div>{item.name}</div>
              <div>{item.description}</div>
              <div>{item.price}</div>
              <div>{item.category}</div>
              <div>
                <img src={item.image} alt="" />
              </div>
              <div>{item.status}</div> */
}

interface MenuItemI {
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  status: string;
}

const MainCards = ({
  name,
  description,
  price,
  category,
  image,
  status,
}: MenuItemI) => {
  return (
    <div className="flex px-3 gap-6 min-h-[125px] text-start items-center justify-between shadow-md rounded-2xl ">
      {/* Image */}
      <div className="w-30 h-27 flex justify-center items-center bg-[#fefbe5] rounded-2xl">
        <img src={image} alt={name} className="w-30 object-contain" />
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
        <div className="flex w-full items-center  gap-4 mt-4 ">
          <span className="bg-orange-300 px-3 py-2 rounded-xl text-sm font-semibold">
            ₹{price}
          </span>

          <button className="bg-blue-950 text-white px-3.5 py-3 rounded-xl text-xs font-semibold">
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainCards;
