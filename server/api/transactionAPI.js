const Transaction = require("../models/Transaction");
const router = require("express").Router();


router.post("/", function(req, res) { 

   const transaction = req.body; 
   Transaction.createTransaction(transaction, function(err, newTransaction) {
      if (err) {
         res.status(400).send(err);
      } else {
         res.status(201).json(newTransaction);
      }
   });
});


router.get("/", function(req, res) { 
   const currentUserId = 1;
   ChatRoom.getTransactionsById(currentUserId, function(err, newChatRooms) {
      if (err) {
         res.status(400).send(err);
      } else {
         res.json(newChatRooms);
      }
   });
});


module.exports = router;
