import React from 'react'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Contact() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.value;
    const email = event.target.value;
    const subject = event.target.value;
    const Message = event.target.value;
    setInputs(values => ({...values, [name]:values, [email]:values,[subject]: values,[Message]:values}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
  }
  return (
    <div className="container">
         <div className="row gap-5  ">
          <div className="col-md-6">
          <form onSubmit={handleSubmit} className='form-control'>
      <h1>Contact Form</h1>
    
    <input 
      type="text" 
      name="username" className='form-control'
      value={inputs.username || ""} 
      onChange={handleChange} placeholder='Name'
    />
    
    
      <input 
        type="email" className='form-control'
        name="email" 
        value={inputs.email || ""} 
        onChange={handleChange} placeholder='Email'
      />
      <input 
        type="text" className='form-control'
        name="subject" 
        value={inputs.subject || ""} 
        onChange={handleChange} placeholder='Subject'
      />
      <textarea
        type="text" className='form-control'
        name="textarea" 
        value={inputs.Message || ""} 
        onChange={handleChange} placeholder='Message'
      />
    
      <input type="submit" className='btn btn-danger' />
  </form>

          </div>
          <div className="col-md-4">
            <h1>Contact Information</h1>
            <p>I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.

</p>
<h4>Our contact details:</h4>
<ul>
  <li><i className="fa-solid fa-map fa-lg me-3" style={{color: "#f20707"}}></i><span class="icon-list-text">Manchester St 123-78B, Random 7D, UK</span></li>
  <li><i className='fa-solid fa-mobile-screen-button me-3'></i>+46 123 456 789</li>
  <li><i className='fa-solid fa-phone me-3'></i>+46 123 456 789</li>
  <li><i class="fa-solid fa-envelope me-3"></i>swaer@swera.com</li>
</ul>

          </div>
         </div>
    </div>
    
  )
}
