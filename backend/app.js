const express = require("express");

const { getTasks, saveTasks } = require("./data/fileReader");

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  // Attach CORS headers
  // Required when using a detached backend (that runs on a different domain)
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.get("/tasks", async (req, res, next) => {
  const tasks = await getTasks();

  res.send(tasks);
});

app.listen(4000, () => console.log(`Server running at port 4000`));
