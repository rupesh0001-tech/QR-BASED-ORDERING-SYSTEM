import { useState } from "react";
import {
  LayoutDashboard,
  MessageCircle,
  Users,
  ShoppingBag,
  FileText,
  Send,
  Settings,
} from "lucide-react";
import MenuItem from "./AdminDashboardMenuItem";
import MenuDropdown from "./AdminDashboardMenuDropdown";

const AdminDashboardSideBar = () => {
  const [openMenus, setOpenMenus] = useState({
    discuss: false,
    crm: false,
    sales: false,
    email: false,
  });

  const toggleMenu = (key: keyof typeof openMenus) => {
    setOpenMenus((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <aside className="w-64 h-screen bg-[#0f1624] text-gray-300 flex flex-col">
      {/* Profile */}
      <div className="p-4 flex items-center gap-3">
        <div className="w-10 h-10 bg-purple-500 rounded-full" />
        <div className="text-white font-semibold text-sm">Username</div>
      </div>

      {/* Search */}
      <div className="px-4">
        <input
          type="text"
          placeholder="Search"
          className="w-full px-3 py-2 bg-[#1b2333] rounded-md text-sm text-gray-200 focus:outline-none"
        />
      </div>

      {/* MENU ITEMS */}
      <nav className="mt-4 flex-1 overflow-y-auto text-sm">
        {/* Dashboard */}
        <MenuItem icon={<LayoutDashboard size={18} />} label="Dashboard" />

        {/* Discuss */}
        <MenuDropdown
          icon={<MessageCircle size={18} />}
          label="Discuss"
          isOpen={openMenus.discuss}
          onClick={() => toggleMenu("discuss")}
          items={["Chat", "Forum"]}
        />

        {/* CRM */}
        <MenuDropdown
          icon={<Users size={18} />}
          label="CRM"
          isOpen={openMenus.crm}
          onClick={() => toggleMenu("crm")}
          items={["Customers", "Leads"]}
        />

        {/* Sales */}
        <MenuDropdown
          icon={<ShoppingBag size={18} />}
          label="Sales"
          isOpen={openMenus.sales}
          onClick={() => toggleMenu("sales")}
          items={["Orders", "Reports"]}
        />

        {/* Invoice */}
        <MenuItem icon={<FileText size={18} />} label="Invoice" />

        {/* Email Marketing */}
        <MenuDropdown
          icon={<Send size={18} />}
          label="Email Marketing"
          isOpen={openMenus.email}
          onClick={() => toggleMenu("email")}
          items={["Campaigns", "Templates"]}
        />

        {/* Settings */}
        <MenuItem icon={<Settings size={18} />} label="Settings" />
      </nav>

      {/* Bottom User */}
      <div className="p-4 border-t border-gray-700 flex items-center gap-3">
        <div className="w-10 h-10 bg-gray-500 rounded-full" />
        <div>
          <p className="text-white text-sm">Darrell Steward</p>
          <p className="text-gray-400 text-xs">Admin</p>
        </div>
      </div>
    </aside>
  );
};

export default AdminDashboardSideBar;
