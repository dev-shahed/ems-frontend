import React from "react";

const inputStyle =
  "block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-100 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500";

export default function AddDepartment() {
  return (
    <>
      <div className="max-w-sm mx-auto bg-white p-6 mt-10 rounded-md shadow-md">
        <div className="mb-4">
          <h1 className="font-serif text-xl font-bold text-gray-800 sm:text-2xl md:text-3xl">
            Adding a Department
          </h1>
        </div>
        <form>
          <div className="mb-5">
            <label
              htmlFor="departmentName"
              className="block mb-2 text-sm font-medium"
            >
              Department Name
            </label>
            <input
              type="text"
              id="departmentName"
              name="departmentName"
              placeholder="Department Name"
              className={`${inputStyle}`}
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
              rows="4"
              className={`${inputStyle}`}
              placeholder="Department Description..."
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
