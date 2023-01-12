import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../cssFiles/UpdateProfile.css'

const old_u = JSON.parse(localStorage.getItem('user'))

function UpdateProfile() {
    const [name, setName] = useState(old_u.name);
    const [phone, setPhone] = useState(old_u.phone);
    const [street, setStreet] = useState(old_u.street);
    const [city, setCity] = useState(old_u.city);
    const [country, setCountry] = useState(old_u.country);
    const [pincode, setPincode] = useState(old_u.pincode);
    const user = {
        email : name,
        phone : phone,
        street : street,
        city : city,
        country : country,
        pincode : pincode

    }
    const userDetail=JSON.stringify(user)
    const navigate = useNavigate();

    const update = () => {

                axios.post(`http://localhost:8080/updateProfile/${old_u.id}`,  (user) )
                .then(res => {
                  let message=res.data
//                  window.alert(message.result)
                  if(message==="success"){
                    let id=Number(old_u.id)
                    axios.get(`http://localhost:8080/getProfile/${id}`, )
                    .then(res => {
                      let user=res.data
                     localStorage.setItem("user",JSON.stringify(user))
                     console.log(user)
                    })

                    alert("User detail updated successfully")
                    navigate('/');
                    window.location.reload()

                }
                })
            }


    return (
        <div className='LoginSignUpPage'>
            <div className='name'>
                <label>Name</label>
                <input
                    type='name'
                    name='name'
                    placeholder='Enter your name'
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required
                />
            </div>
            <div className='phone'>
                <label>Phone</label>
                <input
                    type='phone'
                    name='phone'
                    placeholder='Enter your phone'
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    required
                />
            </div>

            <div className='street'>
                <label>Street</label>
                <input
                    type='street'
                    placeholder='street'
                    value={street}
                    required
                    onChange={e => setStreet(e.target.value)}
                />
            </div>

            <div className='city'>
                <label>City</label>
                <input
                    type='city'
                    name='city'
                    placeholder='Enter your city'
                    value={city}
                    onChange={e => setCity(e.target.value)}
                    required
                />
            </div>
            <div className='country'>
                <label>Country</label>
                <input
                    type='country'
                    name='country'
                    placeholder='Enter your country'
                    value={country}
                    onChange={e => setCountry(e.target.value)}
                    required
                />
            </div>

            <div className='pincode'>
                <label>Pincode</label>
                <input
                    type='pincode'
                    placeholder='pincode'
                    value={pincode}
                    required
                    onChange={e => setPincode(e.target.value)}
                />
            </div>

            <div className='update'>
                <button onClick={update}>Update</button>
            </div>
        </div>
    )

}

export default UpdateProfile