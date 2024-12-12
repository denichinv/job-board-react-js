import { useState } from "react";

const BotListManager = () => {
  const [bots, setBots] = useState([
    {
      id: 1,
      name: "Email Extractor",
      status: "Running",
      task: "Extracting emails",
    },
    {
      id: 2,
      name: "Notification Sender",
      status: "Completed",
      task: "Sending notifications",
    },
    { id: 3, name: "Data Analyzer", status: "Stopped", task: "Analyzing data" },
  ]);

  const runJob = (id) => {
    setBots((currentBots) =>
      currentBots.map((bot) =>
        bot.id === id ? { ...bot, status: "Running...",  name:"" } : bot
      )
    );
  };

  const stopJob = (id) => {
    setBots((currentBots) => 
        currentBots.map((bot) => 
    bot.id === id ? {...bot, status:"Operation Canceled", name:""} : bot))
  }

  return (
    <div className="container">
      <h1>Bot List Manager:</h1>
      <ul>
        {bots.map(({ id, name, status, task }) => (
          <li key={id}>
            <span>
              {id}. {name} - {task} <br /> <b>{status}</b>
            </span>
            <button style={{color:"red"}} onClick={() => runJob(id)}>Run</button>
            <button style={{color:"red"}} onClick={() => stopJob(id)}>Stop</button>
            
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BotListManager;
