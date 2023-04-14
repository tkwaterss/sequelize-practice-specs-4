//bringing in dataTypes from sequelize
const { DataTypes } = require("sequelize");
const db = require("./database");

//name table in singular format, it will add the plural
//It uses that singular string to create foreign relations (userId vs usersId)

module.exports = {
  User: db.define("user", {
    id: {
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    //setting username, setting max length to 20 chars
    username: DataTypes.STRING({length: 20}),
    password: DataTypes.STRING
  }),
  Product: db.define("product", {
    id: {
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER
    },
    name: DataTypes.STRING,
    price: DataTypes.FLOAT
  }),
  Cart: db.define("cart", {
    id: {
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER
    },
  })
};
