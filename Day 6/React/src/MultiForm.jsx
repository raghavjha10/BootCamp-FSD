import React, { useState } from 'react';

const MultiForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  } 
  rteurn (
    <div>
      <h1>Multi Form</h1> 
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />  
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
    </div>          
    );
};

export default MultiForm;