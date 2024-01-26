import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/common/Footer";
import Navbar from "./components/common/Navbar";
import AddEmployee from "./components/employee/AddEmployee";
import EmployeeList from "./components/employee/EmployeeList";
export default function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<EmployeeList />}></Route>
          <Route path="/employees" element={<EmployeeList />}></Route>
        </Routes>
        <Routes>
          <Route path="/add-employee" element={<AddEmployee />} />
          <Route path="/update-employee/:id" element={<AddEmployee />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Fragment>
  );
}
