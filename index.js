//!imports
const express = require('express');
const cors = require('cors');
const db = require('./util/database');
const {User, Product, Cart} = require('./util/models');
const {register} = require('./controller/userController');
const seed = require('./util/seed');

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

//!Listen Statement
db
    .sync()
    //this line will force recreation on all data
    // .sync({force: true})
    .then(() => {
        //commenting this line in will seed the db with the seed data
        // seed()
    })
server.listen(4000, () => console.log('===============  Up on 4000  ==============='));