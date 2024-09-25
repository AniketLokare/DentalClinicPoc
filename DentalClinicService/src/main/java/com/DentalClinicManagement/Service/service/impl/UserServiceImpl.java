package com.DentalClinicManagement.Service.service.impl;

import com.DentalClinicManagement.Service.model.User;
import com.DentalClinicManagement.Service.repository.UserRepository;
import com.DentalClinicManagement.Service.service.UserService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    UserRepository userRepository;

    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public User getUser(int userId) {
        return userRepository.findById(userId).get();
    }

//    @Override
//    public Boolean checkUserExists(String userName) {
//        return userRepository.checkUserExists(userName);
//    }

    @Override
    public String createUser(User user) {
        this.userRepository.save(user);
        return "success";
    }

    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public String deleteUser(int userId) {
        userRepository.deleteById(userId);
        return "success";
    }
}
