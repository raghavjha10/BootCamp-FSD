import { useState } from "react";

function ShowHidePassword() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
        <h1>Show/Hide Password Example</h1>
        <h2>Show/Hide Password</h2>
      <input
        type={showPassword ? "text" : "password"}
        placeholder="Enter Password"
      />

      <button onClick={() => setShowPassword(!showPassword)}>
        {showPassword ? "Hide" : "Show"}
      </button>
    </div>
  );
}

export default ShowHidePassword;