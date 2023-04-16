const Sequelize = require("sequelize");
require("dotenv").config();

const CONNECTION_STRING = process.env.CONNECTION_STRING;

//db in place of sequelize
const db = new Sequelize(CONNECTION_STRING, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

//exporting without curly braces means you can import without curly braces
//only works for single export files
module.exports = db;
