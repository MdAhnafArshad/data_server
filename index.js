const express = require('express');
const app = express();
const port = process.env.PORT || 3030
const cors = require('cors');


// middleware
app.use(cors());
app.use(express.json());


// user
const user = [
    {id: 1, name: 'sabana bobi', email: 'sabana@gmail.com'},
    {id: 2, name: 'sabila', email: 'sabila@gmail.com'},
    {id: 3, name: 'samiha', email: 'samiha@gmail.com'},
]


// send request
app.get('/', (req, res)=>{
    res.send('hello world');
})

app.get('/users', (req, res)=>{
    res.send(user);
})

app.post('/users', (req, res)=>{
    console.log('post api hitting')
    console.log(req.body)
    const newUser = req.body
    newUser.id = user.length + 1;
    user.push(newUser);
    res.send(newUser);

});

app.listen(port, ()=>{
    console.log(`listening port ${port}`, )
})