"use client"
import { useState, ReactNode } from "react";
import { Home, FolderKanban, ListTodo, Settings, ChevronLeft, ChevronRight } from "lucide-react";

interface MenuItem {
  name: string;
  icon: ReactNode;
}

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const menuItems: MenuItem[] = [
    { name: "Dashboard", icon: <Home className="w-5 h-5" /> },
    { name: "Projects", icon: <FolderKanban className="w-5 h-5" /> },
    { name: "Issues", icon: <ListTodo className="w-5 h-5" /> },
    { name: "Settings", icon: <Settings className="w-5 h-5" /> },
  ];

  return (
    <div
      className={`h-screen bg-gray-900 text-white flex flex-col transition-all duration-300 
      ${collapsed ? "w-16" : "w-56"} shadow-lg`}
    >
      {/* Sidebar Header */}
      <div className="flex items-center justify-between p-3 border-b border-gray-800">
        {!collapsed && <span className="font-bold">Workspace</span>}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-1 rounded hover:bg-gray-800"
        >
          {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </button>
      </div>

      {/* Menu */}
      <div className="flex-1 p-2">
        {menuItems.map((item: MenuItem, idx: number) => (
          <div
            key={idx}
            className="flex items-center gap-3 p-2 rounded-lg cursor-pointer hover:bg-gray-800"
          >
            {item.icon}
            {!collapsed && <span>{item.name}</span>}
          </div>
        ))}
      </div>

      {/* Footer (User Info) */}
      <div className="p-3 border-t border-gray-800">
        <div className="flex items-center gap-3">
          <img
            src="https://i.pravatar.cc/40"
            alt="user"
            className="w-8 h-8 rounded-full"
          />
          {!collapsed && <span className="text-sm">John Doe</span>}
        </div>
      </div>
    </div>
  );
}
