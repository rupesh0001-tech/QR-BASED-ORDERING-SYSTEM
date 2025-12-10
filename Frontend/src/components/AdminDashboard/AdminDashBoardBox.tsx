import AdminDashBoardBox2 from "./AdminDashBoardBox2";
import AdminDashBoardSmallBox from "./AdminDashBoardSmallBox";
import GraphForSales from "./GraphForSales";

const AdminDashBoardBox = () => {
  return (
    <>
      <div className=" flex flex-col p-4 gap-4 ">
        <div className=" flex w-full  gap-4 ">
          <AdminDashBoardSmallBox Title="RUNNING ORDER" Number={20} />
          <AdminDashBoardSmallBox Title=" ORDER REQUEST" Number={5} />
          <AdminDashBoardSmallBox Title=" COMPLETED " Number={10} />
          <AdminDashBoardBox2
            Title=" Reviews Today "
            Number={1000}
            TitleActionMessage="See All Reviews "
          />
        </div>
        <GraphForSales />
      </div>
    </>
  );
};

export default AdminDashBoardBox;
