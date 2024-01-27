import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/common/Footer";
import Navbar from "./components/common/Navbar";
import AddDepartment from "./components/department/AddDepartment";
import Department from "./components/department/Department";
import AddEmployee from "./components/employee/AddEmployee";
import EmployeeList from "./components/employee/EmployeeList";
export default function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<EmployeeList />} />
          <Route path="add-employee" element={<AddEmployee />} />
          <Route path="update-employee/:id" element={<AddEmployee />} />
          <Route path="update-department/:id" element={<AddDepartment />} />
        </Routes>
        <Routes>
          <Route path="employees/*" element={<EmployeeRoutes />} />
          <Route path="departments/*" element={<DepartmentRoutes />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Fragment>
  );

  // Route for Employee
  function EmployeeRoutes() {
    return (
      <Routes>
        <Route path="/" element={<EmployeeList />} />
        <Route  path="add-employee" element={<AddEmployee />} />
        <Route path="update-employee/:id" element={<AddEmployee />} />
      </Routes>
    );
  }


  //Route for Department..
  function DepartmentRoutes() {
    return (
      <Routes>
        <Route path="/" element={<Department />} />
        <Route path="add-department" element={<AddDepartment />} />
        <Route path="update-department/:id" element={<AddDepartment />} />
      </Routes>
    );
  }
}
