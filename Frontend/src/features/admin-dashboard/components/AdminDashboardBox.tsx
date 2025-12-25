import AdminDashboardBox2 from "./AdminDashboardBox2";
import AdminDashboardSmallBox from "./AdminDashboardSmallBox";
import GraphForItemsSale from "./GraphForItemsSale";
import AdminDashboardUserActivity from "./AdminDashboardUserActivity";

const AdminDashBoardBox = () => {
  return (
    <>
      <div className=" flex flex-col p-4 gap-4 ">
        <div className=" flex w-full  gap-4 ">
          <AdminDashboardSmallBox Title="RUNNING ORDER" Number={20} />
          <AdminDashboardSmallBox Title=" ORDER REQUEST" Number={5} />
          <AdminDashboardSmallBox Title=" COMPLETED " Number={10} />
          <AdminDashboardBox2
            Title=" Reviews Today "
            Number={1000}
            TitleActionMessage="See All Reviews "
          />
        </div>
        <div className=" flex justify-around  mt-4">
          <GraphForItemsSale />
        </div>
        <div>
          <h1> See all User Activity </h1>
          <AdminDashboardUserActivity />
        </div>
      </div>
    </>
  );
};

export default AdminDashBoardBox;
