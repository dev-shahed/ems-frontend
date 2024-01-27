import axios from "axios";

const REST_API_BASE_URL = import.meta.env.DEV
  ? import.meta.env.VITE_API_DEPARTMENT_URL_LOCAL
  : import.meta.env.VITE_API_DEPARTMENT_URL_PROD;

export const getAllDepartments = () => axios.get(REST_API_BASE_URL);

//Delete an Department...
export const deleteDepById = (depId) =>
  axios.delete(`${REST_API_BASE_URL}/${depId}`);

//get dep by id..
export const getDepById = (depId) => axios.get(`${REST_API_BASE_URL}/${depId}`);

//update a department..
export const updateDep = (depId, updatedDep) =>
  axios.put(`${REST_API_BASE_URL}/${depId}`, updatedDep);

//create a department..
export const createDep = (department) => axios.post(REST_API_BASE_URL, department);
