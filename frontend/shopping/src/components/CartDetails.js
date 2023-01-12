import React, { Fragment, useEffect, useState } from 'react'
import { context } from './Context'
import ReactTable from 'react-table'
import { useNavigate } from 'react-router-dom'
import '../cssFiles/CartDetails.css'
import axios from 'axios'
import { Navigate } from 'react-router-dom'

const user = JSON.parse(localStorage.getItem('user'))


function CartDetails() {
  const navigate = useNavigate();
  if(user==null){
    navigate('/login')
    alert("no user ")
  }
  axios.get(`http://localhost:8080/order/${user.id}/getOrders`)
    .then((res) => {
    
        localStorage.setItem('userOrderHistory',JSON.stringify(res.data))

    })

  const [cart, setCart] = useState([]);


  useEffect(() => {
    axios.get(`http://localhost:8080/cart/${user.id}/getCart`)
        .then((res) => {
        
            setCart(res.data)
        }) 
},[])



  const [country,setCountry]=useState(user.country)
  const [city,setCity]=useState(user.city)
  const [street,setStreet]=useState(user.street)
  const[pincode,setPincode]=useState(user.pincode)
  const[phone_number,setPhone_Number]=useState(user.phone)
  const update={
    country:country,
    city:city,
    street:street,
    pincode:pincode,
    phone:phone_number
  }

//  const[price,setPrice] = useState([]);
  function getTotalPrice(){
    let totalPrice = 0;
    cart.map(item => {
      if(item.quantity!==0){
        const subtotal = (item.quantity * item.productPrice);
        totalPrice+=subtotal;
      }
    });
    return totalPrice;
  }

  function getTotalQuantity(){
      let totalQuantity = 0;
      cart.map(item => {
        if(item.quantity!==0){
          totalQuantity+=item.quantity;
        }
      });
      return totalQuantity;
    }






  function remove(id){
 
    axios.get(`http://localhost:8080/cart/${user.id}/remove/${id}`)
    .then((res) => {
      console.log(res.data)
      window.location.reload()
    })
  }
  
  const placeOrderHandeler = () => {
    axios.post(`http://localhost:8080/updateProfile/${user.id}`,(update))
    .then((res) => {
    
    })
    if(cart.isEmpty){
    
      alert('cart is empty')
     }
     else {
      axios.get(`http://localhost:8080/order/${user.id}/createOrder`)
      .then((res) => {
      
          localStorage.setItem('userOrderHistory',JSON.stringify(res.data))
          window.location.reload()

       } )}
    }
const History=JSON.parse(localStorage.getItem('userOrderHistory'))
const totalPrice = 0;


  return (
    <div>

    <div className='CartDetails'>
      <div className='currProductToOrder'>
        <h4>Your cart details</h4>


       { cart.map(item => {
            if(item.quantity!==0){
              console.log(item)
              const subtotal = item.quantity * item.productPrice;

              return (<p key={item.cartId}>
              {"Name"}&nbsp;&nbsp;:&nbsp;&nbsp;{item.product} &nbsp;&nbsp;&nbsp;&nbsp;
              {"Quantity"}&nbsp;&nbsp;:&nbsp;&nbsp;{item.quantity}&nbsp;&nbsp;&nbsp;&nbsp;
              {"UnitPrice"}&nbsp;&nbsp;:&nbsp;&nbsp;{item.productPrice} &nbsp;&nbsp;&nbsp;&nbsp;
              {"Subtotal"}&nbsp;&nbsp;:&nbsp;&nbsp;{subtotal} &nbsp;&nbsp;&nbsp;&nbsp;

              <button  value={item}   onClick={() => remove(item.productid)}>Remove</button>

              </p>
            )}}

          )}
            <p>Total Quantity Price : {getTotalPrice()}</p>
            <p>Total Quantity : {getTotalQuantity()}</p>


      </div>
           
      <div className='historyAndAddress'>
        <div>


           {
//           History.map((product) => {
//            if(History!==null){return (<h5 key={product.orderId}>{"Product Name"}&nbsp;&nbsp;:&nbsp;&nbsp;{product.productName}
//            {"Quantity"}&nbsp;&nbsp;: &nbsp;&nbsp;{product.quantity} </h5>)}}
//
//          )
          }

        </div>


        <div>
        <h5>Contacts Details</h5>
          <div className='Phone'>
          <label>Phone Number <br></br> </label>
            <input
              type='number'
              placeholder='Phone No.'
              value={phone_number}
              onChange={e => setPhone_Number(e.target.value)}/>
              <br></br>
        </div>
        <div>
          <h5>Enter your address</h5>
          <div className='address'>
            <label>Country <br></br> </label>
            <input
              type='text'
              placeholder='country'
              value={country}
              onChange={e => setCountry(e.target.value)}/>
              <br></br><br></br>
            <label>City <br></br> </label>
            <input
              type='text'
              placeholder='city'
              value={city}
              onChange={e => setCity(e.target.value)}/><br></br><br></br>

            <label>Street <br></br> </label>
             <input
              type='text'
              placeholder='street'
              value={street}
              onChange={e => setStreet(e.target.value)}/><br></br><br></br>

            <label>Pincode <br></br> </label>
             <input
              type='number'
              placeholder='Enter your pincode'
              value={pincode}
              onChange={e => setPincode(e.target.value)}/><br></br>
          </div>
          <button onClick={placeOrderHandeler}>Place Order</button>
        </div>
      </div>
    </div>
    </div>
    </div>
  )
}

export default CartDetails