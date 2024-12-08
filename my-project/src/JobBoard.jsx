import  { useState } from "react";

const JobBoard = () => {
  const companyName = "\"Task Handlers\"";
  const [taskCount, setTaskCount] = useState(Math.floor(Math.random() * 10)); 

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

  return (
    <div>
      <h1>{companyName}</h1>
      <p>{getJobMessage()}</p>
      <button
        style={{ color: "red" }}
        onClick={incrementTaskCount} 
      >
        Create task
      </button>
      <button
        style={{ color: "red" }}
        onClick={decrementTaskCount} 
      >
       Remove task
      </button>
      <button
        style={{ color: "red" }}
        onClick={resetTaskCount} 
      >
        Reset task
      </button>
    </div>
  );
};

export default JobBoard;
