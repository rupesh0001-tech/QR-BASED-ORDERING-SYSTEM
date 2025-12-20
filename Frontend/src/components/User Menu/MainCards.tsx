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
    <div>
      <div className=" flex gap-2">
        <div className=" flex justify-center items-center w-30 h-30 bg-[#fefbe5] p-2">
          <img decoding="async" loading="lazy" className=" h-20 w-20" src={image} alt="" />
        </div>
        <h1 className=" text-md font-bold text-center ">{name}</h1>
      </div>
    </div>
  );
};

export default MainCards;
