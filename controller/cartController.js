const {Cart, User, Product} = require('../util/models');

module.exports = {
  addToCart: async (req, res) => {
    try {
      const {userId, productId} = req.body
      await Cart.create({userId, productId})
      res.status(200).send("Added to cart")
    }
    catch (err) {
      res.status(400).send('Could not add to car');
    }
  }, 
  checkout: async (req, res) => {
    try {
      const {userId} = req.params
      let cart = await Cart.findAll(
        {
          where: {userId: +userId},
          include: [
            {
              model: Product,
              attributes: ['name', 'price'],
              raw: true,
            },
            {
              model: User,
              attributes: ['username']
            }
          ],
          attributes: ['id']
        }
      )
      let total = 0;
      cart.forEach(item => {
        total += +item.product.price
        console.log(total);
      })
      cart.unshift(total);
      res.status(200).send(cart)
    }
    catch (err) {
      res.status(400).send('cannot checkout')
    }
  }
}
