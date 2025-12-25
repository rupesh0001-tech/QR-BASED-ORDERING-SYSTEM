interface CategoryItemsI{
    imgurl : string,
    title : string
}

const CategoryItems = ({imgurl, title } : CategoryItemsI) => {
  return (
    <div className=" flex flex-col gap-2">
        <div className=" flex justify-center items-center w-30 h-30 bg-[#fefbe5] rounded-full p-2">
            <img className="w-15 h-15" src={imgurl} alt="" />
        </div>
        <h1 className=" text-md font-bold text-center ">{title}</h1>
    </div>
  )
}

export default CategoryItems