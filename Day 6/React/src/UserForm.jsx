import { useState } from "react";

function UserForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Form Submitted Successfully");

    console.log(formData);
  };

  return (
    <div>
      <h1>Task 2: User Registration Form</h1>
      <h2>User Registration Form</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={formData.name}
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={formData.password}
          onChange={handleChange}
        />

        <br /><br />

        <input type="checkbox" name="terms" /> I agree to the terms and conditions

        <br /><br />

        <button type="submit">
          Submit
        </button>
      </form>

      <hr />

      <h3>Live Data</h3>
      <p>Name: {formData.name}</p>
      <p>Email: {formData.email}</p>
      <p>Password: {formData.password}</p>
    </div>
  );
}

export default UserForm;