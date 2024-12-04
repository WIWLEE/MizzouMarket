import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import ItemLogo from '../components/Logo';
import VerticalBar from '../components/VerticalBar';
import ItemCard from '../components/ItemCard';
import "./ItemDetail.css";


function ItemDetail() {
    const { id } = useParams();

    const navigate = useNavigate();


   const [item, setItem] = useState([]);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);

   useEffect(() => {
    setLoading(true); // 요청 전 로딩 상태 설정
    axios
       .get(`http://localhost:3001/api/items/get/${id}`)
       .then((response) => {
          console.log("API Response Data:", response.data);
          setItem(response.data[0]); // 데이터 설정
          setLoading(false);
       })
       .catch((err) => {
          console.error("Error fetching item data:", err);
          setError("Error fetching item details");
          setLoading(false);
       });
 }, []); // id가 변경될 때마다 다시 요청


 const createChatRoom = (item_id, buyer_id, seller_id, item_description) => {
    fetch(`http://localhost:3001/api/chatRoom`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json', // JSON 형식으로 데이터 전송
        },
        body: JSON.stringify({Item_id: `${item_id}`, Buyer_id: `${buyer_id}`, Room_name: `Room_${item_description}` , Seller_id : `${seller_id}`}),
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Create failed');
            }
            return response.json();
        })
        .then(data => {
            const inserted_id = data.insertId; 
            navigate(`../ChatRoom/${inserted_id}/${item_id}`); 
            alert("ChatRoom Created");
        })
        .catch(error => {
            console.error(error); // 오류를 콘솔에 기록
            alert('Create failed');
        });
};


    return (
        <div id="item-detail-container">
            <VerticalBar />
            <div id="item-detail-content">
                <div id="item-detail-box">
                    <img src={item.Item_image} id="item-image" />
                    <div id="item-details">
                        <h1>{item.Description}</h1>
                        <p><strong>Price:</strong> {item.Price}</p>
                        <p><strong>Registered on:</strong> {item.Date_registered}</p>
                        <div id="owner-info">
                            <img src={item.Profile_image} alt={item.Nickname} id="owner-image" />
                            <p><strong>Owner:</strong> {item.Nickname}</p>
                        </div>
                        <button className="chat__button"   onClick = {()=>{
                            createChatRoom(id,1,item.User_Id, item.Description); }}>Create Chatroom</button>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default ItemDetail;
