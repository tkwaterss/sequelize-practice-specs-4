const { User } = require("../util/models");

module.exports = {
  register: async (req, res, next) => {
    //if you tactifuly name your key value pairs in your request then you can just enter your body
    try {
      await User.create(req.body);
      res.status(200).send("Created! :)");
    } catch (err) {
      res.status(400).send("OOPSIE-DAISEE");
    }
  },
};
