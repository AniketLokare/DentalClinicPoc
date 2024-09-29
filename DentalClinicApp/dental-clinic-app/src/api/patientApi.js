import apiClient from './apiClient';

const PATIENT_URL = '/api/v1/patient';

export const fetchPatients = () => apiClient.get(PATIENT_URL);

export const registerPatient = (patient) => apiClient.post(PATIENT_URL, patient);

export const getPatient = (patientId) => apiClient.get(PATIENT_URL + "/"+ patientId);

export const updatePatient = (patientId, patient) => apiClient.put(PATIENT_URL + "/"+ patientId, patient);

export const deletePatient = (patientId) => apiClient.delete(PATIENT_URL + "/"+ patientId);