const { log } = require("console");
const { Socket } = require("dgram");
const express = require("express");
const app = express();
const server = require("http").createServer(app);
const { Server } = require("socket.io");
const { addUser } = require("./utils/users");
const port = process.env.PORT || 9000;

const io = new Server(server);

// routes
app.get("/", (req, res) => {
  res.send("This is DocEditor Server by Ridoy");
});

io.on("connection", (Socket) => {
  Socket.on("userJoined", (data) => {
    const { name, userID, roomID, host, presenter } = data;
    const users = addUser(data);

    Socket.join(roomID);
    Socket.emit("userHasJoined", { success: true, users });
  });
});

server.listen(port, () =>
  console.log("The DOcEditor Backend server is running")
);
