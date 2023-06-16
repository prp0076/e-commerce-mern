import React,{useState} from 'react'
import Layout from '../../Components/Layout'
import toast from"react-hot-toast"
import axios from "axios"
import { useNavigate,useLocation } from 'react-router-dom'
import "../../styles/AuthStyles.css"
const Forgotpassword = () => {
        const [email,setEmail]=useState("");
        const [newpassword,setNewPassword]=useState("");
        const [answer,setAnswer]=useState("");
        const navigate=useNavigate();
         // handle submit
        const handleSubmit=async (e)=>{
        e.preventDefault();
        try {
            const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/forgot-password`,{email,answer,newpassword});
            if( res && res?.data?.success){
                toast.success(res?.data?.message);
                navigate('/login');
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
    <Layout title="Forgot password -Ecommerce App">
    <div className='form-container'>
       <h1>Reset Password Page</h1>
       <form onSubmit={handleSubmit}>
            
            <div className="mb-3">
                <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" id="exampleInputEmail" placeholder='enter your email' required/>
            </div>
            <div className="mb-3">
                <input type="text" value={answer} onChange={(e)=>setAnswer(e.target.value)} className="form-control" id="exampleInputAnswer" placeholder='enter your fevourite sports' required/>
            </div>
           
            <div className="mb-3">
                <input type="password" value={newpassword} onChange={(e)=>setNewPassword(e.target.value)} className="form-control" id="exampleInputnewPassword1" placeholder='enter new password' required/>
            </div>
           
            <button type="submit" className="btn btn-primary">Reset</button>
        </form> 
    </div>
</Layout>
  )
}

export default Forgotpassword