const express = require("express");

const { getTasks, saveTasks } = require("./data/fileReader");

const app = express();

app.set("view engine", "ejs");
app.use(express.json());

app.get("/", async (req, res, next) => {
  const tasks = await getTasks();

  res.render("index", { tasks });
});

app.listen(4000, () => console.log(`Server running at port 4000`));
