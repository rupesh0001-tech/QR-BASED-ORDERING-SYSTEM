
import AdminDashboardSideBar from '../components/AdminDashboard/AdminDashBoardSideBar'
import AdminDashboardBox from '../components/AdminDashboard/AdminDashBoardBox'
import GraphForSales from '../components/AdminDashboard/GraphForSales'

const AdminDashboard = () => {
  return (
    <div className=' flex gap-4 bg- bg-[#e7eae9]'>
        <AdminDashboardSideBar />
        <AdminDashboardBox />
        
    </div>
  )
}

export default AdminDashboard