const express = require('express');
const app = express();

const products = [
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
        name: 'mobile',
        price: 10000,
        brand: 'realme'
    },
    {
        name: 'mobile',
        price: 25000,
        brand: 'redmi'
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
    console.log('Method',req.method);
    console.log('path',req.path)
    console.log("headers",Headers);
    console.log('query Params',req.query);
});

app.get('/profile',(req,res)=>{
    res.send('<h2>Punit sharma</h2>')
})

app.get('/products',(req,res)=>{
//     res.send({
//         name:'mobile',
//         price:'2500'
// })
// console.log('Params',req.params);
const {name,price,brand} = req.query;
console.log(name)
console.log(price);
let results = products;

if(name){
    results = products.filter((product)=>{
        return product.name === name
    })
}
if(price){
    results = results.filter((product)=>{
        return product.price <= price
    })
}

if(brand){
    results = products.filter((product)=>{
        return product.brand === brand;
    })
}
// res.send(`${name} and ${price}`)
res.send({total:results.length,results})
})