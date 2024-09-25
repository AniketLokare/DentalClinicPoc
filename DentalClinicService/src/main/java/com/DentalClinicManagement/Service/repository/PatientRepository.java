package com.DentalClinicManagement.Service.repository;

import com.DentalClinicManagement.Service.model.Patient;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PatientRepository extends JpaRepository<Patient, Long> {
}
