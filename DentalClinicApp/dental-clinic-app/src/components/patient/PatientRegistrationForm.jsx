// /src/components/forms/UserForm.jsx
import React, { useEffect, useState } from "react";
import {
  getPatient,
  registerPatient,
  updatePatient,
} from "../../api/patientApi";
import { useNavigate, useParams } from "react-router-dom";
import { convertDateFormat } from "../../utils/dateUtils";

const PatientRegistrationForm = () => {
  const [patientFirstName, setFirstName] = useState("");
  const [patientLastName, setLastName] = useState("");
  const [patientAge, setAge] = useState("");
  const [patientPhoneNumber, setPhoneNumber] = useState("");
  const [patientGender, setGender] = useState("");
  const [patientAddress, setAddress] = useState("");
  const [medicalHistory, setMedicalHistory] = useState("");
  const [patientRegistrationDate, setRegistrationDate] = useState(
    convertDateFormat("01-01-2024")
  );

  const { id } = useParams();
  const navigator = useNavigate();

  const addOrUpdatePatient = (event) => {
    event.preventDefault();
    const patient = {
      patientFirstName,
      patientLastName,
      patientAge,
      patientPhoneNumber,
      patientGender,
      patientAddress,
      medicalHistory,
      patientRegistrationDate,
    };

    if (id) {
      updatePatient(id, patient)
        .then((response) => {
          console.log(response.data);
          navigator("/patients");
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      registerPatient(patient)
        .then((response) => {
          console.log(response.data);
          navigator("/patients");
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  const handleDateChange = (event) => {
    setRegistrationDate(event.target.value);
  };

  const handleCancelBtn = (event) => {
    navigator("/patients");
  };

  useEffect(() => {
    if (id) {
      getPatient(id)
        .then((response) => {
          console.log(response);
          setFirstName(response.data.patientFirstName);
          setLastName(response.data.patientLastName);
          setAge(response.data.patientAge);
          setGender(response.data.patientGender);
          setPhoneNumber(response.data.patientPhoneNumber);
          setAddress(response.data.patientAddress);
          setMedicalHistory(response.data.medicalHistory);
          setRegistrationDate(response.data.patientRegistrationDate);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [id]);

  // Handler function for the onChange event
  const handleOptionChange = (event) => {
    setGender(event.target.value);
  };

  return (
    <div className="container mt-5">
      <form>
        <div className="row mb-3">
          <div className="col-md-6">
            <div className="form-group">
              <label className="form-label">First Name</label>
              <input
                type="text"
                placeholder="Enter First Name"
                name="patientFirstName"
                value={patientFirstName}
                className="form-control"
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label className="form-label">Last Name</label>
              <input
                type="text"
                placeholder="Enter Last Name"
                name="patientLastName"
                value={patientLastName}
                className="form-control"
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-6">
            <div className="form-group">
              <label className="form-label">Age</label>
              <input
                type="number"
                placeholder="Enter Age"
                name="patientAge"
                value={patientAge}
                className="form-control"
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label className="form-label">Gender</label>
              <select
                name="patientGender"
                value={patientGender}
                className="form-control"
                onChange={handleOptionChange}
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-6">
            <div className="form-group">
              <label className="form-label">Address</label>
              <input
                type="text"
                placeholder="Enter Address"
                name="patientAddress"
                value={patientAddress}
                className="form-control"
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label className="form-label">Medical History</label>
              <input
                type="text"
                placeholder="Enter Medical History"
                name="medicalHistory"
                value={medicalHistory}
                className="form-control"
                onChange={(e) => setMedicalHistory(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-6">
            <div className="form-group">
              <label className="form-label">Registration Date</label>
              <input
                type="date"
                name="patientRegistrationDate"
                value={patientRegistrationDate}
                className="form-control"
                onChange={handleDateChange}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <button
              type="button"
              className="btn btn-success"
              onClick={addOrUpdatePatient}
            >
              Save Patient
            </button>
            &nbsp;&nbsp;
            <button
              type="button"
              className="btn btn-secondary"
              onClick={handleCancelBtn}
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PatientRegistrationForm;
