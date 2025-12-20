import React from "react";
import CategoryItems from "./CategoryItems";
import CategorySampleData from "../SampleData/CategorySampleData";




// Burgers
// Pizza
// Main Course
// Salad
// Appetizer
// Dessert
// Beverage

const CategoryMenu = () => {

  const CategoryData = CategorySampleData();

  return (
    <div className="flex flex-col gap-1 items-center bg-white px-4 py-4 rounded-2xl">
      <div className="flex justify-between w-full items-start pb-4 pt-1">
        <h1 className=" text-md font-bold ">Category</h1>
        <h2 className=" text-sm font-semibold text-gray-600 ">See all</h2>
      </div>
      <hr />
      <div className=" flex w-full gap-4 overflow-x-scroll">
        {CategoryData.map((item) => (
          <CategoryItems
            key={item.id}
            imgurl={item.imgurl}
            title={item.title}
          />
        ))}
      </div>
      
    </div>
  );
};

export default CategoryMenu;
