import { useState } from "react";

function ToggleText() {
  const [show, setShow] = useState(false);

  return (
    <div>
        <h1>Toggle Text Example</h1>
      <h2>Toggle Text</h2>
      <button onClick={() => setShow(!show)}>
        Toggle Text
      </button>

      {show && <h3>Raghav Kumar Jha</h3>}
    </div>
  );
}

export default ToggleText;