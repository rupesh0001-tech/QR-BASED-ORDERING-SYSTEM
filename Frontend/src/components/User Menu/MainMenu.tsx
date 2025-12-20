import MainCards from "./MainCards";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../api/api";

const MainMenu = () => {
  interface MenuItemI {
    name: string;
    description: string;
    price: number;
    category: string;
    image: string;
    status: string;
  }

  let [menu, setMenu] = useState<MenuItemI[]>([]);
  const params = useParams();

  const getMenu = async () => {
    await api
      .get(`/api/${params.tableId}/menu`)
      .then((res) => {
        setMenu(res.data.Menu);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getMenu();
  }, []);
  return (
    <div className="flex flex-col gap-1 items-center bg-white px-4 py-4 rounded-2xl">
      <div>
        <h1 className=" text-md font-bold ">Main Menu</h1>
        <hr />
        <div className=" flex flex-col w-full gap-4">
            {menu.map((item, index) => {
          return (
            <div  key={index}>
              <MainCards name={item.name} description={item.description} price={item.price} category={item.category} image={item.image} status={item.status} />
              {/* <div>{item.name}</div>
              <div>{item.description}</div>
              <div>{item.price}</div>
              <div>{item.category}</div>
              <div>
                <img src={item.image} alt="" />
              </div>
              <div>{item.status}</div> */}
            </div>
          );
        })}
        </div>
      </div>
    </div>
  );
};

export default MainMenu;
