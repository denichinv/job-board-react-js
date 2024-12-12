import { useState } from "react";

const JobBoard = () => {
  const name = 'Task Handling:';
  const [taskCount, setTaskCount] = useState(Math.floor(Math.random() * 10));


  const getJobMessage = () => {
    if (taskCount === 0) {
      return "No tasks to schedule today!";
    }
    else {
      return `Tasks running today from bot: ${taskCount}`;
    }
  };

  const incrementTaskCount = () => {
    setTaskCount(taskCount + 1);
  };

  const decrementTaskCount = () => {
    setTaskCount(taskCount => {
     const newCount = taskCount - 1 
    
        return newCount < 0 ? 0 : newCount
      }
    );
  };

  const resetTaskCount = () => {
    setTaskCount(0);
  };

 

  return (
    <>
      <div className="container">
        <h1>{name}</h1>
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
    </>
  );
};

export default JobBoard;
