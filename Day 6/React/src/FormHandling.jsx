import React,{useState} from 'react'

const FormHandling = () => {
    const [name, setName] = useState("");

    const handleChange = (event) => {
        console.log('Input changed');
        setName(event.target.value);
    };

  return (
    <div>
      <h1>Form Handling</h1>
      <input type="text" placeholder="Enter your name" value={name} onChange={handleChange} />
      <p>Hello, {name}!</p>
    </div>
  )
}

export default FormHandling