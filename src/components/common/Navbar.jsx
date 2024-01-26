import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const tabs = [
    { label: "Home", path: "/" },
    { label: "Employee", path: "/employees" },
    { label: "Department", path: "/departments" },

    // Add more tabs as needed
  ];

  return (
    <nav className="p-4 bg-gray-800 p-4 sticky top-0 z-50 bg-gray-800">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-white">Navbar</div>
          <ul className="flex">
            {tabs.map((tab) => (
              <li key={tab.label} className="mr-4">
                <Link
                  to={tab.path}
                  className="text-white transition duration-300 hover:text-gray-300"
                >
                  {tab.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
