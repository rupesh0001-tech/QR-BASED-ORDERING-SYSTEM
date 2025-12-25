import { Route, Routes } from "react-router-dom"
import AdminLogin from "./features/admin-login/pages/AdminLogin"
import AdminDashboard from "./features/admin-dashboard/pages/AdminDashboard"
import UserMenu from "./features/user-menu/pages/UserMenu"



const App = () => {
  return (
    <Routes>
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
      <Route path="/:tableId/menu" element={<UserMenu />} />
    </Routes>
  )
}

export default App