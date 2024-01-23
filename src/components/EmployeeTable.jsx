import React from "react";

const TableCell = ({ children, className }) => (
  <td className={`px-6 py-4 ${className}`}>
    <div className="flex items-center justify-center">{children}</div>
  </td>
);

const ActionCell = ({ children, href, iconClassName }) => (
  <td className="text-sm font-medium leading-5 text-center whitespace-no-wrap border-b border-gray-200">
    <a
      href={href}
      className={`text-indigo-600 hover:text-indigo-900 ${iconClassName}`}
    >
      {children}
    </a>
  </td>
);

export default function EmployeeTable({ employees }) {
  return (
    <tbody className="bg-white">
      {employees.map((emp) => (
        <tr key={emp.id} className={emp.id % 2 === 0 ? "bg-gray-100" : "bg-gray-200"}>
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
              <a href="#" className="text-indigo-600 hover:text-indigo-900">
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

              <a href="#" className="text-red-600 hover:text-red-800">
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
              </a>
            </div>
          </ActionCell>
        </tr>
      ))}
    </tbody>
  );
}
