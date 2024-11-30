const db = require("../config/db");

const Item = {
    getAllItems: function(callback) {
        const query = "SELECT * FROM Item";
        db.query(query, function(err, results) {
           if (err) {
              callback(err, null);
           } else {
              callback(null, results);
           }
        });
     },
  
     createItem: function(item, callback) {
        const query = `
           INSERT INTO Item (Price, Description, Date_registered, Owner_id, Is_sold)
           VALUES (?, ?, ?, ?, ?)
        `;
        const params = [item.Price, item.Description, item.Date_registered, item.Owner_id, item.Is_sold];
        db.query(query, params, function(err, result) {
           if (err) {
              callback(err, null);
           } else {
              callback(null, { Item_id: result.insertId, ...item });
           }
        });
     }
  };

module.exports = Item;