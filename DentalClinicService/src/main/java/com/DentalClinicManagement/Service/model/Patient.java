package com.DentalClinicManagement.Service.model;

import jakarta.persistence.*;

@Entity
@Table(name="patient_info")
public class Patient
{
    @Id
    @Column(name = "patient_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long patientId;
    private String patientName;
    private String patientAddress;
    private String patientPhoneNumber;

    public Patient() {
    }

    public Patient(Long patientId, String patientName, String patientAddress, String patientPhoneNumber) {
        this.patientId = patientId;
        this.patientName = patientName;
        this.patientAddress = patientAddress;
        this.patientPhoneNumber = patientPhoneNumber;
    }


    public Long getPatientId() {
        return patientId;
    }

    public void setPatientId(Long patientId) {
        this.patientId = patientId;
    }

    public String getPatientName() {
        return patientName;
    }

    public void setPatientName(String patientName) {
        this.patientName = patientName;
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
