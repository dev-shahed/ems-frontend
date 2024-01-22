import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EmployeeList from "./components/EmployeeList";
export default function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<EmployeeList />}></Route>
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}
