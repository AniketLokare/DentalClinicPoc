import React from "react";
import PatientList from "../../components/patient/PatientList";
import Patient from "./Patient";

const PatientListPage = () => {
  return (
    <div className="grid gap-8">
      <Patient />
      <PatientList />
    </div>
  );
};

export default PatientListPage;
