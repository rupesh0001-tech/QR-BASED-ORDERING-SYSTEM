import CategoryItems from "./UserMenuCategoryItems";
import CategoryData from "../../../data/CategoryData";


const CategoryMenu = () => {

  const categoryDataList = CategoryData();

  return (
    <div className="flex flex-col gap-1 items-center bg-white px-4 py-4 rounded-2xl">
      <div className="flex justify-between w-full items-start pb-4 pt-1">
        <h1 className=" text-md font-bold ">Category</h1>
        <h2 className=" text-sm font-semibold text-gray-600 ">See all</h2>
      </div>
      <hr />
      <div className=" flex w-full gap-4 overflow-x-scroll">
        {categoryDataList.map((item) => (
          <CategoryItems
            key={item.title}
            imgurl={item.imgurl}
            title={item.title}
          />
        ))}
      </div>
      
    </div>
  );
};

export default CategoryMenu;
