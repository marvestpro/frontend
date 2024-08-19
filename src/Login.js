import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const navigate = useNavigate()


    const login = () =>{
        console.log(email, password);
        let userdetail ={
          email,
          password,
        }
        axios.post("http://localhost:4455/user/login", userdetail)
        .then((res)=>{
          console.log(res);
          alert(res.data.message)
          localStorage.setItem("token", res.data.token)
            navigate("/dashboard")
        }).catch((err)=>{
          console.log(err);
        })

    }

  return (
    <div>
      <input onChange={(e)=> setemail(e.target.value)} placeholder='Email' type="email" />
      <input onChange={(e)=> setpassword(e.target.value)} placeholder='Password' type="password" />
      <button onClick={login}>Log in</button>
    </div>
  )
}

export default Login