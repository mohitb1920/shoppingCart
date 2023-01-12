import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  if (user === null) {
    navigate('/login');
    alert('no user');
  }

  axios
    .get(`http://localhost:8080/order/${user.id}/getOrders`)
    .then((res) => {
      localStorage.setItem('userOrderHistory', JSON.stringify(res.data));
    });

  const History = JSON.parse(localStorage.getItem('userOrderHistory'));

  return (
    <div>
      <h1>Order History</h1>
      <table>
        <thead>
          <tr>
            <th>Order #</th>
            <th style={{paddingRight: '30px'}}>Placed on</th>
            <th style={{paddingRight: '30px'}}>Product</th>
            <th style={{paddingRight: '30px'}}>Quantity</th>
            <th style={{paddingRight: '30px'}}>Price</th>
            <th>Total Price</th>
          </tr>
        </thead>
        <tbody>
          {History.map((order) => (
            <tr key={order.orderId}>
              <td>{order.orderId}</td>
              <td style={{paddingRight: '30px'}}>{order.date}</td>
              <td style={{paddingRight: '30px'}}>{order.productName}</td>
              <td style={{paddingRight: '30px'}}>{order.quantity}</td>
              <td style={{paddingRight: '30px'}}>{order.productPrice}</td>
              <td>{order.quantity * order.productPrice}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


export default OrderHistory;


//===========================================================================

//import React, { useState, useEffect } from 'react';
//
//
//
//const OrderHistory = () => {
//  const [orders, setOrders] = useState([]);
//
//
//
//  useEffect(() => {
//    // use sample data for the orders instead of fetching from an API
//    const sampleOrders = [      {        id: 1,        date: 'January 1, 2021',        items: [          {            productId: 1,            productName: 'Product 1',            quantity: 2,            price: 9.99,          },          {            productId: 2,            productName: 'Product 2',            quantity: 1,            price: 19.99,          },        ],
//        total: 39.97,
//      },
//      {
//        id: 2,
//        date: 'January 3, 2021',
//        items: [
//          {
//            productId: 3,
//            productName: 'Product 3',
//            quantity: 3,
//            price: 4.99,
//          },
//        ],
//        total: 14.97,
//      },
//      {
//        id: 3,
//        date: 'January 10, 2021',
//        items: [
//          {
//            productId: 4,
//            productName: 'Product 4',
//            quantity: 1,
//            price: 24.99,
//          },
//          {
//            productId: 5,
//            productName: 'Product 5',
//            quantity: 2,
//            price: 14.99,
//          },
//          {
//            productId: 6,
//            productName: 'Product 6',
//            quantity: 1,
//            price: 9.99,
//          },
//        ],
//        total: 64.97,
//      },
//    ];
//    setOrders(sampleOrders);
//  }, []);
//
//
//
//  return (
//<div>
//<h1>Order History</h1>
//      {orders.map((order) => (
//<div key={order.id}>
//<h2>Order #{order.id}</h2>
//<p>Placed on {order.date}</p>
//<table>
//<thead>
//<tr>
//<th>Product</th>
//<th>Quantity</th>
//<th>Price</th>
//</tr>
//</thead>
//<tbody>
//              {order.items.map((item) => (
//<tr key={item.productId}>
//<td>{item.productName}</td>
//<td>{item.quantity}</td>
//<td>{item.price}</td>
//</tr>
//              ))}
//<tr>
//<td colSpan="2">Total</td>
//<td>{order.total}</td>
//</tr>
//</tbody>
//</table>
//</div>
//      ))}
//</div>
//  );
//};
//
//
//
//export default OrderHistory;

//==============================================================================

