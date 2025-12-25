
import AdminDashboardSideBar from '../components/AdminDashboardSideBar'
import AdminDashboardBox from '../components/AdminDashboardBox'

const AdminDashboard = () => {
  return (
    <div className=' flex gap-4 bg- bg-[#e7eae9]'>
        <AdminDashboardSideBar />
        <AdminDashboardBox />
        
    </div>
  )
}

export default AdminDashboard