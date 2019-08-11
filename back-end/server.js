require('dotenv').config()

const express = require('express')
const app = express()
//const port = process.env.PORT
const path = require('path')
let port = 8080
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const data = require("./react-crm-ex-danieldagot/data.json")

// const router = require('./routes/api')

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')

    next()
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


app.use(express.static(path.join(__dirname, 'public/main-layout')))
app.use(express.static(path.join(__dirname, 'public')))
// app.use( '/', router )
mongoose.connect('mongodb://localhost/crm', { useNewUrlParser: true }).then(() => {
    mongoose.set('useFindAndModify', false);

    const Schema = mongoose.Schema

    const cintSchema = new Schema({
        "name": String,
        "email": String,
        "firstContact": Date,
        "emailType": String,
        "sold": Boolean,
        "owner": String,
        "Category": String,
        "country": String,
    })


    const clint = mongoose.model('clints', cintSchema)

    // data.map( m => {
    //  let c  = new clint(m)
    //     console.log(c);
    //     c.save()
    // })
    


    
    app.get('/clints', (req, res) => {

        clint.find({}).exec(function (err, set) {
           
                // console.log(set);
    
                res.send(set)
    })
})


app.put('/clints', (req, res) => {
    let data = req.body
   let  name = data.name
   console.log(data);
    clint.findOneAndUpdate({ name: name }, data, { upsert: true }, function (err, doc) {
        
        
        return res.send(doc);
    })
})

app.put('/clint', (req, res) => {
    let data = req.body
   let  id = data._id
   console.log(data);
    clint.findOneAndUpdate({ _id: id }, data, { upsert: true }, function (err, doc) {
        
        
        return res.send(doc);
    })
})


    app.post('/clints', (req, res) => {

        let data = req.body
        console.log(data);
        console.log(data.Vendor);

        let t = new clint(data)
        console.log(t);
        t.save()
        res.send(t)
    })


    app.listen(port, () => console.log(`Running server on port ${port}`))
})