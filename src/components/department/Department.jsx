import React, { Fragment, useState } from "react";

export default function Department() {
  const [department, setDepartment] =
    useState[
      {
        name: "",
        description: "",
      }
    ];




  const inputStyles =
    "block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-100 focus:ring-blue-500 focus:border-blue-500";
  const labelStyles = "block mb-2 text-sm font-medium text-black";

  const buttonStyles =
    "inline-block px-4 py-2 mr-2 text-sm font-medium text-white rounded-md";
  const submitButtonStyles =
    "bg-green-500 hover:bg-green-600 focus:outline-none focus:ring focus:border-green-300";
  const cancelButtonStyles =
    "bg-red-500 hover:bg-red-600 focus:outline-none focus:ring focus:border-red-300";
  return (
    <Fragment>
      <form className="max-w-sm mx-auto bg-gray-200 p-6 rounded-md shadow-md my-10">
        <div className="text-xl font-bold mb-4 text-center text-indigo-800">
          Add Department
        </div>
        <div className="mb-5">
          <label htmlFor="departmentName" className={labelStyles}>
            Department Name
          </label>
          <input
            type="text"
            id="departmentName"
            name="departmentName"
            className={`${inputStyles} sm:text-md dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="message" className={labelStyles}>
            Description
          </label>
          <textarea
            id="message"
            rows="4"
            className={`${inputStyles} block p-2.5 text-sm dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
            placeholder="Department Descriptions..."
          ></textarea>
        </div>
        <div className="flex justify-between">
          <button
            type="submit"
            className={`${buttonStyles} ${submitButtonStyles}`}
          >
            Submit
          </button>
          <button
            type="button"
            className={`${buttonStyles} ${cancelButtonStyles}`}
          >
            Cancel
          </button>
        </div>
      </form>
    </Fragment>
  );
}
