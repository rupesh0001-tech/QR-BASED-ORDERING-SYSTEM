import { useState } from "react";
import {
  LayoutDashboard,
  MessageCircle,
  CreditCard,
  Users,
  Diamond,
  ShoppingBag,
  FileText,
  Send,
  Settings,
  ChevronDown
} from "lucide-react";

const AdminDashboardSideBar = () => {
  const [openMenus, setOpenMenus] = useState({
    discuss: false,
    crm: false,
    sales: false,
    email: false,
  });

  const toggleMenu = (key: string) => {
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
          items={["Chat", "Teams", "Announcements"]}
        />

        {/* Subscription */}
        <MenuItem icon={<CreditCard size={18} />} label="Subscription" />

        {/* Contact */}
        <MenuItem icon={<Users size={18} />} label="Contact" />

        {/* CRM */}
        <MenuDropdown
          icon={<Diamond size={18} />}
          label="CRM"
          isOpen={openMenus.crm}
          onClick={() => toggleMenu("crm")}
          items={["Leads", "Clients", "Pipeline"]}
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

/* ----- Components ----- */

const MenuItem = ({
  icon,
  label,
}: {
  icon: JSX.Element;
  label: string;
}) => (
  <div className="px-4 py-2 hover:bg-[#1b2333] cursor-pointer flex items-center gap-3">
    {icon}
    <span>{label}</span>
  </div>
);

const MenuDropdown = ({
  icon,
  label,
  isOpen,
  onClick,
  items,
}: {
  icon: JSX.Element;
  label: string;
  isOpen: boolean;
  onClick: () => void;
  items: string[];
}) => (
  <div className="">
    <div
      onClick={onClick}
      className="px-4 py-2 hover:bg-[#1b2333] cursor-pointer flex justify-between items-center"
    >
      <div className="flex items-center gap-3">
        {icon}
        <span>{label}</span>
      </div>
      <ChevronDown
        className={`transition-transform duration-200 ${
          isOpen ? "rotate-180" : ""
        }`}
        size={16}
      />
    </div>

    {isOpen && (
      <div className="ml-10 mt-1 space-y-1">
        {items.map((item, index) => (
          <div
            key={index}
            className="py-1 text-gray-400 hover:text-white cursor-pointer"
          >
            {item}
          </div>
        ))}
      </div>
    )}
  </div>
);

export default AdminDashboardSideBar;
