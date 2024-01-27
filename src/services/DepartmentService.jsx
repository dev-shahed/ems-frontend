import axios from "axios";

const REST_API_BASE_URL = import.meta.env.DEV
  ? import.meta.env.VITE_API_DEPARTMENT_URL_LOCAL
  : import.meta.env.VITE_API_DEPARTMENT_URL_PROD;

export const getAllDepartments = () => axios.get(REST_API_BASE_URL);

//Delete an Department...
export const deleteDepById = (depId) =>
  axios.delete(`${REST_API_BASE_URL}/${depId}`);
