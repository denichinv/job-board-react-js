import { useState } from "react";

const BotListManager = () => {
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

  const [newBot, setNewBot] = useState({
    name: "",
    task: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewBot(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  const add = () => {
    if(newBot.name.trim() && newBot.task.trim()){
      const newObject = {
        id: bots.length > 0 ? Math.max(...bots.map(b => b.id)) + 1 : 1,
        name: newBot.name,
        task: newBot.task,
        status: "Stopped"
      };

      setBots(currentBots => [...currentBots, newObject]);
      
      // Reset the form after adding
      setNewBot({
        name: "",
        task: ""
      });
    }
  };

  const runJob = (id) => {
    setBots((currentBots) =>
      currentBots.map((bot) =>
        bot.id === id ? { ...bot, status: "Running..." } : bot
      )
    );
  };

  const stopJob = (id) => {
    setBots((currentBots) => 
      currentBots.map((bot) => 
        bot.id === id ? {...bot, status:"Operation Canceled"} : bot
      )
    );
  };

  return (
    <div className="container">
      <h1>Bot List Manager:</h1>

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