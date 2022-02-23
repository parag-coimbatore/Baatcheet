const express = require('express');
const dotenv = require('dotenv');
const { chats } = require('./data');

const app = express();
dotenv.config()

app.get('/', (req, res)=>{
    res.send("API is Running successfully ")
})

//Created an api and all chats
app.get('/api/chat', (req, res)=> {
    res.send(chats)
})

//Created an api and getting single chat
app.get('/api/chat/:id', (req, res)=> {
    // console.log(req.params.id)

    const singleChat = chats.find(c=> c._id === req.params.id)
    res.send(singleChat)
})

const PORT = process.env.PORT || 5000 

app.listen(PORT, console.log(`Server started on PORT ${PORT}`))