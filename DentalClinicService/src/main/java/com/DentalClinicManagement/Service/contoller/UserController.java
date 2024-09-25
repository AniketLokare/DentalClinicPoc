package com.DentalClinicManagement.Service.contoller;

import com.DentalClinicManagement.Service.model.User;
import com.DentalClinicManagement.Service.response.ResponseHandler;
import com.DentalClinicManagement.Service.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/user")
public class UserController {

    UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    // Read specific User
    @GetMapping("{userId}")
    public ResponseEntity<Object> getUser(@PathVariable("userId") int userId)
    {
        return ResponseHandler.responseBuilder("Requested user", HttpStatus.OK, userService.getUser(userId));
    }

    // Read All Users
    @GetMapping
    public List<User> getAllUsers()
    {
        return userService.getAllUsers();
    }

    @PostMapping
    public String createUser(@RequestBody User user)
    {
        userService.createUser(user);
        return "user created successfully";
    }

    @DeleteMapping("{userId}")
    public String deleteUser(@PathVariable("userId") int userId)
    {
        userService.deleteUser(userId);
        return "user deleted successfully";
    }
}
