import React, { useEffect, useState } from "react";
import { fetchPatients } from "../../api/patientApi";
import { useNavigate } from "react-router-dom";
import PatientTable from "./PatientTable";

const PatientList = () => {
  const [patients, setPatients] = useState([]);
  const navigator = useNavigate();

  useEffect(() => {
    getAllPatients();
  }, []);

  const getAllPatients = () => {
    fetchPatients()
      .then((response) => {
        setPatients(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  function adddNewPatient() {
    navigator("/register-patient");
  }

  return (
    <>
      {/* <button onClick={adddNewPatient}>Register patient</button> */}
      <PatientTable patients={patients} refreshPatients={getAllPatients} />
    </>
  );
};

export default PatientList;
