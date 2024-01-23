import React, { useState } from "react";

const Input = ({ label, name, type, placeholder, onChange }) => (
  <div className="mt-4">
    <label className="block text-sm font-bold text-gray-700" htmlFor={name}>
      {label}
    </label>
    <input
      className="block w-full px-4 py-2 mt-1 border rounded-md shadow-sm placeholder:text-gray-400 focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
    />
  </div>
);

export default function AddEmployee() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const saveEmployee = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="flex flex-col items-center min-h-screen pt-6 bg-gray-100 sm:justify-center sm:pt-0">
      <div className="px-6 py-8 mt-6 overflow-hidden bg-white rounded-lg lg:max-w-4xl">
        <div className="mb-4">
          <h1 className="font-serif text-2xl font-bold text-gray-800">
            Adding an Employee
          </h1>
        </div>

        <div className="px-6 py-8 bg-white rounded shadow-md ring-1 ring-gray-900/10">
          <form onSubmit={saveEmployee}>
            <Input
              label="First Name"
              name="firstName"
              type="text"
              placeholder="Employee first name"
              value={formData.firstName}
              onChange={handleInputChange}
            />

            <Input
              label="Last Name"
              name="lastName"
              type="text"
              placeholder="Employee last name"
              value={formData.lastName}
              onChange={handleInputChange}
            />

            <Input
              label="Email"
              name="email"
              type="email"
              placeholder="Employee email address"
              value={formData.email}
              onChange={handleInputChange}
            />

            <div className="flex items-center justify-between mt-6">
              <button
                type="submit"
                className="px-6 py-2 text-sm font-semibold text-white bg-indigo-500 rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300"
              >
                Save
              </button>

              <button
                type="button"
                className="px-6 py-2 text-sm font-semibold text-gray-800 bg-gray-200 rounded-md shadow-md hover:bg-gray-300 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
