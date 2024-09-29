import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { deletePatient } from "../../api/patientApi";
import { PencilSquare, Trash } from "react-bootstrap-icons"; // Icons
import ReactPaginate from "react-paginate"; // Pagination

const PatientTable = ({ patients, refreshPatients }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortedField, setSortedField] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");
  const [currentPage, setCurrentPage] = useState(0);
  const [patientsPerPage] = useState(5);

  const navigator = useNavigate();

  function updatePatient(id) {
    navigator(`/update-patient/${id}`);
  }

  function removePatient(id) {
    deletePatient(id)
      .then((response) => {
        refreshPatients();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const sortData = (field) => {
    const order = sortedField === field && sortOrder === "asc" ? "desc" : "asc";
    setSortedField(field);
    setSortOrder(order);
  };

  // Filter patients by search term
  const filteredPatients = patients.filter((patient) =>
    Object.values(patient).some((val) =>
      String(val).toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  // Sort patients based on sortedField and sortOrder
  const sortedPatients = [...filteredPatients].sort((a, b) => {
    if (a[sortedField] < b[sortedField]) {
      return sortOrder === "asc" ? -1 : 1;
    }
    if (a[sortedField] > b[sortedField]) {
      return sortOrder === "asc" ? 1 : -1;
    }
    return 0;
  });

  // Pagination logic
  const indexOfLastPatient = (currentPage + 1) * patientsPerPage;
  const indexOfFirstPatient = indexOfLastPatient - patientsPerPage;
  const currentPatients = sortedPatients.slice(
    indexOfFirstPatient,
    indexOfLastPatient
  );

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <>
      <div className="d-flex justify-content-between mb-3">
        <h3 className="text-primary">Patient List</h3>
        <input
          type="text"
          className="form-control w-25"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <table className="table table-striped table-hover table-bordered">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col" onClick={() => sortData("patientFirstName")}>
              First Name{" "}
              {sortedField === "patientFirstName" &&
                (sortOrder === "asc" ? "↑" : "↓")}
            </th>
            <th scope="col" onClick={() => sortData("patientLastName")}>
              Last Name{" "}
              {sortedField === "patientLastName" &&
                (sortOrder === "asc" ? "↑" : "↓")}
            </th>
            <th scope="col" onClick={() => sortData("patientAge")}>
              Age{" "}
              {sortedField === "patientAge" &&
                (sortOrder === "asc" ? "↑" : "↓")}
            </th>
            <th scope="col">Mobile No.</th>
            <th scope="col">Gender</th>
            <th scope="col">Address</th>
            <th scope="col">Medical History</th>
            <th scope="col">Registration Date</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentPatients.map((patient) => (
            <tr key={patient.patientId}>
              <td>{patient.patientId}</td>
              <td>{patient.patientFirstName}</td>
              <td>{patient.patientLastName}</td>
              <td>{patient.patientAge}</td>
              <td>{patient.patientPhoneNumber}</td>
              <td>{patient.patientGender}</td>
              <td>{patient.patientAddress}</td>
              <td>{patient.medicalHistory}</td>
              <td>{patient.patientRegistrationDate}</td>
              <td>
                <button
                  className="btn btn-light"
                  onClick={() => updatePatient(patient.patientId)}
                >
                  <PencilSquare size={20} />
                </button>
                &nbsp;
                <button
                  className="btn btn-light"
                  onClick={() => removePatient(patient.patientId)}
                >
                  <Trash size={20} className="text-danger" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Component */}
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        breakLabel={"..."}
        pageCount={Math.ceil(filteredPatients.length / patientsPerPage)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={"pagination justify-content-center"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      />
    </>
  );
};

export default PatientTable;
