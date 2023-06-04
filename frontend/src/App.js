import React, { useState, useEffect } from "react";

import "./App.css";

const backendUri = "http://localhost:4000";

function App() {
  const [tasksList, setTasksList] = useState([]);

  useEffect(() => {
    fetchTasksData();
  }, []);

  const fetchTasksData = async () => {
    const rawData = await fetch(backendUri + "/tasks");
    const data = await rawData.json();
    setTasksList(data);
  };

  return (
    <div className="App">
      <h1>Tasks</h1>
      {tasksList.length === 0 && (
        <h2>No task groups, create a new task group first</h2>
      )}
      {tasksList.length !== 0 &&
        tasksList.map((taskGroup) => (
          <div key={taskGroup._id}>
            <h2>{taskGroup.heading}</h2>
            <h3> {taskGroup.description} </h3>
            {taskGroup.tasks.map((task) => (
              <div key={task.taskName}>
                <h4> {task.taskName} </h4>
                {!!task.completed && "complete"}
                {!task.completed && "incomplete"}{" "}
              </div>
            ))}
          </div>
        ))}
    </div>
  );
}

export default App;
