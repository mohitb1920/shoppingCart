package com.example.controller;

import com.example.entities.Order;
import com.example.repo.OrderRepoImp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

@CrossOrigin(origins="http://localhost:3000/")
@Controller
public class OrderController {

    @Autowired
    OrderRepoImp orderRepoImp;


    @GetMapping("/order/{userId}/createOrder")
    public ResponseEntity<?> createOrder(@PathVariable int userId){
        List<Order> order=orderRepoImp.createOrder(userId);
        return new ResponseEntity<>(order,HttpStatus.OK);

    }
    @GetMapping("/order/{userId}/getOrders")
    public ResponseEntity<?> getOrders(@PathVariable int userId){
        List<Order> order=orderRepoImp.getOrders(userId);

        return new ResponseEntity<>(order,HttpStatus.OK);

    }

}
