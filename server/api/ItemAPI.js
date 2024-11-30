const Item = require("../models/Item");
const router = require("express").Router();

// Get list of all items in the database, when client use get /api/items
router.get("/", function(req, res) { 
   Item.getAllItems(function(err, items) {
      if (err) {
         res.status(400).send(err);
      } else {
         res.json(items);
      }
   });
});

// Add a new item to the database,  when client use post /api/items
router.post("/", function(req, res) { 
   const item = req.body;
   Item.createItem(item, function(err, newItem) {
      if (err) {
         res.status(400).send(err);
      } else {
         res.status(201).json(newItem);
      }
   });
});

module.exports = router;
