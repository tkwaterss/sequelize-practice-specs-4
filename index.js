//!imports
const express = require('express');
const cors = require('cors');
const db = require('./util/database');
const {User, Product, Cart} = require('./util/models');
const {register} = require('./controller/userController');
const seed = require('./util/seed');
const {addToCart, checkout} = require('./controller/cartController')

//!variables
const server = express();

//!middleware
server.use(express.json());
server.use(cors())

//!associations
User.hasMany(Cart);
Cart.belongsTo(User);
Cart.belongsTo(Product);
Product.hasMany(Cart);


//!endpoints
server.post('/register', register);
server.post('/addItemToCart', addToCart)
server.get('/checkout/:userId', checkout)


// Database sync and seed
db
    .sync()
    //this line will force recreation on all data
    // .sync({force: true})
    .then(() => {
        //commenting this line in will seed the db with the seed data
        // seed()
        // console.log('successful seed')
    })
    .catch((err) => console.log('could not connect'))
  //!Listen Statement  
server.listen(4000, () => console.log('===============  Up on 4000  ==============='));