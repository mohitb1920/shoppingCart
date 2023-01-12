package com.example.entities;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
@Entity
@Table(name="cart")
public class Cart {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "cartId")
	private int cartId;
	@Column(name ="userid")
	private int userid;
	private String productName;
	private float productPrice;

	public float getProductPrice() {
		return productPrice;
	}

	public void setProductPrice(float productPrice) {
		this.productPrice = productPrice;
	}


	
	public int getUserid() {
		return userid;
	}
	public void setUser_id(int userid) {
		this.userid = userid;
	}
	@Column(name="productid")
	private int productid;
	public int getProductid() {
		return productid;
	}
	public void setProductid(int productid) {
		this.productid = productid;
	}
	public void setUserid(int userid) {
		this.userid = userid;
	}
	private int quantity;
	private float price;
	public int getCartId() {
		return cartId;
	}
	public void setCartId(int cartId) {
		this.cartId = cartId;
	}
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	public float getPrice() {
		return price;
	}
	public void setPrice(float f) {
		this.price = f;
	}
    public String getProductName() {
        return productName;
    }
    public void setProductName(String productName) {
        this.productName = productName;
    }

	
}
