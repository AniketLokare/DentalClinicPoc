package com.DentalClinicManagement.Service;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class DentalClinicService {

	public static void main(String[] args) {

		SpringApplication.run(DentalClinicService.class, args);
	}

	@Bean
	public OpenAPI SwaggerConfiguration(){
		return new OpenAPI()
				.info(new Info().title("Dental Clinic")
						.version("1..0")
						.description("API documentation for dental clinic"));
	}
}
