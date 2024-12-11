import { useState } from "react";

const DynamicInput = () => {

    const [inputValue, setInputValue] = useState("");
    const [textList, setTextList] = useState([]);


    const handleChange = (input) => {
        setInputValue(input.target.value); // Update the input value dynamically
      };
    
      const addText = () => {
        if (inputValue.trim() !== "") {
          setTextList([...textList, inputValue]); // Add the current inputValue to the textList
          setInputValue(""); // Clear the input field
        }
      };
    
      const handleKeyDown = (event) => {
    if(event.key === "Enter"){
        addText()
    }
      }

    return( <div className="container">
        <h1>Dynamic input form:</h1>
        <input
          type="text"
          onChange={handleChange}
          value={inputValue} // Controlled input
          onKeyDown={handleKeyDown}
        />
        <button style={{ color: "red" }} onClick={addText}>
          Add text
        </button>

        {/* Dynamically show the current input value while typing */}
        <h2>Current Text: {inputValue}</h2>

        {/* Show all added texts */}
        {textList.map((text, index) => (
          <h2 key={index}>{text}</h2>
        ))}
      </div>)
}


export default DynamicInput