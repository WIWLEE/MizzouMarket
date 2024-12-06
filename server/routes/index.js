const express = require("express");
const router = express.Router();

//we should go to ItemAPI when client use /api/items
router.use("/items", require("../api/ItemAPI")); // "/api/items" 
router.use("/chatRoom", require("../api/chatAPI")); 
router.use("/users", require("../api/UserAPI")); 
router.use("/transactions", require("../api/transactionAPI")); 

module.exports = router;
