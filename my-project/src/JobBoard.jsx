import { useState } from "react";

const JobBoard = () => {
  // Title for the component
  const name = 'Task Handling:';

  // State to manage task count with initial random value (0-9)
  const [taskCount, setTaskCount] = useState(Math.floor(Math.random() * 10));

  // Generate a dynamic message based on current task count
  const getJobMessage = () => {
    if (taskCount === 0) {
      // Message when no tasks are available
      return "No tasks to schedule today!";
    }
    else {
      // Message showing number of running tasks
      return `Tasks running today from bot: ${taskCount}`;
    }
  };

  // Increment task count when creating a new task
  const incrementTaskCount = () => {
    setTaskCount(taskCount + 1);
  };

  // Decrement task count when removing a task
  const decrementTaskCount = () => {
    setTaskCount(taskCount => {
      // Ensure task count never goes below 0
      const newCount = taskCount - 1;
      return newCount < 0 ? 0 : newCount;
    });
  };

  // Reset task count to zero
  const resetTaskCount = () => {
    setTaskCount(0);
  };

  return (
    <>
      <div className="container">
        {/* Display component title */}
        <h1>{name}</h1>

        {/* Display dynamic job message */}
        <p>{getJobMessage()}</p>

        {/* Buttons to manage task count */}
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
    </>
  );
};

export default JobBoard;