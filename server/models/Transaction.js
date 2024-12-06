const db = require("../config/db");

const Transaction = {

     getTransactionsById : function(userId, callback){
      const query = `
      SELECT TRANSACTION.*
      FROM TRNASACTION
      JOIN TRNASACTION2
      ON TRANSACTION.Item_id = TRANSACTION2.Item_id
      WHERE TRANSACTION.Buyer_id = ? OR TRANSACTION2.Seller_id = ?
      ORDER BY TRANSACTION.Date_of_transaction DESC;`
         db.query(query, [userId, userId], function(err, results) {
            if (err) {
               callback(err, null);
            } else {
               callback(null, results);
            }
         });
     },
  
     createTransaction: function(transaction, callback) {
      const query1 = `
          INSERT INTO Transaction (Date_of_transaction, Item_id, Buyer_id)
          VALUES (?, ?, ?)
      `;
      const query2 = `
          INSERT IGNORE INTO Transaction2 (Item_id, Seller_id)
          VALUES (?, ?)
      `;
  
      db.query(query1, [transaction.Date_of_transaction, transaction.Item_id, transaction.Buyer_id], function(err, result) {
         if (err) {
            callback(err, null); 
         }

         db.query(query2, [transaction.Item_id, transaction.Seller_id], function(err, result) {
            if (err) {
               return callback(err, null); 
            }
         });

         callback(null, result);
      });
   },
};

module.exports = Transaction;