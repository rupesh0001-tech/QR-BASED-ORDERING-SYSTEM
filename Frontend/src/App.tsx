import { Route, Routes } from "react-router-dom"
import AdminLogin from "./pages/AdminLogin"



const App = () => {
  return (
    <Routes>
      <Route path="/admin/login" element={<AdminLogin />} />
    </Routes>
  )
}

export default App