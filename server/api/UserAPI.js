const User = require("../models/User");
const router = require("express").Router();


router.get("/currentUser", function(req, res) { 
   User.getCurrentUser(function(err, currentUser) {
      if (err) {
         res.status(400).send(err);
      } else {
         res.json(currentUser);
      }
   })
});

module.exports = router;
