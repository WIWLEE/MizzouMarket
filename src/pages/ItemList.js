import React, { useState, useEffect } from "react";
import axios from "axios";

function ItemList() {
   const [items, setItems] = useState([]);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);

   // 컴포넌트가 마운트될 때 데이터를 가져오는 함수
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

   if (loading) {
      return <p>Loading items...</p>; // 데이터 로딩 중 메시지
   }

   if (error) {
      return <p>{error}</p>; // 에러 발생 시 메시지
   }

   return (
      <div>
         <h1>Items List</h1>
         <ul>
            {items.map((item) => (
               <li key={item.Item_id}>
                  <p>Price: {item.Price}</p>
                  <p>Description: {item.Description}</p>
                  <p>Owner ID: {item.Owner_id}</p>
                  <p>Date Registered: {item.Date_registered}</p>
                  <p>Sold: {item.Is_sold ? "Yes" : "No"}</p>
                  <hr />
               </li>
            ))}
         </ul>
      </div>
   );
}

export default ItemList;