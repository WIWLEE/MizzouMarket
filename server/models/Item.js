const db = require("../config/db");

const Item = {
    getAllItems: function(callback) {
        const query = "SELECT * FROM Item WHERE Item.Is_sold=0 ORDER BY Item.Item_id DESC";
        db.query(query, function(err, results) {
           if (err) {
              callback(err, null);
           } else {
              callback(null, results);
           }
        });
     },

     getItemsByCategory: function(category, callback){
      const query = `
      SELECT * 
      FROM Item
      JOIN Item_Category 
      ON Item.Item_id = Item_Category.Item_id
      WHERE Item_Category.Category = ? AND Item.Is_sold=0
      ORDER BY Item.Item_id DESC`;
         db.query(query, [category], function(err, results) {
            if (err) {
               callback(err, null);
            } else {
               callback(null, results);
            }
         });
     },

     getAItemById : function(itemId, callback){
      const query = `
      SELECT ITEM.Description, ITEM.Price, ITEM.Item_image, ITEM.Date_registered, USER.Nickname, USER.User_Id, USER.Profile_image
      FROM ITEM
      JOIN USER
      ON ITEM.Owner_id = USER.User_id
      WHERE ITEM.Item_id= ? AND Item.Is_sold=0
      ORDER BY Item.Item_id DESC;`
         db.query(query, [itemId], function(err, results) {
            if (err) {
               callback(err, null);
            } else {
               callback(null, results);
            }
         });
     },
  
     createItem: function(item, callback) {
      const query1 = `
          INSERT INTO Item (Price, Description, Date_registered, Owner_id, Is_sold, Item_image)
          VALUES (?, ?, ?, ?, ?, ?)
      `;
      const query2 = `
          INSERT INTO Item_category (Item_id, Category)
          VALUES (?, ?)
      `;
  
      // 첫 번째 쿼리 실행 (Item 테이블에 데이터 삽입)
      db.query(query1, [item.Price, item.Description, item.Date_registered, item.Owner_id, item.Is_sold, item.Item_image], function(err, result) {
         if (err) {
            callback(err, null); // 오류가 발생하면 롤백
         }

         // 삽입된 Item의 ID 가져오기 (자동 생성된 ID)
         const itemId = result.insertId;

         item.Category.map(category => {
         // 두 번째 쿼리 실행 (Item_category 테이블에 데이터 삽입)
         db.query(query2, [itemId, category], function(err, result) {
            if (err) {
               return callback(err, null); 
            }
            });
         });

         callback(null, result);
      });
   },
  

     searchItem: function(SearchedValue, callback){
      const query = `
          SELECT ITEM.*
          FROM ITEM
          WHERE Description LIKE ? AND Item.Is_sold=0
          ORDER BY Item.Item_id DESC
      `;
      db.query(query, [`%${SearchedValue}%`], function(err, result){
          if (err) {
              callback(err, null);
          } else {
              callback(null, result);
          }
      });
   },


      transactionItem : function(itemId, callback){
         const query= `
            UPDATE Item
            SET Is_sold = 1
            WHERE Item_id = ?;
         `;

         db.query(query, [itemId], function(err, result){
            if (err) {
               callback(err, null);
           } else {
               callback(null, result);
           }
         });
      },
  
};

module.exports = Item;