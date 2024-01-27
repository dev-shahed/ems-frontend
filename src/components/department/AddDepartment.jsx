import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import {
    createDep,
    getDepById,
    updateDep,
} from "../../services/DepartmentService";

const inputStyle =
  "block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-100 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500";

export default function AddDepartment() {
  const { id: depId } = useParams();
  const navigator = useNavigate();
  const [isUpdate, setIsUpdate] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  //fetching all existing dep by id for update this data.
  useEffect(() => {
    const fetchDepartment = async () => {
      try {
        if (depId) {
          const response = await getDepById(depId);
          console.log(response);
          setFormData(response.data);
          setIsUpdate(true);
        }
      } catch (response) {
        alert(response.data.message);
      }
    };
    fetchDepartment();
  }, [depId]);

  //create a department or save the updated data..
  const saveDepartment = async (e) => {
    const ACTION = isUpdate ? "Updated" : "Created";
    e.preventDefault();
    try {
      const response = isUpdate
        ? await updateDep(depId, formData)
        : await createDep(formData);
      if ((response.status == 200) | 201) {
        Swal.fire({
          position: "top",
          icon: "success",
          title: `Department ${ACTION} successfully`,
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          navigator("/departments");
        });
      }
    } catch (error) {
      console.error(`Error ${ACTION} Department: `, error);
    }
  };

  return (
    <>
      <div className="max-w-sm mx-auto bg-white p-6 mt-10 rounded-md shadow-md">
        <div className="mb-4">
          <h1 className="font-serif text-xl font-bold text-gray-800 sm:text-2xl md:text-3xl">
            {isUpdate ? "Updating" : "Adding"} a Department
          </h1>
        </div>
        <form onSubmit={saveDepartment}>
          <div className="mb-5">
            <label
              htmlFor="departmentName"
              className="block mb-2 text-sm font-medium"
            >
              Department Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              placeholder="Department Name"
              className={`${inputStyle}`}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="description"
              className="block mb-2 text-sm font-medium"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              rows="4"
              className={`${inputStyle}`}
              placeholder="Department Description..."
              onChange={handleInputChange}
              required
            ></textarea>
          </div>
          <div className="flex justify-between">
            <button
              type="submit"
              className="px-4 py-2 text-sm font-semibold text-white bg-indigo-500 rounded-md shadow-md sm:px-6 md:text-base hover:bg-indigo-700 focus:outline-none focus:border-indigo-900 focus:ring ring-indigo-300"
            >
              Save
            </button>
            <button
              type="button"
              className="px-4 py-2 text-sm font-semibold text-gray-800 bg-gray-200 rounded-md shadow-md sm:px-6 md:text-base hover:bg-gray-300 focus:outline-none focus:border-indigo-900 focus:ring ring-indigo-300"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
