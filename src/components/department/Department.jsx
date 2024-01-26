import React, { Fragment } from "react";

const Input = ({ label, name, type, placeholder, onChange, value }) => (
  <div className="mt-4">
    <label className="block text-sm font-bold text-gray-700" htmlFor={name}>
      {label}
    </label>
    <input
      className="block w-full px-4 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  </div>
);

export default function Department() {
  return (
    <Fragment>
      <form className="max-w-sm mx-auto bg-white p-6 mt-10 rounded-md shadow-md">
        <div className="mb-4">
          <h1 className="font-serif text-xl font-bold text-gray-800 sm:text-2xl md:text-3xl">
            Adding a Department
          </h1>
        </div>
        <div className="mb-5">
          <label
            htmlFor="departmentName"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Department Name
          </label>
          <input
            type="text"
            id="departmentName"
            name="departmentName"
            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-100 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="description"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Description
          </label>
          <textarea
            id="description"
            rows="4"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-100 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Leave a comment..."
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
    </Fragment>
  );
}
