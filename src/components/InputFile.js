import { useState } from "react";

function SimpleForm() {
  const [inputValue, setInputValue] = useState("");

  return (
    <form
      style={{
        backgroundColor: "green ",
        justifyContent:"center",
        textAlign: "center",
      }}
    >
      <label
        style={{
          display: "block",
          fontSize: "larger",
          color: "white",

          
          padding: "5px",
        }}
      >
        Name:
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          style={{ fontSize: "larger", padding: "5px", margin: "2px" }}
        />
      </label>
      <p
        style={{
          display: "block",
          fontSize: "larger",
          color: "white",
          padding: "5px",
        }}
      >
        User Input: {inputValue}
      </p>
    </form>
  );
}
export default SimpleForm;
