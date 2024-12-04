import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import "./ItemList.css";
import ItemLogo from '../components/Logo';
import VerticalBar from '../components/VerticalBar';
import ChatRoomCard from '../components/ChatRoomCard';

function ChatRoomList() {

    const navigate = useNavigate();

    const [chatrooms, setChatrooms] = useState([]);


    useEffect(() => {
    axios
        .get("http://localhost:3001/api/chatRoom")
        .then((response) => {
            setChatrooms(response.data); // 아이템 데이터를 상태에 저장
        })
        .catch((err) => {
            console.log("??");
            alert("??");
        });
    }, []); // 빈 배열을 넣어 한 번만 실행되게 함

    return (
        <div>
        <VerticalBar />
        <div id="back">
            <ItemLogo />
            <div id="cardBox">
                {chatrooms.map((chatroom) => (
                    <ChatRoomCard 
                    name = {chatroom.Room_name}
                    onClick = {()=>{
                        navigate(`../ChatRoom/${chatroom.Room_id}/${chatroom.Item_id}`);
                    }}
                    />
                ))}
            </div>
        </div>
        </div>
    );
}
export default ChatRoomList;

