import axios from "axios";
//https://ems-backend-zlww.onrender.com
const REST_API_BASE_URL = "https://ems-backend-zlww.onrender.com/api/employees";
export const getEmployee = () => axios.get(REST_API_BASE_URL);
// Get employee by id