import { Forward } from "lucide-react"

interface IAdminDashBoardOrder{
    Number : number
    Title : string
    TitleActionMessage : string
}

const AdminDashBoardBox2 = ({Number, Title, TitleActionMessage} : IAdminDashBoardOrder) => {
  return (
    <div className=" bg-white flex flex-col gap-1 rounded-2xl h-37 w-90 justify-start items-start px-4 py-4 ">
        <div className="w-full  flex  justify-between ">
            <h3 className=" text-[#7f8192] text-md font-bold " > {Title} </h3>
            <h3 className=" text-orange-400 underline cursor-pointer "> { TitleActionMessage } </h3>
        </div>
        <div className="w-full flex justify-start items-center gap-20 ">
            <h1 className=" text-7xl font-bold  text-[#32353f] " > {Number} </h1>
            <Forward size={60} strokeWidth={3} color={"#32353f"} className=" cursor-pointer" />
        </div>
    </div>
  )
}

export default AdminDashBoardBox2