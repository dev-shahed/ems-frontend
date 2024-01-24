import axios from "axios";

let REST_API_BASE_URL;
if (import.meta.env.VITE_APP_ENV === "local") {
  REST_API_BASE_URL = import.meta.env.VITE_API_URL_LOCAL;
} else {
  REST_API_BASE_URL = import.meta.env.VITE_API_URL_PROD;
}

console.log(REST_API_BASE_URL);

//get all employee..
export const getEmployee = () => axios.get(REST_API_BASE_URL);

//add an employee.
export const createEmployee = (employee) =>
  axios.post(REST_API_BASE_URL, employee);

// Get employee by id and update it.

//Delete an employee...
export const deleteEmployeeById = (employeeId) =>
  axios.delete(`${REST_API_BASE_URL}/${employeeId}`);
