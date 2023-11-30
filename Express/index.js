const express = require('express');
require('dotenv').config();
const app = express();
app.use(express.json());

let products = [
    { 
        id: 101,
        name: 'mobile',
        price: 20000,
        brand: 'apple'
    },
    {
        id: 102,
        name: 'laptop',
        price: 40000,
        brand: 'apple'
    },
    {
        id: 103,
        name: 'mobile',
        price: 10000,
        brand: 'realme'
    },
    {
        id: 104,
        name: 'mobile',
        price: 25000,
        brand: 'redmi'
    },
    {
        id: 105,
        name: 'tab',
        price: 17000,
        brand: 'nokia'
    },
    {
        id: 106,
        name: 'cloths',
        price: 1000,
        brand: 'apple'
    },
    {
        id: 107,
        name: 'car',
        price: 10000000,
        brand: 'frari'
    }
]

const PORT = 4500;
console.log(PORT);
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
// console.log(name)
// console.log(price);
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


// post request
// 1.we have to send the data from body in Api
// 2.we can use data from req obj from the api
// 3. we have to change data json to obj

app.post('/products',(req,res)=>{
    // console.log(req.body);
    const {name} = req.body;
    if(name){
        products.push(req.body)
        res.status(201);
        res.send({messgage : "created sucussfully"})
    }else{
        res.status(401);
        res.send({messgage:"Error"})
    }
    
})



// Put request

app.put('/products',(req,res)=>{
    let isItem = false
    products.forEach((item)=>{
        if(item.id===req.body.id){
            item.name = req.body.name
            item.price = req.body.price 
            item.brand = req.body.brand
            res.status(201)
            isItem = true
        }
    })
    if(!isItem){
        products.push(req.body)
    }

    res.send({message : 'sucussfully'})
})


// Delete


app.delete('/products/:id',(req,res)=>{
    const {id} = req.params;
    products =  products.filter((item)=>{
        return item.id !== parseInt(id);
    })
    res.status(200)
    res.send({message:"  delete succussfully"});
})