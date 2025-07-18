import React,{useState} from 'react'
import { useNavigate } from 'react-router';
import axios from 'axios';

const Register=()=> {
    const [form,setForm]=useState({name:'',email:'',password:''});
    const navigate=useNavigate();

    const handleChange=(e)=>setForm({...form,[e.target.name]:e.target.value});

    const handleSubmit=async(e)=>{
        e.preventDefault();
       await axios.post('${import.meta.env.VITE_API_BASE_URL}/api/register', form);
        navigate('/login');
        console.error('Registration failed:', err);
        alert('Registration failed. Please try again.');
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
    <h2 style={{textAlign:'center'}}>Register</h2><br></br>
    <input name='name'style={{margin:'5px'}} placeholder='Name' onChange={handleChange} required/><br></br>
    <input name="email" placeholder='Email' style={{margin:'5px'}} onChange={handleChange} required/><br></br>
     <input name="password" type='password' style={{margin:'5px'}} placeholder='password' onChange={handleChange} required/><br></br>
  <button style={{marginRight:'20px',backgroundColor:'grey',color:'white'}}>Register</button>
     </div>
   </form>
 
  );
};
                      
export default Register;