package com.example.entities;

import org.springframework.data.relational.core.mapping.Table;

import javax.persistence.*;
import java.util.Date;
@Entity
@Table
public class Order {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "oderId")
	private int orderId;
	@Column(name="userid")
	private int userid;
	@Column(name="productid")
	private int productid;
	@Column(name="quantity")
	private int quantity;
	@Column(name="Date")
	private Date date;
	private String productName;

	private float productPrice;

	public float getProductPrice() {
		return productPrice;
	}

	public void setProductPrice(float productPrice) {
		this.productPrice = productPrice;
	}

	public int getOrderId() {
		return orderId;
	}
	public void setOrderId(int orderId) {
		this.orderId = orderId;
	}
	public int getUserId() {
		return userid;
	}
	public void setUserId(int userId) {
		this.userid = userId;
	}
	public int getProductId() {
		return productid;
	}
	public void setProductId(int productId) {
		this.productid = productId;
	}
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	public Date getDate() {
		return date;
	}
	public void setDate(Date string) {
		this.date = string;
	}
    public String getProductName() {
        return productName;
    }
    public void setProductName(String productName) {
        this.productName = productName;
    }
	
}