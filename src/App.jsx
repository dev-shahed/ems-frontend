import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddEmployee from "./components/AddEmployee";
import EmployeeList from "./components/EmployeeList";
export default function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<EmployeeList />}></Route>
        </Routes>
        <Routes>
          <Route path="/add-employee" element={<AddEmployee />}></Route>
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}
