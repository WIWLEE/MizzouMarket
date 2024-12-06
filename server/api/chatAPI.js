const ChatRoom = require("../models/Chatroom");
const router = require("express").Router();


router.post("/", function(req, res) { 

   const chatroom = req.body; 
   ChatRoom.createRoom(chatroom, function(err, newChatroom) {
      if (err) {
         res.status(400).send(err);
      } else {
         res.status(201).json(newChatroom);
      }
   });
});


router.get("/", function(req, res) { 
   const currentUserId = 1;
   ChatRoom.getAllChatrooms(currentUserId, function(err, newChatRooms) {
      if (err) {
         res.status(400).send(err);
      } else {
         res.json(newChatRooms);
      }
   });
});

router.get("/:id", function(req, res) { 
  
   const chatRoomId = req.params;
   ChatRoom.getChatroomById(chatRoomId, function(err, newChatRooms) {
      if (err) {
         res.status(400).send(err);
      } else {
         res.json(newChatRooms);
      }
   });
});



module.exports = router;
