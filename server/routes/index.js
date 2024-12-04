const express = require("express");
const router = express.Router();

//we should go to ItemAPI when client use /api/items
router.use("/items", require("../api/ItemAPI")); // "/api/items" 경로로 라우팅
router.use("/chatRoom", require("../api/chatAPI")); 
router.use("/users", require("../api/UserAPI")); 

module.exports = router;
