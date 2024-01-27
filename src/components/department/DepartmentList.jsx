import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllDepartments } from "../../services/DepartmentService";
import DepartmentTable from "./DepartmentTable";
import Skeleton from "./Skeleton";

export default function DepartmentList() {
  const [departments, setDepartments] = useState({});
  const [isLoading, setLoading] = useState(true);
  const navigator = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await getAllDepartments();
        setDepartments(response.data);
      } catch (error) {
        console.error("Error fetching department data:", error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  //Implement logic for adding a new employee
  const handleAddDep = () => {
    navigator("add-department");
  };

  return (
    <>
      <div className="container mx-auto mt-8 max-w-7xl mb-28">
        <div className="flex flex-col items-center justify-between mb-2 sm:flex-row">
          <h1 className="mb-2 text-xl font-bold sm:text-2xl lg:text-3xl decoration-gray-400 sm:mb-0">
            Department List
          </h1>
          <button
            className="px-4 py-2 text-sm text-white bg-green-600 rounded-md sm:text-base lg:text-lg hover:bg-green-500 sm:px-3 sm:py-2"
            onClick={() => handleAddDep()}
          >
            Add Department
          </button>
        </div>

        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
            <div className="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
              <table className="min-w-full">
                <thead>
                  <tr>
                    {["ID", "Department Name", "Department Description", "Action"].map(
                      (header, index) => (
                        <th
                          key={index}
                          className="px-6 py-3 text-xs font-bold tracking-wider text-center text-white uppercase bg-blue-500 border-b border-blue-700"
                        >
                          {header}
                        </th>
                      )
                    )}
                  </tr>
                </thead>

                {isLoading ? (
                  <Skeleton />
                ) : (
                  <DepartmentTable
                    departments={departments}
                    setDepartments={setDepartments}
                  />
                )}
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
