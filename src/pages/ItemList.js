import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import ItemLogo from '../components/Logo';
import VerticalBar from '../components/VerticalBar';
import CategoryButton from '../components/CategoryButton';
import ItemCard from '../components/ItemCard';
import SearchBar from '../components/SearchBar';
import "./ItemList.css";



function ItemList() {

   const navigate = useNavigate();
   const current_user_id = 1;

   const [items, setItems] = useState([]);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);

   useEffect(() => {
  
      axios
         .get("http://localhost:3001/api/items")
         .then((response) => {
            setItems(response.data); 
            setLoading(false); 
         })
         .catch((err) => {
            setError("Error fetching items"); 
            setLoading(false); 
         });
   }, []); 
   
    const getAndLoadItemByCategory = (category) => {
      setLoading(true); 
      axios
         .get(`http://localhost:3001/api/items/${category}`)
         .then((response) => {
            setItems(response.data);
            setLoading(false);
         })
         .catch((err) => {
            setError("Error fetching category items");
            setLoading(false);
         });
   };


//Search function
const handleSearch = (query) => {
   
   setLoading(true);
   axios
      .get(`http://localhost:3001/api/items/search/search?query=${query}`)  
      .then((response) => {
         setItems(response.data);
         setLoading(false);
      })
      .catch((err) => {
         setError("Error searching items");
         setLoading(false);
      });
};


   if (loading) {
      return <p>Loading items</p>; 
   }

   if (error) {
      return <p>{error}</p>; 
   }

   return (
      <div>
         <VerticalBar />
         <div id="back">
            <ItemLogo />
            <div id="categoryBlock">
               <CategoryButton 
                  category = "Electronics"
                  onClick = {() => getAndLoadItemByCategory("ELECTRONICS")}
               />
               <CategoryButton 
                  category = "Books"
                  onClick = {() => getAndLoadItemByCategory("BOOK")}
               />
               <CategoryButton 
                  category = "Clothes"
                  onClick = {() => getAndLoadItemByCategory("CLOTHES")}
               />
               <CategoryButton 
                  category = "Refrigerator"
                  onClick = {() => getAndLoadItemByCategory("REFRIGERATOR")}
               />
               <CategoryButton 
                  category = "Laptop"
                  onClick = {() => getAndLoadItemByCategory("LAPTOP")}
               />
               <CategoryButton 
                  category = "ETC"
                  onClick = {() => getAndLoadItemByCategory("ETC")}
               />
            </div>
            <SearchBar onSearch={handleSearch} />
            <div id="cardBox">
               {items.map((item) => (
                  <ItemCard 
                     imageUrl = {item.Item_image}
                     name = {item.Description}
                     price = {item.Price}
                     onClick = {()=>{
                        navigate(`./ItemDetail/${item.Item_id}`);
                     }}
                     />
               ))}
            </div>
         </div>
         <div>
            <button className="AddItemButton" onClick = {() => navigate(`./AddItem`)}>Register Item</button>
         </div>
      </div>
   );

}


export default ItemList;