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

   const [items, setItems] = useState([]);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);

   useEffect(() => {
      // API로부터 데이터 가져오기
      axios
         .get("http://localhost:3001/api/items")
         .then((response) => {
            setItems(response.data); // 아이템 데이터를 상태에 저장
            setLoading(false); // 로딩 상태 업데이트
         })
         .catch((err) => {
            setError("Error fetching items"); // 에러 메시지 설정
            setLoading(false); // 로딩 상태 업데이트
         });
   }, []); // 빈 배열을 넣어 한 번만 실행되게 함
   
    const getAndLoadItemByCategory = (category) => {
      setLoading(true); // 새로운 요청 전 로딩 상태로 전환
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

   //검색기능
// 검색 기능 수정
const handleSearch = (query) => {
   
   setLoading(true);
   axios
      .get(`http://localhost:3001/api/items/search/search?query=${query}`)  // 경로 수정
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
      return <p>Loading items</p>; // 데이터 로딩 중 메시지
   }

   if (error) {
      return <p>{error}</p>; // 에러 발생 시 메시지
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