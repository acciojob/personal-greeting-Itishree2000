import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [name, setName] = useState("");
  const handleInputChange = (event) => {
    setName(event.target.value);
  };
  return (
    <div>
      {/* Do not remove the main div */}
      <p>Enter your name:</p>
      <input
        type="text"
        placeholder=""
        value={name}
        onChange={handleInputChange}
      />
      {name && <p>Hello {name}!</p>}
    </div>
  );
};

export default App;
