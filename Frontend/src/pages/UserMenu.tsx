import {  SlidersHorizontal } from "lucide-react";
import SearchBarMenu from "../components/User Menu/SearchBarMenu";
import CategoryMenu from "../components/User Menu/CategoryMenu";
import MainMenu from "../components/User Menu/MainMenu";


const UserMenu = () => {
  return (
    <div className=" h-screen px-4 flex flex-col  gap-4 py-1 bg-[#f4f4f6]">
      <div className="flex flex-col gap-4 items-center bg-white px-4 py-4 rounded-2xl">
        <SearchBarMenu />
        <div className="flex items-center justify-between w-full">
          <div className="  flex flex-col items-start ">
            <h1 className="text-sm font-semibold text-gray-600">Table Number: 2</h1>
            <p className="text-sm text-orange-400"> Please Add items in Cart</p>
          </div>
          <div className=" flex justify-center items-center rounded-2xl h-15 w-15 bg-[#f4f4f6]"> <SlidersHorizontal />  </div>
        </div>
      </div>

      <CategoryMenu />
      <MainMenu />
    </div>
  );
};

export default UserMenu;
