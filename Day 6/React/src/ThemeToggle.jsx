import { useState } from "react";

function ThemeToggle() {
  const [dark, setDark] = useState(false);

  return (
    <div
      style={{
        backgroundColor: dark ? "black" : "Grey",
        color: dark ? "white" : "black",
        padding: "20px",
        marginTop: "20px"
      }}
    >
        <h1>Theme Toggle Example</h1>
      <h2>{dark ? "Dark Mode" : "Light Mode"}</h2>

      <button onClick={() => setDark(!dark)}>
        Change Theme
      </button>
    </div>
  );
}

export default ThemeToggle;