// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { getEmployee } from "../services/EmployeeService";

export default function EmployeeList() {
  const [employee, setEmployee] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getEmployee();
        setEmployee(response.data);
      } catch (error) {
        console.error("Error fetching employee data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <section>
      <div className="container mx-auto mt-8 max-w-7xl">
        <div className="mb-4">
          <h1 className="font-serif text-3xl font-bold decoration-gray-400">
            Employee List
          </h1>
          <div className="flex justify-end">
            <button className="px-4 py-2 rounded-md bg-sky-500 text-sky-100 hover:bg-sky-600">
              Add New Employee
            </button>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
            <div className="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
              <table className="min-w-full">
                <thead>
                  <tr>
                    <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                      ID
                    </th>
                    <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                      First Name
                    </th>
                    <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                      Last Name
                    </th>
                    <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                      Email
                    </th>
                    <th
                      className="py-3 text-sm text-left text-gray-500 border-b border-gray-200 bg-gray-50"
                      colSpan="2"
                    >
                      Action
                    </th>
                  </tr>
                </thead>

                <tbody className="bg-white">
                  {employee.map((emp) => (
                    <tr key={emp.id}>
                      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        <div className="flex items-center">{emp.id}</div>
                      </td>

                      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        <div className="text-sm leading-5 text-gray-900">
                          {emp.firstName}
                        </div>
                      </td>

                      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        <div className="text-sm leading-5 text-gray-900">
                          {emp.lastName}
                        </div>
                      </td>

                      <td className="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200">
                        <span>{emp.email}</span>
                      </td>

                      <td className="text-sm font-medium leading-5 text-center whitespace-no-wrap border-b border-gray-200 ">
                        <a
                          href="#"
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                            />
                          </svg>
                        </a>
                      </td>
                      <td className="text-sm font-medium leading-5 whitespace-no-wrap border-b border-gray-200 ">
                        <a href="#">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6 text-red-600 hover:text-red-800"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            />
                          </svg>
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
