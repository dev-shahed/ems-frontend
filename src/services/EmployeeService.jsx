import axios from "axios";

const rootElement = document.getElementById("root");
const REST_API_BASE_URL = import.meta.env.DEV
  ? import.meta.env.VITE_API_URL_LOCAL
  : import.meta.env.VITE_API_URL_PROD;

//https://ems-backend-zlww.onrender.com
// const REST_API_BASE_URL = "https://ems-backend-zlww.onrender.com/api/employees";
// const REST_API_BASE_URL = "http://localhost:8080/api/employees";

//get all employee..
export const getEmployee = () => axios.get(REST_API_BASE_URL);

//add an employee.
export const createEmployee = (employee) =>
  axios.post(REST_API_BASE_URL, employee);

// Get employee by id and update it.

//Delete an employee...
export const deleteEmployeeById = (employeeId) =>
  axios.delete(`${REST_API_BASE_URL}/${employeeId}`);
