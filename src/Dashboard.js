import React,{useEffect, useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'



const Dashboard = () => {
    let token = localStorage.getItem("token")
    const [imagefile, setimagefile] = useState("")
    const navigate = useNavigate()
    useEffect(() =>{
        axios.get("http://localhost:4455/user/verifytoken", {
            headers:{
                "Authorization":`Bearer ${token}`,
                "Content-Type":"application/json",
                "Accept":"application/json"
            }
        }).then((res)=>{
            console.log(res);
        }).catch((err)=>{
            console.log(err);
            if (err) {
                localStorage.removeItem("token")
                navigate("/login")
            }
        })
    }, [])

    const image =(e) =>{
        console.log();
        let file = (e.target.files[0])
        let reader = new FileReader()
        reader.onload = (e) =>{
            console.log(e.target.result);
            setimagefile(e.target.result)
        }
        reader.readAsDataURL(file)
    }

    const Uploadprofile = () =>{
        axios.post("http://localhost:4455/user/verifytoken", {imagefile},{
            headers:{
                "Authorization":`Bearer ${token}`,
                "Content-Type":"application/json",
                "Accept":"application/json"
            }
        }).then((res)=>{
            console.log(res);
        }).catch((err)=>{
            console.log(err);
        })
    }

    const load = () =>{

    }

  return (
   <>
   <div>
   <h1>Well to the Sigma---Dashboard</h1>
   <input onChange={image} type="file" />
   <button onClick={load}>Upload</button>
    </div>
    </>
  )
}

export default Dashboard