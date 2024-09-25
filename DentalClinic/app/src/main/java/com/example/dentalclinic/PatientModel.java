package com.example.dentalclinic;

public class PatientModel {
    private String patientId;
    private String patientName;
    private String patientAddress;
    private String patientPhoneNumber;

    public String getId() {
        return patientId;
    }

    public void setId(String id) {
        patientId = id;
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
