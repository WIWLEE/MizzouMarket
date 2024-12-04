const db = require("../config/db");

const User = {

    getCurrentUser: function(callback) {
        const query = "SELECT * FROM User WHERE User.User_id = 1";
        db.query(query, function(err, results) {
           if (err) {
              callback(err, null);
           } else {
               callback(null, results);
           }
        });
     },
}

module.exports = User;