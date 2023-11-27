const express = require('express');
const app = express();

const PORT = 4500;
app.listen(PORT,()=>{
    console.log('App is running');
});

app.get('/',(req,res)=>{
    res.send('Hello Everyone');
});

app.get('/profile',(req,res)=>{
    res.send('<h2>Punit sharma</h2>')
})