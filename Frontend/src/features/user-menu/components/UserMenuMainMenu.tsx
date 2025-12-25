import MainCards from "./UserMenuMainCards";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../../api/api.ts";
import { useDispatch, useSelector } from "react-redux";
import { AddMenu } from "../../../store/slices/menuSlices";
import Cart from "./UserMenuCart";
import CartMenu from "./UserMenuCartMenu";

const MainMenu = ({ setNoScroll }: any) => {
  const [isClicked, setisClicked] = useState<Boolean>(false);

  const handleCartClick = () => {
    setisClicked((prev : any ) => {
      const newValue = !prev;
      setNoScroll(newValue);
      return newValue;
    });
  };
  const dispatch = useDispatch();

  const params = useParams();

  const getMenu = async () => {
    await api
      .get(`/api/${params.tableId}/menu`)
      .then((res) => {
        console.log("hit");
        dispatch(AddMenu(res.data.Menu));
      })
      .catch((err) => console.log(err));
  };

  const Menu = useSelector((state: any) => {
    return state.menuReducers.Menu;
  });
  useEffect(() => {
    getMenu();
  }, []);

  return (
    <div
      className={`flex flex-col gap-1 items-start p-4 bg-white  py-4 rounded-2xl relative `}
    >
      <CartMenu setisClicked={setisClicked} isClicked={isClicked} setNoScroll={setNoScroll} />
      <div className="flex flex-col gap-4 w-full ">
        <h1 className=" text-md font-bold ">Main Menu</h1>
        <hr />
        <div className="  flex w-full px flex-col items-start justify-start gap-4">
          {Menu.map((item: any) => {
            return (
              <div className=" flex w-full " key={item._id}>
                <MainCards
                    _id={item._id}
                    name={item.name}
                    description={item.description}
                    price={item.price}
                    image={item.image}
                  />
              </div>
            );
          })}

          <Cart handleCartClick={handleCartClick} />
        </div>
      </div>
    </div>
  );
};

export default MainMenu;
