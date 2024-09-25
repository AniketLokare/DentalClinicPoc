package com.DentalClinicManagement.Service.service;

import com.DentalClinicManagement.Service.model.Patient;

import java.util.List;

public interface PatientService {

    public String createPatientInfo(Patient patient);
    public String updatePatientInfo(Patient patient);
    public String deletePatientInfo(Long patientId);
    public Patient getPatientInfo(Long patientId);
    public List<Patient> getAllPatientInfo();
}
