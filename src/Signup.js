import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
    const [firstname, setfirstname] = useState("")
    const [lastname, setlastname] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const navigate = useNavigate()

    const Signup = ()=>{
        console.log(firstname, lastname, email, password);
        let userdetail ={
            firstname,
            lastname,
            email, 
            password
        }
        axios.post("http://localhost:4455/user/signup", userdetail)
        .then((res)=>{
            console.log(res);
            if (res.status == 200) {
                navigate('/login')
            }
        }).catch((err)=>{
            console.log(err);
        })
    }

  return (
    <div>
        <div>
            <input type="text" onChange={(e)=>setfirstname(e.target.value)} placeholder='Firstname' />
            <input type="text" onChange={(e)=>setlastname(e.target.value)} placeholder='Lastname' />
            <input type="email" onChange={(e)=>setemail(e.target.value)} placeholder='Email' />
            <input type="password" onChange={(e)=>setpassword(e.target.value)} placeholder='Password' />
            <button onClick={Signup}>Register</button>
        </div>
    </div>
  )
}

export default Signup