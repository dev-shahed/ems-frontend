import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const tabs = [
    { label: "Employee", path: "/employee" },
    { label: "Department", path: "/department" },
    // Add more tabs as needed
  ];

  return (
    <nav className="w-1/4 h-full p-4 bg-gray-800">
      <div className="mb-4 text-xl font-bold text-white">Sidebar</div>
      <ul>
        {tabs.map((tab) => (
          <li key={tab.label} className="mb-2">
            <Link
              to={tab.path}
              className="text-white transition duration-300 hover:text-gray-300"
            >
              {tab.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
