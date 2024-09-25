package com.DentalClinicManagement.Service.service.impl;

import com.DentalClinicManagement.Service.model.Patient;
import com.DentalClinicManagement.Service.repository.PatientRepository;
import com.DentalClinicManagement.Service.service.PatientService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PatientServiceImpl implements PatientService{

    PatientRepository patientRepository;

    public PatientServiceImpl(PatientRepository patientRepository) {
        this.patientRepository = patientRepository;
    }

    @Override
    public String createPatientInfo(Patient patient) {
        patientRepository.save(patient);
        return "Success";
    }

    @Override
    public String updatePatientInfo(Patient patient) {
        patientRepository.save(patient);
        return "Success";
    }

    @Override
    public String deletePatientInfo(Long patientId) {
        patientRepository.deleteById(patientId);
        return "success";
    }

    @Override
    public Patient getPatientInfo(Long patientId) {
        return patientRepository.findById(patientId).get();
    }

    @Override
    public List<Patient> getAllPatientInfo() {
        return patientRepository.findAll();
    }
}
