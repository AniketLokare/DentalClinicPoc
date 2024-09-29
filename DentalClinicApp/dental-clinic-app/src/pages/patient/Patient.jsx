import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import RegisterPatientPage from "./RegisterPatientPage";
import PatientListPage from "./PatientListPage";

const Patient = () => {
  return (
    <>
      <div className="row">
        <div className="col-sm-2">
          <Link to="/patients" className="text-decoration-none text-secondary">
            PATIENTS
          </Link>
        </div>
        <div className="col-sm-2">
          <Link
            to="/register-patient"
            className="text-decoration-none text-secondary"
          >
            REGISTER PATIENT
          </Link>
        </div>
      </div>
      <hr></hr>
      <div className="p-2">
        <Routes>
          <Route
            path="/register-patient"
            element={<RegisterPatientPage />}
          ></Route>
          <Route path="/patients" element={<PatientListPage />}></Route>
        </Routes>
      </div>
    </>
  );
};

export default Patient;
