import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { context } from './Context'
import '../cssFiles/NavBar.css'
import { useContext } from 'react'
import axios from 'axios'

const new_user = JSON.parse(localStorage.getItem('user'))

function NavBar() {


    const [products,setProductData] = useContext(context);

    const [searchItem, setSearchItem] = useState('');
    const [user, setUser] = useState(localStorage.getItem('user'))
    let filteredProducts=[];

    function search(searchItem){
        if(searchItem!==''){
        axios.get(`http://localhost:8080/products/search/${searchItem}`)
        .then((res) => {
         setProductData(res.data)
         setSearchItem('')
        })}
    else{
        axios.get('http://localhost:8080/products/getProduct')
        .then((res) => {
        
            setProductData(res.data)
        })
    }}
    function returnhome(){
        axios.get('http://localhost:8080/products/getProduct')
        .then((res) => {
        
            setProductData(res.data)
        })
    }    
    useEffect(() => {
        filteredProducts = products.map(product => {
            if (product.category === searchItem){ 
                return product
            };
        })
    })

//    const [cart, setCart] = useState([]);
//    const [total, setTotal] = useState(0);
//      useEffect(() => {
//        if(new_user.id)axios.get(`http://localhost:8080/cart/${new_user.id}/getCart`)
//            .then((res) => {
//                console.log(res.data)
//                setCart(res.data)
//            })
//    },[])


//    function getTotalQuantity(){
//          let totalQuantity = 0;
//          cart.map(item => {
//            console.log(item)
//            if(item.quantity!==0){
//              totalQuantity+=item.quantity;
//            }
//          });
//          setTotal(totalQuantity);
//          return totalQuantity;
//        }

    
    
        return (
            <div className='NavBar'>
                <div className='leftNav'>
                    <ul>
                        <li>
                            <Link to='/' onClick={returnhome}>Home</Link>
                        </li>
                        <li className='search'>
                                <input
                                    type='text'
                                    name='text'
                                    placeholder='Search Item...'
                                    value={searchItem}
                                    onChange={e => { setSearchItem(e.target.value) }}/>
                                     <button value={searchItem}   onClick={() => search(searchItem)}>Search</button>
                        </li>
                    </ul>
            </div>
            <div className='rightNav'>
                <ul>

                    <li>{
                         user ? (<Link to='/update' >Update Profile</Link>):
                          (<Link to='/login'>Update Profile</Link>)
                        }

                    </li>
                   
                    <li>{
                         user ? (<Link to='/Cart' >Cart</Link>):
                          (<Link to='/login'>Cart</Link>)
                        }
                      
                    </li>
                    <li>{
                         user ? (<Link to='/orders' >Orders</Link>):
                          (<Link to='/login'>Orders</Link>)
                        }

                    </li>
                   
                    <li>
                        {
                            user ?  (<Link to='/logout' onClick={()=>{setUser(null)}}>Logout</Link>)
                            :  (<Link to='/login' id='login'>Login</Link>)
                        }
                    </li>


                </ul>
            </div>
        </div>
    )
}

export default NavBar