const express = require('express')
const app = express()
const http = require('http')
const socketio = require('socket.io')
const server = http.createServer(app)
const io = socketio(server)
const path = require('path');
app.set("view engine", "ejs")
app.use(express.static(path.join(__dirname,"public")))
const PORT =3000
io.on("connection ",(socket)=>{
console.log("connection");
})
app.get('/',(req,res)=>{
    res.render ("index")
})
server.listen(PORT,()=>{
    console.log("app listen port in "+PORT);
})