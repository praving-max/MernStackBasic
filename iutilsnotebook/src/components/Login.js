import React,{useState} from 'react'

export default function Login() {
    const [obj,setObj] = useState({email:"",password:""});
    const onChange = (e)=>{
        console.log("value",e.target.value)
        setObj({...obj,[e.target.id]:e.target.value})
    }
    const onSubmit=async(e)=>{
        console.log("string",JSON.stringify(obj));
        e.preventDefault();
        const response = await fetch("http://127.0.0.1:5000/auth/get/login",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({email:obj.email,password:obj.password})
        })
    const res = await response.json()
       localStorage.setItem('Token',res.authToken)

    }
    return (
        <div className='container'>
            <form onSubmit={onSubmit}>
                <div className='mb-3'>
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" onChange={onChange} id="email" value ={obj.email} aria-describedby="emailHelp" />                </div>
                <div className="mb-3">
                    <label htmlFor="password"  className="form-label" >Password</label>
                    <input type="password" onChange={onChange}  value={obj.password}className="form-control" id="password" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
