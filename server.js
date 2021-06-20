const express = require("express");
const app = express();
const port = 8080;


app.get('/index.html', (req, res)=>{
    console.log("Hello!")
})

app.listen(port, ()=>{
    console.log("Server Listening on port ", port);
})