interface IAdminDashBoardOrder{
    Number : number,
    Title : string
}

const AdminDashBoardSmallBox = ({Number, Title} : IAdminDashBoardOrder) => {
  return (
    <div className=" bg-white flex flex-col gap-2 rounded-2xl h-37 w-70 justify-start items-start px-4 py-4 ">
        <h1 className="text-7xl font-bold text-[#32353f]">{ Number} </h1>
        <h3 className=" text-[#7f8192] text-xl font-bold ">{Title}</h3>
    </div>
  )
}

export default AdminDashBoardSmallBox