const express = require("express");
const morgan = require("morgan");
const mongoose= require('mongoose')
const taskRoutes = require('./routes/taskRoute')
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

const dbURI =
  "mongodb+srv://Serge:Passer1234@nodetuts.hjabyod.mongodb.net/Tasklist?retryWrites=true&w=majority";
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    console.log("Database connected");
    app.listen(4500, () => {
      console.log("Server running on port 4500");
    });
  })
  .catch((err) => console.log(err));

  app.use(taskRoutes);


