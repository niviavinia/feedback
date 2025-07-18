import React,{useState} from 'react'
import { useNavigate } from 'react-router';
import axios from 'axios';

const Login=()=> {
    const [form,setForm]=useState({email:'',password:''});
    const navigate=useNavigate();

    const handleChange=(e)=>setForm({...form,[e.target.name]:e.target.value});
    const handleSubmit=async(e)=>{
        e.preventDefault();
        const res= await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/login`, form)
        localStorage.setItem('token',res.data.token);
        navigate('/feedback');
    };
  return (
   <form onSubmit={handleSubmit}>
    <div className='container' style={{
      width: '350px',
      marginLeft: '75vh',
      padding: '40px',
      borderRadius: '10px',
      background: '#f5f5f5',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
    <h2 style={{textAlign:'center'}}>Login</h2><br></br>
    <input name="email" placeholder='Email' style={{margin:'5px'}} onChange={handleChange} required/>
   <br></br>
     <input name="password" type='password' placeholder='password'style={{margin:'5px'}} onChange={handleChange} required/>
  <br></br>
  <button style={{alignItems:'center', margin:'10px',backgroundColor:'grey',color:'white'}}>Login</button>
 </div>  
   </form>
  );
};

export default Login;