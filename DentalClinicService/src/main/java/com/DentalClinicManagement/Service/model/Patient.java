package com.DentalClinicManagement.Service.model;

import jakarta.persistence.*;
import org.springframework.format.annotation.DateTimeFormat;

@Entity
@Table(name="patient_info")
public class Patient
{
    @Id
    @Column(name = "patient_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long patientId;

    @Column(name = "patient_fname")
    private String patientFirstName;

    @Column(name = "patient_lname")
    private String patientLastName;

    @Column(name = "patient_age")
    private Integer patientAge;

    @Column(name = "patient_gender")
    private String patientGender;

    @Column(name = "patient_address")
    private String patientAddress;

    @Column(name = "patient_medical_history")
    private String medicalHistory;

    @Column(name = "patient_phone_number")
    private String patientPhoneNumber;

    @Column(name = "patient_registration_date")
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private String patientRegistrationDate;

    public Patient() {
    }

    public Patient(Long patientId, String patientFirstName, String patientLastName, Integer patientAge, String patientGender, String patientAddress, String medicalHistory, String patientPhoneNumber, String patientRegistrationDate) {
        this.patientId = patientId;
        this.patientFirstName = patientFirstName;
        this.patientLastName = patientLastName;
        this.patientAge = patientAge;
        this.patientGender = patientGender;
        this.patientAddress = patientAddress;
        this.medicalHistory = medicalHistory;
        this.patientPhoneNumber = patientPhoneNumber;
        this.patientRegistrationDate = patientRegistrationDate;
    }

    public String getPatientFirstName() {
        return patientFirstName;
    }

    public void setPatientFirstName(String patientFirstName) {
        this.patientFirstName = patientFirstName;
    }

    public String getPatientLastName() {
        return patientLastName;
    }

    public void setPatientLastName(String patientLastName) {
        this.patientLastName = patientLastName;
    }

    public Integer getPatientAge() {
        return patientAge;
    }

    public void setPatientAge(Integer patientAge) {
        this.patientAge = patientAge;
    }

    public String getPatientGender() {
        return patientGender;
    }

    public void setPatientGender(String patientGender) {
        this.patientGender = patientGender;
    }

    public String getMedicalHistory() {
        return medicalHistory;
    }

    public void setMedicalHistory(String medicalHistory) {
        this.medicalHistory = medicalHistory;
    }

    public String getPatientRegistrationDate() {
        return patientRegistrationDate;
    }

    public void setPatientRegistrationDate(String patientRegistrationDate) {
        this.patientRegistrationDate = patientRegistrationDate;
    }

    public Long getPatientId() {
        return patientId;
    }

    public void setPatientId(Long patientId) {
        this.patientId = patientId;
    }

    public String getPatientAddress() {
        return patientAddress;
    }

    public void setPatientAddress(String patientAddress) {
        this.patientAddress = patientAddress;
    }

    public String getPatientPhoneNumber() {
        return patientPhoneNumber;
    }

    public void setPatientPhoneNumber(String patientPhoneNumber) {
        this.patientPhoneNumber = patientPhoneNumber;
    }
}
