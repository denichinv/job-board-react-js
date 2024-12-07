import  { useState } from "react";

const JobBoard = () => {
  const companyName = "Jobs.co.uk";
  const [jobCount, setJobCount] = useState(Math.floor(Math.random() * 10)); 

  const getJobMessage = () => {
    if (jobCount === 0) {
      return "No jobs to schedule today!";
    } else {
      return `Jobs running today from bot: ${jobCount}`;
    }
  };

  const incrementJobCount = () => {
    setJobCount((prevCount) => prevCount + 1); 
  };

  return (
    <div>
      <h1>{companyName}</h1>
      <p>{getJobMessage()}</p>
      <button
        style={{ color: "red" }}
        onClick={incrementJobCount} 
      >
        Create a job
      </button>
    </div>
  );
};

export default JobBoard;
