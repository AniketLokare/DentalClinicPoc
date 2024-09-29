import React from "react";
import PatientRegistrationForm from "../../components/patient/PatientRegistrationForm";
import { useParams } from "react-router-dom";
import Patient from "./Patient";

const RegisterPatientPage = () => {
  const { id } = useParams();

  function pageTitle() {
    if (id) {
      return <h2 className="mb-4">Update Patient</h2>;
    } else {
      return <h2 className="mb-4">Register New Patient</h2>;
    }
  }

  return (
    <div>
      <Patient></Patient>
      {pageTitle()}
      <PatientRegistrationForm />
    </div>
  );
};

export default RegisterPatientPage;
