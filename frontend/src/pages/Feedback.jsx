import React, { useState } from 'react';
import axios from 'axios';

function FeedbackForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedback: '',
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/feedback`,formData);
      alert('Feedback submitted!');
      setFormData({ name: '', email: '', feedback: '' });
    } catch (err) {
      console.error('Feedback error:', err);
      alert('Failed to submit feedback.');
    }
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
      <h2 style={{textAlign:'center'}}>Feedback</h2>
      <input style={{margin:'10px'}} name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
      <input style={{margin:'10px'}} name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
      <textarea style={{margin:'10px'}} name="feedback" value={formData.feedback} onChange={handleChange} placeholder="Your feedback" required /><br></br>
      <button style={{marginRight:'20px',backgroundColor:'grey',color:'white'}} type="submit">Submit</button>
      </div>
    </form>
  );
}

export default FeedbackForm;
