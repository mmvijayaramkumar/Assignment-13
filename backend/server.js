var jwt = require('jwt-simple')
var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
var app = express()

var User = require('./models/User.js')
var Post = require('./models/Post.js')
var Cart = require('./models/Cart.js')
var Product = require('./models/Product.js')
var auth = require('./auth.js')

mongoose.Promise = Promise

mongoose.connect('mongodb://localhost:27017/assignment13', (err) => {
    if (!err)
        console.log('connected to Mongo')
})

app.use(cors())
app.use(bodyParser.json())

app.get('/posts/:id', async function(req,res) {
    var author = req.params.id
    console.log(author)
    var posts  = await Post.find({author})
    res.send(posts)
})

app.post('/post', auth.checkAuthenticated, (req,res) => {
    var postData = req.body
    postData.author = req.userId
    
    var post = new Post(postData)

    post.save((err,result) => {
            if(err) {
                console.error('saving post error')
                return res.status(500).send({message: 'saving post error'})
            }
            res.sendStatus(200)
        })
})

app.get('/users', async function(req,res) {

    try {
        var users = await User.find({}, '-pwd -__v')
        res.send(users)
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
})

app.get('/products', async function(req,res) {

    try {
        var products = await Product.find({})
        res.send(products)
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
})

app.post('/products', (req,res) => {
    var productData = req.body       
    var product = new Product(productData)

    product.save((err,result) => {
            if(err) {
                console.error('saving product error')
                return res.status(500).send({message: 'saving product error'})
            }
            res.sendStatus(200)
        })
})

app.get('/profile/:id', async function(req,res) {

    try {
        var user = await User.findById(req.params.id, '-pwd -__v')
        res.send(user)
    } catch (error) {
        console.log(error)
        res.sendStatus(200)
    }
})

app.get('/productprofile/:id', async function(req,res) {

    try {
        var product = await Product.findById(req.params.id)
        res.send(product)
    } catch (error) {
        console.log(error)
        res.sendStatus(200)
    }
})

app.post('/addtocart', auth.checkAuthenticated, (req,res) => {
    var product = req.body
    var cartData = {}
    cartData.productid = product.productid
    cartData.productName = product.productName
    cartData.employee = req.userId
    
    var cart = new Cart(cartData)
    cart.save((err,result) => {
        if(err) {
            console.error('saving cart error')
            return res.status(500).send({message: 'saving cart error'})
        }
        res.sendStatus(200)
    })
})

app.get('/viewcart', auth.checkAuthenticated, async function(req,res) {
    var employee = req.userId
    
    try {
        var cart = await Cart.find({employee: employee})
        res.send(cart)
    } catch (error) {
        console.log(error)
        res.sendStatus(200)
    }
})

app.use('/auth', auth.router)
app.listen(3000)