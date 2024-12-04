const db = require("../config/db");

const Chatroom = {

   createRoom: function(chatroom, callback) {
      const query1 = `
         INSERT INTO CHATTING_ROOM (Room_name, Item_id, Buyer_id)
         VALUES (?, ?, ?)
      `;
  
      const query2 = `
         INSERT IGNORE INTO CHATTING_ROOM2 (Item_id, Seller_id)
         VALUES (?, ?)
      `;
  
      const params1 = [chatroom.Room_name, chatroom.Item_id, chatroom.Buyer_id];
      const params2 = [chatroom.Item_id, chatroom.Seller_id];
  
      db.query(query1, params1, function(err, result1) {
          if (err) {
              return callback(err, null); // 첫 번째 쿼리에서 에러 발생 시 처리
          }
  
          db.query(query2, params2, function(err, result2) {
            if (err) {
               return callback(err, null); // 두 번째 쿼리에서 에러 발생 시 처리
            }

            callback(null, result1);
          });
      });
  },


  getAllChatrooms: function(currentUserId, callback) {
   const query = `SELECT Chatting_room.Room_id, Chatting_room.Room_name, Chatting_room.Item_id, Chatting_room.Buyer_id, Chatting_room2.Seller_id
    FROM Chatting_room
    JOIN Chatting_room2
    ON Chatting_room.Item_id = Chatting_room2.Item_id
    WHERE Chatting_room.Buyer_id = ? OR Chatting_room2.Seller_id = ?;
    `
   db.query(query, [currentUserId, currentUserId], function(err, results) {
      if (err) {
         callback(err, null);
      } else {
         callback(null, results);
      }
   });
},
}  

module.exports = Chatroom;