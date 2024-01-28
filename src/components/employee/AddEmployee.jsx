import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { getAllDepartments } from "../../services/DepartmentService";
import {
  createEmployee,
  getEmployeeById,
  updateEmployee,
} from "../../services/EmployeeService";

const Input = ({
  label,
  name,
  type,
  placeholder,
  onChange,
  value,
  options,
}) => (
  <div className="mt-4">
    <label className="block text-sm font-bold text-gray-700" htmlFor={name}>
      {label}
    </label>
    {type === "select" ? (
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required
        className="block w-full p-2.5 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
      >
        <option selected>Choose a Department</option>
        {options.map((dep) => (
          <option key={dep.id} value={dep.id}>
            {dep.name}
          </option>
        ))}
      </select>
    ) : (
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        className="block w-full px-4 py-2 mt-1 border rounded-md shadow-sm placeholder:text-gray-400 focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        required
      />
    )}
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
    departmentId: "",
  });

  //getting departments to select..
  const [departments, setDepartments] = useState([]);
  useEffect(() => {
    const fetchAllDep = () => {
      try {
        getAllDepartments().then((res) => {
          setDepartments(res.data);
        });
      } catch (error) {
        console.error("error getting departments");
      }
    };
    fetchAllDep();
  }, []);

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
  }, [employeeId]);

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
    <div className="flex flex-col items-center min-h-screen pt-8 bg-gray-100">
      <div className="max-w-4xl px-4 py-8 mt-6 overflow-hidden bg-white rounded-lg sm:px-6 md:px-8">
        <div className="mb-4">
          <h1 className="font-serif text-xl font-bold text-gray-800 sm:text-2xl md:text-3xl">
            {isUpdate ? "Updating" : "Adding"} an Employee
          </h1>
        </div>

        <div className="px-4 py-8 bg-white rounded shadow-md sm:px-6 md:px-8 ring-1 ring-gray-900/10">
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

            <Input
              label="Select a Department"
              name="departmentId"
              type="select"
              options={departments}
              value={formData.departmentId}
              onChange={handleInputChange}
            />
            <div className="flex items-center justify-between mt-6">
              <button
                type="submit"
                className="px-4 py-2 text-sm font-semibold text-white bg-indigo-500 rounded-md shadow-md sm:px-6 md:text-base hover:bg-indigo-700 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300"
              >
                {isUpdate ? "Update" : "Save"}
              </button>

              <button
                type="button"
                onClick={() => navigator("/")}
                className="px-4 py-2 text-sm font-semibold text-gray-800 bg-gray-200 rounded-md shadow-md sm:px-6 md:text-base hover:bg-gray-300 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300"
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
