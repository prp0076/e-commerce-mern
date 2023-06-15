import React,{useState} from 'react'
import Layout from "../../Components/Layout"
import toast from"react-hot-toast"
import axios from "axios"
import { useNavigate } from 'react-router-dom'
const Register = () => {
const [name,setName]=useState("");
const [email,setEmail]=useState("");
const [password,setPassword]=useState("");
const [phone,setPhone]=useState("");
const [address,setAddress]=useState("");
const navigate=useNavigate();
// handle submit
const handleSubmit=async (e)=>{
e.preventDefault();
try {
    const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/register`,{name,email,password,phone,address});
    if( res && res?.data?.success){
        
        toast.success(res.data.message);
        
        navigate('/login')
    }
    else{
        toast.error(res.data.message)
    }
} catch (error) {
    console.log(error)
    toast.error("something went wrong")
}
}
  return (
    <Layout title="Register -Ecommerce App">
        <div className='register'>
           <h1>Register Page</h1>
           <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className="form-control" id="exampleInputName" placeholder='enter your name' required/>
                </div>
                <div className="mb-3">
                    <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" id="exampleInputEmail" placeholder='enter your email' required/>
                </div>
                <div className="mb-3">
                    <input type="text" value={phone} onChange={(e)=>setPhone(e.target.value)} className="form-control" id="exampleInputNumber" placeholder='enter your phone' required/>
                </div>
                <div className="mb-3">
                    <input type="text" value={address} onChange={(e)=>setAddress(e.target.value)} className="form-control" id="exampleInputAddress" placeholder='enter your address' required/>
                </div>
                <div className="mb-3">
                    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" placeholder='enter your password' required/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form> 
        </div>
    </Layout>
  )
}

export default Register