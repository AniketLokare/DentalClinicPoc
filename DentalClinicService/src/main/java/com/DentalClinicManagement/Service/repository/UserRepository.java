package com.DentalClinicManagement.Service.repository;

import com.DentalClinicManagement.Service.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer> {
}
