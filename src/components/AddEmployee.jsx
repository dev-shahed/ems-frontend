import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import {
  createEmployee,
  getEmployeeById,
  updateEmployee,
} from "../services/EmployeeService";

const Input = ({ label, name, type, placeholder, onChange, value }) => (
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
      value={value}
      required
    />
  </div>
);

export default function AddEmployee() {
  const navigator = useNavigate();
  const { id: employeeId } = useParams();
  const [isUpdate, setIsUpdate] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        if (employeeId) {
          const response = await getEmployeeById(employeeId);
          if (response.status == 200) {
            setFormData(response.data);
            setIsUpdate(true);
          }
        }
      } catch (res) {
        //alert();
      }
    };
    fetchEmployee();
  }, []);

  const saveEmployee = async (e) => {
    const ACTION = isUpdate ? "Updated" : "Created";
    e.preventDefault();
    try {
      const response = isUpdate
        ? await updateEmployee(employeeId, formData)
        : await createEmployee(formData);
      if ((response.status == 200) | 201) {
        Swal.fire({
          position: "top",
          icon: "success",
          title: `Employee ${ACTION} successfully`,
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          navigator("/");
        });
      }
    } catch (error) {
      console.error(`Error ${ACTION} employee: `, error);
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen pt-6 bg-gray-100 sm:justify-center sm:pt-0">
      <div className="px-6 py-8 mt-6 overflow-hidden bg-white rounded-lg lg:max-w-4xl">
        <div className="mb-4">
          <h1 className="font-serif text-2xl font-bold text-gray-800">
            {isUpdate ? "Updating" : "Adding"} an Employee
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
                {isUpdate ? "Update" : "Save"}
              </button>

              <button
                type="button"
                onClick={() => navigator("/")}
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
