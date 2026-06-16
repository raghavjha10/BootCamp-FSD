import { useState } from "react";

function CharacterCounter() {
  const [text, setText] = useState("");

  return (
    
    <div>
      <h1>Character Counter Example</h1>
      <textarea
        placeholder="Type something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      

      <h3>Characters: {text.length}</h3>
    </div>
  );
}

export default CharacterCounter;