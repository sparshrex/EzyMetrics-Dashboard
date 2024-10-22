import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Users, BarChart2, FileText, Menu, X } from 'lucide-react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const navItems = [
    { name: 'Dashboard', icon: LayoutDashboard, path: '/' },
    { name: 'Leads', icon: Users, path: '/leads' },
    { name: 'Analytics', icon: BarChart2, path: '/analytics' },
    { name: 'Reports', icon: FileText, path: '/reports' },
  ];

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
     
      <button
        className="md:hidden fixed top-2 left-2 z-20 bg-indigo-600 text-white p-2 rounded-md"
        onClick={toggleSidebar}
      >
        {isOpen ?<></> : <Menu size={14} />}
      </button>

      {/* Sidebar */}
      <div
        className={`bg-indigo-800 text-white ${
          isOpen ? 'w-64' : 'w-20'
        } space-y-6 py-7 px-2 fixed inset-y-0 left-0 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:relative md:translate-x-0 transition-all duration-300 ease-in-out z-10`}
      >
        <div className="flex items-center justify-between mb-6">
          {isOpen && (
            <h2 className="text-2xl font-semibold text-center">CRM Dashboard</h2>
          )}
          <button
            className="p-2 rounded-full hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            onClick={toggleSidebar}
          >
            {isOpen ? <X size={14} /> : <Menu size={24} />}
          </button>
        </div>
        <nav>
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center space-x-2 py-2.5 px-4 rounded transition duration-200 ${
                  isActive ? 'bg-indigo-700' : 'hover:bg-indigo-700'
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              <item.icon className="h-5 w-5" />
              {isOpen && <span>{item.name}</span>}
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-0 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
