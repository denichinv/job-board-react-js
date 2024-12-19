import { useState } from "react";

const BotListManager = () => {
  const [bots, setBots] = useState([
    { id: 1, name: "Email Extractor", status: "Running..", task: "Extracting emails" },
    { id: 2, name: "Notification Sender", status: "Running..", task: "Sending notifications" },
    { id: 3, name: "Data Analyzer", status: "Running..", task: "Analyzing data" },
  ]);

  const [newBot, setNewBot] = useState({ name: "", task: "" });
  const [show, setShow] = useState(false);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [failedTasks, setFailedTasks] = useState([]);

  // Handle input changes in the add bot form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewBot((prevState) => ({ ...prevState, [name]: value }));
  };

  // Add a new bot to the list
  const add = () => {
    if (newBot.name.trim() && newBot.task.trim()) {
      const newObject = {
        id: bots.length > 0 ? Math.max(...bots.map((b) => b.id)) + 1 : 1,
        name: newBot.name,
        task: newBot.task,
        status: "Running..",
      };
      setBots((currentBots) => [...currentBots, newObject]);
      setNewBot({ name: "", task: "" });
    }
  };

  // Mark a bot as complete
  const completeJob = (id) => {
    setBots((currentBots) =>
      currentBots.map((bot) =>
        bot.id === id ? { ...bot, status: "Completed!" } : bot
      )
    );
    

    const completedBot = bots.find((bot) => bot.id === id);
    if (completedBot) {
      setCompletedTasks((prevCompleted) => [...prevCompleted, completedBot]);
    }
  };

  // Stop a specific bot
  const stopJob = (id) => {
    setBots((currentBots) =>
      currentBots.map((bot) =>
        bot.id === id ? { ...bot, status: "Operation Canceled" } : bot
      )
    );
    const failedBot = bots.find((bot) => bot.id === id);4
    if (failedBot) {
      setFailedTasks((prevFailed) => [...prevFailed, failedBot]);
    }
  };

  // Delete a specific bot
  const deleteBot = (id) => {
    setBots((currentBots) => currentBots.filter((bot) => bot.id !== id));
  };

  // Render the component
  return (
    <div className="container">
      <h1>Add Task Manually:</h1>

      {/* Form to add new bots */}
      <div>
        <input
          type="text"
          name="name"
          value={newBot.name}
          onChange={handleChange}
          placeholder="Enter Operation Name"
        />
        <input
          type="text"
          name="task"
          value={newBot.task}
          onChange={handleChange}
          placeholder="Enter Task"
        />
        <button style={{ color: "red" }} onClick={add}>
          Add Operation
        </button>
      </div>

      {/* List of bots */}
      <ul>
        <button style={{ color: "red" }} onClick={() => setShow(!show)}>
          {show ? "Hide List" : "Show List"}
        </button>
        {show &&
          bots.map(({ id, name, status, task }) => (
            <li key={id}>
              <span>
                {name} - {task} <br /> <b>{status}</b>
              </span>
              <button style={{ color: "red" }} onClick={() => completeJob(id)}>
                Complete
              </button>
              <button style={{ color: "red" }} onClick={() => stopJob(id)}>
                Stop
              </button>
              <button style={{ color: "red" }} onClick={() => deleteBot(id)}>
                Delete Operation
              </button>
            </li>
          ))}
      </ul>

      {/* Completed tasks */}
      <div className="completed">
        <h1>COMPLETED TASKS:</h1>
        <ul>
          {completedTasks.map(({ id, name, task }) => (
            <li key={id}>
              {name} - {task}
            </li>
          ))}
        </ul>
      </div>

      <div className="failed">
        <h1>FAILED TASKS:</h1>
        <ul>
          {failedTasks.map(({ id, name, task }) => (
            <li key={id}>
              {name} - {task}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BotListManager;
