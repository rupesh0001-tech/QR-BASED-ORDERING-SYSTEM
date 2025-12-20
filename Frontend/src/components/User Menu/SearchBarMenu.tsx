import { MagnetIcon, Search } from "lucide-react";

const SearchBarMenu = () => {
  return (
    <div className="flex bg-[#f4f4f6] items-center  pl-4 gap-2 h-[46px] rounded-2xl overflow-hidden max-w-md w-full">
      <Search color="gray" />
      <input
        type="text"
        placeholder="Search"
        className="w-full h-full outline-none text-gray-500  placeholder-gray-500 text-sm"
      />
    </div>
  );
};

export default SearchBarMenu;
