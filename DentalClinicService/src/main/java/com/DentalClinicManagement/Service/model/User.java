package com.DentalClinicManagement.Service.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "users")
public class User {

    @Id
    private int userId;
    private String userName;
    private String password;
    private String userRole;
    private String userContactNumber;

    public User() {
    }

    // Constructor
    public User(int userId, String userName, String password, String userRole, String contactNumber) {
        this.userId = userId;
        this.userName = userName;
        this.password = password;
        this.userContactNumber = contactNumber;
        this.userRole = userRole;
    }

    // Getter and Setters
    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getUserContactNumber() {
        return userContactNumber;
    }

    public void setUserContactNumber(String userContactNumber) {
        this.userContactNumber = userContactNumber;
    }

    public String getUserRole() {
        return userRole;
    }

    public void setUserRole(String userRole) {
        this.userRole = userRole;
    }
}
