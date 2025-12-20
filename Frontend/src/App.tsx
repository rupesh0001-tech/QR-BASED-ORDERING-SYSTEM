import { Route, Routes } from "react-router-dom"
import AdminLogin from "./pages/AdminLogin"
import AdminDashboard from "./pages/AdminDashboard"
import UserMenu from "./pages/UserMenu"



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