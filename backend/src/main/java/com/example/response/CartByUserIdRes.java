package com.example.response;

public class CartByUserIdRes {
private int cartId;
private String product;
private int quantity;
private int productid;
private float productPrice;
public float getProductPrice() {
    return productPrice;
}

public void setProductPrice(float productPrice) {
    this.productPrice = productPrice;
}


public int getCartId() {
	return cartId;
}

public void setCartId(int cartId) {
	this.cartId = cartId;
}

public String getProduct() {
	return product;
}

public void setProduct(String product) {
	this.product = product;
}

public int getQuantity() {
    return quantity;
}

public void setQuantity(int quantity) {
    this.quantity = quantity;
}

public int getProductid() {
    return productid;
}

public void setProductid(int productid) {
    this.productid = productid;
}
}
