package com.DentalClinicManagement.Service.service.impl;

import com.DentalClinicManagement.Service.exception.ResourceNotFoundException;
import com.DentalClinicManagement.Service.model.Patient;
import com.DentalClinicManagement.Service.repository.PatientRepository;
import com.DentalClinicManagement.Service.service.PatientService;
import org.springframework.boot.context.config.ConfigDataResourceNotFoundException;
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
    public String updatePatientInfo(Long patientId, Patient updatedPatient) {
       Patient patient = patientRepository.findById(patientId).orElseThrow(
                () -> new ResourceNotFoundException("Patient is not exist with give id" + patientId)
        );

       patient.setPatientFirstName(updatedPatient.getPatientFirstName());
       patient.setPatientLastName(updatedPatient.getPatientLastName());
       patient.setPatientAge(updatedPatient.getPatientAge());
       patient.setPatientAddress(updatedPatient.getPatientAddress());
       patient.setPatientGender(updatedPatient.getPatientGender());
       patient.setPatientPhoneNumber(updatedPatient.getPatientPhoneNumber());
       patient.setMedicalHistory(updatedPatient.getMedicalHistory());
       patient.setPatientRegistrationDate(updatedPatient.getPatientRegistrationDate());

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
