import React,{useState} from 'react'

const Chat = ({socket}) => {
    const [message, setmessage] = useState("")
    const [allchat, setallchat] = useState([])
    console.log(socket);
    const Sendchat = () =>{
        console.log(message);
        socket.emit("newmessage", message)
    }
    socket.on("receivemessage", (message)=>{
        console.log(message);
        setallchat([...allchat, message])
    })
  return (
    <>
   <div className='w-50 mx-auto px-3 py-3 rounded shadow'>
   <div className='d-flex justify-content-center align-content-center gap-3'>
   <input  placeholder='type message...' className='form-control' onChange={(e)=>setmessage(e.target.value)} type="text" />
   <button  className='btn btn-primary' onClick={Sendchat}>Send</button>
   </div>
   <div>{allchat.map((chat)=>(
    <>
    <h1 className='bg-success px-3 py-3 text-bg-dark'>{chat}</h1>
    </>
   ))}

   </div>
   </div>
    </>
  )
}

export default Chat