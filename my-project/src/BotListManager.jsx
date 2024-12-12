import { useState } from "react";

const BotListManager = () => {
  // Initial state for the list of bots
  const [bots, setBots] = useState([
    {
      id: 1,
      name: "Email Extractor",
      status: "",
      task: "Extracting emails",
    },
    {
      id: 2,
      name: "Notification Sender",
      status: "",
      task: "Sending notifications",
    },
    {
      id: 3,
      name: "Data Analyzer",
      status: "",
      task: "Analyzing data"
    },
  ]);

  // State for the form to add new bots
  const [newBot, setNewBot] = useState({
    name: "",
    task: ""
  });

  // Handle input changes in the add bot form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewBot(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  // Add a new bot to the list
  const add = () => {
    // Check if both name and task are non-empty
    if(newBot.name.trim() && newBot.task.trim()){
      // Create a new bot object with a unique ID
      const newObject = {
        id: bots.length > 0 ? Math.max(...bots.map(b => b.id)) + 1 : 1,
        name: newBot.name,
        task: newBot.task,
        status: "Stopped"
      };

      // Add the new bot to the existing list
      setBots(currentBots => [...currentBots, newObject]);
      
      // Reset the form after adding
      setNewBot({
        name: "",
        task: ""
      });
    }
  };

  // Run a specific bot by changing its status
  const runJob = (id) => {
    setBots((currentBots) =>
      currentBots.map((bot) =>
        bot.id === id ? { ...bot, status: "Running..." } : bot
      )
    );
  };

  // Stop a specific bot by changing its status
  const stopJob = (id) => {
    setBots((currentBots) =>
      currentBots.map((bot) =>
        bot.id === id ? {...bot, status:"Operation Canceled"} : bot
      )
    );
  };

  // Render the component
  return (
    <div className="container">
      <h1>Bot List Manager:</h1>
      
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
        <button
          style={{color:"red"}}
          onClick={add}
        >
          Add Operation
        </button>
      </div>
      
      {/* List of bots */}
      <ul>
        {bots.map(({ id, name, status, task }) => (
          <li key={id}>
            <span>
              {id}. {name} - {task} <br /> <b>{status}</b>
            </span>
            <button
              style={{color:"red"}}
              onClick={() => runJob(id)}
            >
              Run
            </button>
            <button
              style={{color:"red"}}
              onClick={() => stopJob(id)}
            >
              Stop
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BotListManager;