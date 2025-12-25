import React from "react";

interface MenuItemProps {
  icon: React.ReactNode;
  label: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ icon, label }) => {
  return (
    <div className="flex items-center gap-3 p-2 mx-3 rounded-md hover:bg-gray-700 cursor-pointer">
      {icon}
      <span className="text-white">{label}</span>
    </div>
  );
};

export default MenuItem;