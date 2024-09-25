package com.DentalClinicManagement.Service.service;

import com.DentalClinicManagement.Service.model.User;

import java.util.List;

public interface UserService {
    public User getUser(int userId);
   // public Boolean checkUserExists(String userName);
    public String createUser(User user);
    public List<User> getAllUsers();
    public String deleteUser(int userId);
}
