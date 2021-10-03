const { request, response } = require('express');
const express =  require('express');

const app = express();

app.get("/",(req, res)=>{
    res.send("Hello from express");
});

app.get('/api',(req, res)=>{
    res.send("api called");
});

app.get('/help',(req, res)=>{
    res.send("help called");
});

app.get('/api/help',(req, res)=>{
    res.send("api help called");
});

app.get('*',(req, res)=>{
    res.send("Page Not found");
});


app.listen(3000,()=>console.log("server open"));