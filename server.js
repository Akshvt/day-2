const express = require("express"); //importing express

const app = express(); //server ka instance created

app.get("/", (req, res) => {
  res.send("miawyuuuu");
});

app.listen(3000); //server started at port 3000


//npx nodemon [filename] -> alternative of node [filename] to start server.. automatically restarts server using the original command

//npm (package manager) vs npx (package executioner)