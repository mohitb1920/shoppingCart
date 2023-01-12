package com.example.controller;

import com.example.repo.CartRepoImp;
import com.example.request.ChangeQuantity;
import com.example.response.CartByUserIdRes;
import com.example.response.CartItemRes;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins="http://localhost:3000/")
@Controller
public class CartController {


    @Autowired
    CartRepoImp cartRepoImp;


    @GetMapping("/cart/{userId}/getCart")
    public ResponseEntity<?> getCart(@PathVariable int userId){
        List<CartByUserIdRes> prof = cartRepoImp.getCartByUserId(userId);
        return new ResponseEntity<List<?>>(prof,HttpStatus.OK);
    }

    @GetMapping("/cart/{userId}/getCartUIdPId/{productId}")
    public ResponseEntity<?> getCartUIdPId(@PathVariable int userId,@PathVariable int productId){
        List<CartByUserIdRes> prof = cartRepoImp.getCartByUIdPId(userId,productId);
        return new ResponseEntity<List<?>>(prof,HttpStatus.OK);
    }

    @GetMapping("/cart/{userId}/getCartItem/{cartitemId}")
    public ResponseEntity<?> getCartByCartId(@PathVariable int userId,@PathVariable int cartitemId){
        CartItemRes item=cartRepoImp.getCartByCartId(userId,cartitemId);
        return new ResponseEntity<>(item,HttpStatus.OK);

    }
    @GetMapping("/cart/{userId}/add/{productId}")
    public ResponseEntity<?> addCart(@PathVariable int userId,@PathVariable int productId){
        CartItemRes prof =cartRepoImp.addCart(userId,productId);
        return new ResponseEntity<>(prof,HttpStatus.OK);
    }

    @GetMapping("/cart/{userId}/remove/{productId}")
    public ResponseEntity<?> removeCart(@PathVariable int userId,@PathVariable int productId){
        String s=cartRepoImp.removeCart(userId,productId);
        return new ResponseEntity<String>(s,HttpStatus.OK);
    }
    @PostMapping("/cart/{userId}/changeQuantity/{productId}")
    public ResponseEntity<?> changeQuantity(@PathVariable int userId,@PathVariable int productId,@RequestBody ChangeQuantity req){
        CartItemRes prof=cartRepoImp.changequantity(userId,productId,req.getQuantity());
        return new ResponseEntity<>(prof,HttpStatus.OK);
    }
    @PostMapping("/cart/changeQuantity/{cartItemId}")
    public ResponseEntity<?> changeQuantity(@PathVariable int cartItemId,@RequestBody ChangeQuantity req){
        CartItemRes prof=cartRepoImp.changequantity1(cartItemId,req.getQuantity());
        return new ResponseEntity<>(prof,HttpStatus.OK);

    }

}
