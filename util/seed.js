const { Product, User, Cart } = require("./models");

const products = [
  { name: "Hamster", price: "12.99" },
  { name: "Parakeet", price: "58.75" },
  { name: "Goat", price: "22.89" },
  { name: "Snek", price: "3.98" },
  { name: "Gerbil", price: "1.00" },
];

const users = [
  { username: "Billy", password: "Bobby" },
  { username: "Bobby", password: "Billy" },
  { username: "Tommy", password: "Timmy" },
  { username: "Timmy", password: "Tommy" },
  { username: "TimTom", password: "BillBob" },
];

const cart = [
  { userId: "2", productId: "1"},
  { userId: "3", productId: "2"},
  { userId: "4", productId: "3"},
  { userId: "5", productId: "4"},
  { userId: "1", productId: "5"},
  { userId: "2", productId: "1"},
  { userId: "3", productId: "2"},
  { userId: "4", productId: "3"},
  { userId: "2", productId: "4"},
  { userId: "1", productId: "5"},
  { userId: "5", productId: "2"},
]

const seed = async () => {
  try {
    await Product.bulkCreate(products);
    await User.bulkCreate(users);
    await Cart.bulkCreate(cart);
  } catch (err) {
    console.log(err);
  }
};

module.exports = seed;
