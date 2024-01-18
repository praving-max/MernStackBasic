import React, { useState } from 'react'

export default function Signup() {
    const [obj,setObj]=useState({name:"",email:"",password:""})
   const  onChange = (e)=>{
        setObj({...obj,[e.target.id]:e.target.value})
   }
   const onSubmit = async(e)=>{
    e.preventDefault()
            const response = await fetch('http://127.0.0.1:5000/auth/get/createUser',
            {
                method:'POST',
                headers:{
                    'Content-Type':"application/json"
                },
                body:JSON.stringify({name:obj.name,email:obj.email,password:obj.password})
            })
            const res = await response.json();
            console.log("res",res)
   }
  return (
    <div>
      <div className='container'>
            <form onSubmit={onSubmit}>
                <div>
                <label htmlFor='name' className='form-label'>Name</label>
                <input type ="text" className='form-control' onChange={onChange} id='name' value={obj.name}  />
                </div>
                <div className='mb-3'>
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" onChange={onChange} id="email" value ={obj.email}  /> 
                 </div>
                <div className="mb-3">
                    <label htmlFor="password"  className="form-label" >Password</label>
                    <input type="password" onChange={onChange}  value={obj.password}className="form-control" id="password" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    </div>
  )
}
