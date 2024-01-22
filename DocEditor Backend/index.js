const { log } = require("console");
const { Socket } = require("dgram");
const express = require("express");
const app = express();
const server = require("http").createServer(app);
const { Server } = require("socket.io");
const port = process.env.PORT || 9000;

const io = new Server(server);

// routes
app.get("/", (req, res) => {
  res.send("This is DocEditor Server by Ridoy");
});

io.on("connection", (Socket) => {
  console.log("User Connected");
});

server.listen(port, () =>
  console.log("The DOcEditor Backend server is running")
);
