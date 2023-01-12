import axios from 'axios';
import React, {useContext, useState} from 'react'
import '../cssFiles/ProductTemplate.css'
import { context } from './Context';
import { Navigate } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

let preProductCount=0;
const new_user = JSON.parse(localStorage.getItem('user'))
function ProductTemplate(props) {
 
  const [products, setProductData] = useContext(context);
  
  const user = localStorage.getItem('user');

  
  
  const [productCount, setProductCount] = useState(preProductCount);
  function incrementProductCount(){
    setProductCount(productCount +1);
    const Id=JSON.parse(user).id
    axios.get(`http://localhost:8080/cart/${Id}/add/${props.product.id}`)
      .then((res) => {
    let cart=res.data
    setProductCount(cart.quantity)
    //call the function in navbar to update total
      })

//window.location.reload()
  }

  function setCount(){
      const Id=JSON.parse(user).id
    axios.get(`http://localhost:8080/cart/${Id}/getCartUIdPId/${props.product.id}`)
      .then((res) => {
  let cart=res.data
  console.log(cart[0].quantity)
  setProductCount(cart[0].quantity)

    })

    }

  function decrementProductCount(){
    const Id=JSON.parse(user).id
    let count=productCount-1
    setProductCount(productCount-1);
    
    if(productCount <= 0){setProductCount(0);}
      const quantity={
        quantity:count
      }
      if(productCount===0){
        axios.get(`http://localhost:8080/cart/${Id}/remove/${props.product.id}`)
        .then((res) => {
          
        })
      }
      else
     {
      axios.post(`http://localhost:8080/cart/${Id}/changeQuantity/${props.product.id}`,(quantity))
     .then((res) => {
       let cart=res.data
       setProductCount(cart.quantity)
       //call the function in navbar to update total
       })
         
    }
//window.location.reload()
    }
  

  return (

      <div className='ProductTemplate' style={{minWidth:'18rem'}}>
        <p>{user ? setCount() : null}</p>
        <div className='details' style={{}}>
          <div className='image'>
            <img src={props.product.image} />
          </div>
          <p className='productCategory' >{props.product.name}</p>
          <div className='data'>
            <div>Price :{props.product.price}</div>
          </div>
          <div className='data'>
          <button onClick={decrementProductCount} >-</button>
              <button>{productCount}</button>
          <button onClick={incrementProductCount}>+</button>
        </div>
      <div>&nbsp;</div>
      </div>
      </div>

  )
}

export default ProductTemplate