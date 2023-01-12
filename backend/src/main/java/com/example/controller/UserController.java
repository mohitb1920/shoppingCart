package com.example.controller;

import com.example.repo.UserRepoImp;
import com.example.request.LoginRequest;
import com.example.request.LogoutRequest;
import com.example.request.SignUpRequest;
import com.example.request.UpdateRequest;
import com.example.response.LoginResponse;
import com.example.response.LogoutResponse;
import com.example.response.SignUpResponse;
import com.example.response.profileResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins="http://localhost:3000/")
@Controller
public class UserController {

    @Autowired
    UserRepoImp userRepoImp;

    @PostMapping("/signup")
    public ResponseEntity<?> Signup(@RequestBody SignUpRequest req) {
        SignUpResponse signResp=userRepoImp.SignUp(req);
        return new ResponseEntity<SignUpResponse>(signResp, HttpStatus.OK);
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest req){
        LoginResponse loginResponse=userRepoImp.Login(req);
        System.out.print(req.getEmail());
        System.out.print(req.getPassword());

        return new ResponseEntity<LoginResponse>(loginResponse, HttpStatus.OK);
    }
    @PostMapping("/logout")
    public ResponseEntity<?> logout(@RequestBody LogoutRequest req) {
        LogoutResponse logoutResp = new LogoutResponse();
        logoutResp.setMessage("Success");
        return new ResponseEntity<LogoutResponse>(logoutResp, HttpStatus.OK);
    }

    @GetMapping("/getProfile/{id}")
    public ResponseEntity<?> getProfile(@PathVariable int id){
        profileResponse profile=userRepoImp.findEntityById(id);
        return new ResponseEntity<>(profile, HttpStatus.OK);
    }
    @PostMapping("/updateProfile/{id}")
    public ResponseEntity<?>updateProfile(@RequestBody UpdateRequest req,@PathVariable int id){
        String status=userRepoImp.updateUser(req,id);
        return new ResponseEntity<>(status, HttpStatus.OK);
    }


}
