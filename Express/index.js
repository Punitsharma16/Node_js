const express = require('express');
const app = express();

const product = [
    {
        name: 'mobile',
        price: 20000,
        brand: 'apple'
    },
    {
        name: 'laptop',
        price: 40000,
        brand: 'apple'
    },
    {
        name: 'tab',
        price: 17000,
        brand: 'nokia'
    },
    {
        name: 'cloths',
        price: 1000,
        brand: 'apple'
    },
    {
        name: 'car',
        price: 10000000,
        brand: 'frari'
    }
]

const PORT = 4500;
app.listen(PORT,()=>{
    console.log('App is running');
});

app.get('/',(req,res)=>{
    res.send('Hello My Node Code');
});

app.get('/profile',(req,res)=>{
    res.send('<h2>Punit sharma</h2>')
})

app.get('/products',(req,res)=>{
//     res.send({
//         name:'mobile',
//         price:'2500'
// })
res.send({product})
})