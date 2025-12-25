import React from "react";
import { ChevronDown } from "lucide-react";

interface MenuDropdownProps {
  icon: React.ReactNode;
  label: string;
  isOpen: boolean;
  onClick: () => void;
  items: string[];
}

const MenuDropdown: React.FC<MenuDropdownProps> = ({
  icon,
  label,
  isOpen,
  onClick,
  items,
}) => {
  return (
    <div className="flex flex-col">
      <div
        className="flex items-center justify-between gap-3 p-2 mx-3 rounded-md hover:bg-gray-700 cursor-pointer"
        onClick={onClick}
      >
        <div className="flex items-center gap-3">
          {icon}
          <span className="text-white">{label}</span>
        </div>
        <ChevronDown
          size={18}
          className={`transform transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </div>
      {isOpen && (
        <div className="ml-8 mt-2 flex flex-col gap-1">
          {items.map((item) => (
            <span key={item} className="text-gray-400 hover:text-white cursor-pointer">
              {item}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default MenuDropdown;