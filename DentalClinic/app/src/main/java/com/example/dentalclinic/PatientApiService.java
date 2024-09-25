package com.example.dentalclinic;
import java.util.List;

import retrofit2.Call;
import retrofit2.http.GET;

public interface PatientApiService {
    @GET("/patient")
    Call<List<PatientModel>> getPatients();
}
