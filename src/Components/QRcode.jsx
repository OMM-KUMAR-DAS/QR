import React from 'react'
import { useState } from 'react'

const QRcode = () => {

    const[inp,setI]= useState("")
    const[data,setQ]= useState()
    
    const omm=async(event)=>{
        event.preventDefault()
        try{
            const res=await fetch(`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${inp}`)
            setQ(res.url)
        }
        catch(error)
        {
            alert("sorry")
        }
    }
  return (
    <div className='con'>
        

        <br></br>
            
            <form onSubmit={omm}>
                <h1>Qr Code Generator</h1>
                <input
                type="text"
                placeholder="Enter url or text"
                className="inp"
                value={inp}
                onChange={(event)=>setI(event.target.value)}
                />
                
                <img className="qrr" src={data} alt=" "/>
            
                <button className="bt">Generate Qr code</button>
                <br></br>
                <br></br>
                
            </form>

    </div>
  )
}

export default QRcode