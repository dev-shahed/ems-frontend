// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getEmployee } from "../../services/EmployeeService";
import IsEmpty from "../common/IsEmpty";
import EmployeeTable from "./EmployeeTable";
import Skeleton from "./Skeleton";

export default function EmployeeList() {
  const [employee, setEmployee] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const navigator = useNavigate();

  console.log(employee)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await getEmployee();
        setEmployee(response.data);
      } catch (error) {
        console.error("Error fetching employee data:", error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  //Implement logic for adding a new employee
  const handleAddEmployee = () => {
    navigator("add-employee");
  };

  return (
    <>
      <div className="container mx-auto mt-8 max-w-7xl mb-28">
        <div className="flex flex-col items-center justify-between mb-2 sm:flex-row">
          <h1 className="mb-2 text-xl font-bold sm:text-2xl lg:text-3xl decoration-gray-400 sm:mb-0">
            Employee List
          </h1>
          <button
            className="px-4 py-2 text-sm text-white bg-green-600 rounded-md sm:text-base lg:text-lg hover:bg-green-500 sm:px-3 sm:py-2"
            onClick={() => handleAddEmployee()}
          >
            Add Employee
          </button>
        </div>

        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
            <div className="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
              <table className="min-w-full">
                <thead>
                  <tr>
                    {["ID", "First Name", "Last Name", "Email", "Action"].map(
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
                  {employee.length <= 0 && !isLoading ? (
                    <IsEmpty terms={"No Employee Exists!"} />
                  ) : (
                    isLoading
                  )}
                </thead>

                {isLoading ? (
                  <Skeleton />
                ) : (
                  <EmployeeTable
                    employees={employee}
                    setEmployee={setEmployee}
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
