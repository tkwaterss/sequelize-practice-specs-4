const express = require('express');
const cors = require('cors');
const db = require('./util/database');
const {User} = require('./util/models');
const {register} = require('./controller/userController');

const server = express();

server.use(express.json());
server.use(cors())

server.post('/register', register);

db.sync()
server.listen(4000, () => console.log('===============  Up on 4000  ==============='));