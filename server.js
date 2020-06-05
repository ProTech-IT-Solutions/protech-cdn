// server.js
// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
const express = require("express");
const app = express();


app.get("/", (request, response) => {
  response.sendFile(__dirname + "/index.html");
});

app.get("/jquery", (request, response) => {
  response.sendFile(__dirname + "/jquery/jquery.js");
});

app.get("/swal", (request, response) => {
  response.sendFile(__dirname + "/sweetalert/swal.js");
});

app.get("/socketio", (request, response) => {
  response.sendFile(__dirname + "/socket/socket.js");
});


// BOOTSTRAP JS AND CSS

app.get("/bootstrapjs", (request, response) => {
  response.sendFile(__dirname + "/bootstrap/bootstrap.js");
})


app.get("/bootstrapcss", (request, response) => {
  response.sendFile(__dirname + "/bootstrap/bootstrap.css");
})


// https://expressjs.com/en/starter/basic-routing.html
app.get("/status", (request, response) => {
  response.sendStatus(200)
});


console.log("--------- CDN HAS STARTED -------------");
// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
app.use((req, res,next)=>{
   res.status(404).send('<h1><i> OOPS! page not found </i></h1>');
});