import {  SlidersHorizontal } from "lucide-react";
import SearchBarMenu from "../components/UserMenuSearchBarMenu";
import CategoryMenu from "../components/UserMenuCategoryMenu";
import MainMenu from "../components/UserMenuMainMenu";
import { useEffect, useState } from "react";


const UserMenu = () => {
  let [noScroll, setNoScroll] = useState<Boolean>(false);
  
  

  useEffect(() => {
    if(noScroll){
      document.body.style.overflow = 'hidden'
      document.documentElement.style.overflow = "hidden";
    }else{
      document.body.style.overflow = 'auto'
      document.documentElement.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = 'auto'
      document.documentElement.style.overflow = "auto";
    }
  }, [noScroll])
  return (
    <div className= {` min-h-screen px-4 flex flex-col  gap-4 py-1 bg-[#f4f4f6] ${noScroll? "overflow-hidden" : ""}`}>
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
      <MainMenu setNoScroll={setNoScroll} />

    </div>
  );
};

export default UserMenu;
