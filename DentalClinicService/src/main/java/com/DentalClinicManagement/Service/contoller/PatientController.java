package com.DentalClinicManagement.Service.contoller;

import com.DentalClinicManagement.Service.model.Patient;
import com.DentalClinicManagement.Service.service.PatientService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/patient")
@CrossOrigin(origins = "http://127.0.0.1:5500")
public class PatientController
{
    PatientService patientService;

    public PatientController(PatientService patientService) {
        this.patientService = patientService;
    }

    // Read specific Patient
    @GetMapping("{patientId}")
    public Patient getPatient(@PathVariable("patientId") Long patientId)
    {
        return patientService.getPatientInfo(patientId);
    }

    // Read All Patient
    @GetMapping
    public List<Patient> getAllPatient()
    {
        return patientService.getAllPatientInfo();
    }


    @PostMapping
    public String createPatientDetails(@RequestBody Patient patient)
    {
        patientService.createPatientInfo(patient);
        return "patient created successfully";
    }

    @PutMapping
    public String updatePatientDetails(@RequestBody Patient patient)
    {
        patientService.updatePatientInfo(patient);
        return "patient updated successfully";
    }

    @DeleteMapping("{patientId}")
    public String deletePatientDetails(@PathVariable("patientId") Long patientId)
    {
        patientService.deletePatientInfo(patientId);
        return "patient deleted successfully";
    }
}
