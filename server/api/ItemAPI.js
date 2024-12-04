const Item = require("../models/Item");
const router = require("express").Router();

// Get list of all items in the database, when client use get /api/items
router.get("/", function(req, res) { 
   Item.getAllItems(function(err, items) {
      console.log("!");
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
   if(item.Item_image == ""){
      item.Item_image = "https://raw.githubusercontent.com/WIWLEE/ImageStorage/master/img/image-20241202235746970.png";
   }
   Item.createItem(item, function(err, newItem) {
      if (err) {
         res.status(400).send(err);
      } else {
         res.status(201).json(newItem);
      }
   });
});

router.get("/:itemCategory", function(req, res){
   const category = req.params.itemCategory;
   Item.getItemsByCategory(category, function(err, items){
      if (err) {
         res.status(400).send(err);
      } else {
         res.json(items);
      }
   })
})

router.get("/get/:itemId", function(req, res){
   const itemId = req.params.itemId;
   Item.getAItemById(itemId, function(err, items){
      if (err) {
         res.status(400).send(err);
      } else {
         res.json(items);
      }
   })
})

// 라우터 수정
router.get("/search/search", function(req, res){
   const searchedValue = req.query.query; // 검색어
   Item.searchItem(searchedValue, function(err, items){
       if (err) {
           res.status(400).send(err);
       } else {
           res.json(items); // 검색된 아이템 반환
       }
   });
});

//transaction item
router.put("/transaction/:id", function(req, res){
   const itemId = req.params.id;
   Item.transactionItem(itemId, function(err, items){
      if (err) {
         res.status(400).send(err);
      } else {
         res.json(items);
      }
   })
});

module.exports = router;
