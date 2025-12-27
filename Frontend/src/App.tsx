import { Route, Routes } from "react-router-dom"
import AdminLogin from "./features/admin-login/pages/AdminLogin"
import AdminDashboard from "./features/admin-dashboard/pages/AdminDashboard"
import UserMenu from "./features/user-menu/pages/UserMenu"
import OrderComplete from "./features/order-waiting/pages/OrderComplete"



const App = () => {
  return (
    <Routes>
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
      <Route path="/:tableId/menu" element={<UserMenu />} />
      <Route path="/order/:order_id" element={<OrderComplete /> } />
    </Routes>
  )
}

export default App