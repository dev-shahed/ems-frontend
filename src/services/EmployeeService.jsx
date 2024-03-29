import axios from "axios";

const REST_API_BASE_URL = import.meta.env.DEV
  ? import.meta.env.VITE_API_URL_LOCAL
  : import.meta.env.VITE_API_URL_PROD;

//get all employee..
export const getEmployee = () => axios.get(REST_API_BASE_URL);

//add an employee.
export const createEmployee = (employee) =>
  axios.post(REST_API_BASE_URL, employee);

// Get employee by id and update it.
export const getEmployeeById = async (employeeId) => {
  return await axios.get(`${REST_API_BASE_URL}/${employeeId}`);
};

//Delete an employee...
export const deleteEmployeeById = (employeeId) =>
  axios.delete(`${REST_API_BASE_URL}/${employeeId}`);

// update an employee....
export const updateEmployee = (employeeId, updatedEmployee) =>
  axios.put(`${REST_API_BASE_URL}/${employeeId}`, updatedEmployee);
  
