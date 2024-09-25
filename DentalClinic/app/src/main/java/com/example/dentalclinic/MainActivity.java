package com.example.dentalclinic;

import android.os.Bundle;
import android.os.Handler;
import android.util.Log;
import android.widget.TextView;

import androidx.activity.EdgeToEdge;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.graphics.Insets;
import androidx.core.view.ViewCompat;
import androidx.core.view.WindowInsetsCompat;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import java.util.List;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

public class MainActivity extends AppCompatActivity {

    private static final String BASE_URL = "http://localhost:8080";

    private TextView patientListTextView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {

        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        patientListTextView = findViewById(R.id.patient_list_text);

        fetchPatients();

    }

    private void fetchPatients() {
        Retrofit retrofit = new Retrofit.Builder()
                .baseUrl("http://10.0.2.2:8080") // Replace with your server's IP
                .addConverterFactory(GsonConverterFactory.create())
                .build();

        PatientApiService apiService = retrofit.create(PatientApiService.class);

        apiService.getPatients().enqueue(new Callback<List<PatientModel>>() {
            @Override
            public void onResponse(Call<List<PatientModel>> call, Response<List<PatientModel>> response) {
                if (response.isSuccessful()) {
                    List<PatientModel> patients = response.body();
                    displayPatients(patients);
                }
            }

            @Override
            public void onFailure(Call<List<PatientModel>> call, Throwable t) {
                Log.e("API Error", t.getMessage());
            }
        });
    }

    private void displayPatients(List<PatientModel> patients) {
        StringBuilder patientListStringBuilder = new StringBuilder();

        for (PatientModel patient : patients) {
            patientListStringBuilder.append("patientName: ").append(patient.getPatientName())
                    .append(", Id: ").append(patient.getId())
                    .append("\n");
        }

        patientListTextView.setText(patientListStringBuilder.toString());
    }
}