import { useState } from "react";

const JobBoard = () => {
  const companyName = '"Task Handlers"';
  const [taskCount, setTaskCount] = useState(Math.floor(Math.random() * 10));
  const [inputValue, setInputValue] = useState("");
  const [textList, setTextList] = useState([]);

  const getJobMessage = () => {
    if (taskCount === 0) {
      return "No tasks to schedule today!";
    } else {
      return `Tasks running today from bot: ${taskCount}`;
    }
  };

  const incrementTaskCount = () => {
    setTaskCount(taskCount + 1);
  };

  const decrementTaskCount = () => {
    setTaskCount(taskCount - 1);
  };

  const resetTaskCount = () => {
    setTaskCount(0);
  };

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

  return (
    <>
      <div className="container">
        <h1>{companyName}</h1>
        <p>{getJobMessage()}</p>
        <button style={{ color: "red" }} onClick={incrementTaskCount}>
          Create task
        </button>
        <button style={{ color: "red" }} onClick={decrementTaskCount}>
          Remove task
        </button>
        <button style={{ color: "red" }} onClick={resetTaskCount}>
          Reset task
        </button>
      </div>

      <div className="container">
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
      </div>
    </>
  );
};

export default JobBoard;
