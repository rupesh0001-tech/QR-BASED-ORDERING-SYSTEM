import MainCards from "./MainCards";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../api/api";
import { useDispatch, useSelector } from "react-redux";
import { AddMenu } from "../../store/slices/menuSlices";
import Cart from "./Cart";

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
  const dispatch = useDispatch();
  



  const params = useParams();

  const getMenu = async () => {
    await api
      .get(`/api/${params.tableId}/menu`)
      .then((res) => {
        console.log('hit')
        setMenu(res.data.Menu);
        dispatch(AddMenu(res.data.Menu))
      })
      .catch((err) => console.log(err));
  };


  const Menu = useSelector((state : any) => { return state.menuReducers.Menu})
  useEffect(() => {
    getMenu();
  }, []);

  return (
    <div className="flex flex-col gap-1 items-start p-4 bg-white  py-4 rounded-2xl">
      <div className="flex flex-col gap-4 w-full ">
        <h1 className=" text-md font-bold ">Main Menu</h1>
        <hr />
        <div className=" relative flex w-full px flex-col items-start justify-start gap-4">
          {Menu.map((item : any, index : any) => {
            return (
              <div className=" flex w-full " key={index}>
                <MainCards
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  category={item.category}
                  image={item.image}
                  status={item.status}
                  _id={item._id}
                />
              </div>
            );
          })}
          
          <Cart />
        </div>
      </div>
    </div>
  );
};

export default MainMenu;
