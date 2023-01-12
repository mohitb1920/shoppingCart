package com.example.controller;

import com.example.entities.Product;
import com.example.repo.ProductRepoImp;
import com.example.request.AddRequest;
import com.example.request.FilterRequest;
import com.example.request.ModifyRequest;
import com.example.response.AddResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@CrossOrigin(origins="http://localhost:3000/")
@Controller
public class ProductController {



    @Autowired
    ProductRepoImp productRepoImp;

    @PostMapping("/products/addProduct")
    public ResponseEntity<?> addProduct(@RequestBody AddRequest req) {
        AddResponse addResp =productRepoImp.addProduct(req);
        return new ResponseEntity<AddResponse>(addResp, HttpStatus.OK);
    }
    @GetMapping("/products/getProduct")
    public ResponseEntity<?> getProduct(){
        List <Product> prof = productRepoImp.findProduct();
        return new ResponseEntity<List<Product>>(prof, HttpStatus.OK);
    }
    @GetMapping("/products/getById/{productid}")
    public ResponseEntity<?> getProduct(@PathVariable int productid){
        Product prof = productRepoImp.findEntityById(productid);
        return new ResponseEntity<Product>(prof, HttpStatus.OK);
    }
    @PostMapping("/products/update")
    public ResponseEntity<?>UpdateProduct(@RequestBody ModifyRequest req){
        Product prof=productRepoImp.updateProduct(req);
        return new ResponseEntity<Product>(prof, HttpStatus.OK);
    }
    @GetMapping("/products/{category}")
    public ResponseEntity<?> getProduct(@PathVariable String category){
        List<Product> prof = productRepoImp.findEntityBycategory(category);

        return new ResponseEntity<List<Product>>(prof,HttpStatus.OK);
    }
    @GetMapping("/products/search/{searchString}")
    public ResponseEntity<?> search(@PathVariable String searchString){
        List<Product> prof = productRepoImp.findEntityBysearch(searchString);

        return new ResponseEntity<List<Product>>(prof,HttpStatus.OK);
    }
    @GetMapping("/products/{category}/getFilteredProducts")
    public ResponseEntity<?> getProduct(@PathVariable String category,@RequestBody FilterRequest req){
        List<Product> prof = productRepoImp.findEntityBycategoryfilter(category,req);

        return new ResponseEntity<List<Product>>(prof,HttpStatus.OK);
    }

}
