import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { deleteEmployeeById } from "../../services/EmployeeService";

const TableCell = ({ children, className }) => (
  <td className={`px-6 py-4 ${className}`}>
    <div className="flex items-center justify-center">{children}</div>
  </td>
);

const ActionCell = ({ children, type, iconClassName, onClick }) => (
  <td className="text-sm font-medium leading-5 text-center whitespace-no-wrap border-b border-gray-200">
    <button
      type={type}
      onClick={onClick}
      className={`text-indigo-600 hover:text-indigo-900 ${iconClassName}`}
    >
      {children}
    </button>
  </td>
);

export default function EmployeeTable({ employees, setEmployee }) {
  const navigator = useNavigate();
  //handle delete an employee
  const handleDelete = ({ emp }) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteEmployeeById(emp.id)
          .then((res) => {
            // Show a success message after successful deletion
            Swal.fire({
              title: "Deleted!",
              text: res.data.message,
              icon: "success",
            });
            //updating state..
            setEmployee((prevEmployees) =>
              prevEmployees.filter((e) => e.id !== emp.id)
            );
          })
          .catch((res) => {
            // Handle error if deletion fails
            Swal.fire({
              title: "Error",
              text: res.data.error,
              icon: "error",
            });
          });
      }
    });
  };

  return (
    <tbody className="bg-white">
      {employees.map((emp) => (
        <tr key={emp.id} className="odd:bg-gray-200 even:bg-gray-100">
          <TableCell>{emp.id}</TableCell>
          <TableCell className="text-sm leading-5 text-gray-900">
            {emp.firstName}
          </TableCell>
          <TableCell className="text-sm leading-5 text-gray-900">
            {emp.lastName}
          </TableCell>
          <TableCell className="text-sm leading-5 text-gray-500">
            {emp.email}
          </TableCell>
          <ActionCell>
            <div className="flex items-center justify-center gap-6">
              <Link to={`/update-employee/${emp.id}`}
                type="button"
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
              </Link>

              <button
                type="button"
                className="text-red-600 hover:text-red-800"
                onClick={() => handleDelete({ emp })}
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
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </button>
            </div>
          </ActionCell>
        </tr>
      ))}
    </tbody>
  );
}
