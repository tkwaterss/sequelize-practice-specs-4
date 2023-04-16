const { Product } = require("./models");

const products = [
  { name: "Hamster", price: "12.99" },
  { name: "Parakeet", price: "58.75" },
  { name: "Goat", price: "22.89" },
  { name: "Snek", price: "3.98" },
  { name: "Gerbil", price: "1.00" },
];

const seed = async () => {
  try {
    await Product.bulkCreate(products);
  } catch (err) {
    console.log(err);
  }
};

module.exports = seed;
