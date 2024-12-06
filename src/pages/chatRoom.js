import { useParams, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./chatRoom.css"
import axios from "axios";
import VerticalBar from "../components/VerticalBar";

function ChatRoom() {
    const { Chatroom_id, Item_id } = useParams();

    const [Item, setItem] = useState({
        Price: 0,
        Description: "",
        Date_registered: "2024-01-11",
        Owner_id: 1,
        Is_sold: 0,
        Item_image: "",
    });
    const navigate = useNavigate();

    useEffect(() => {

        // Item_id -> is_sold
        axios
            .get(`http://localhost:3001/api/items/get2/${Item_id}`)
            .then((response) => {
                setItem(response.data[0]); // 아이템 설정
            })
            .catch((err) => {
                console.error("Error fetching item data:", err);
            });
    }, [Chatroom_id, Item_id]);




    const transactionItem = (itemId) => {

        // To set isSold = 1
        fetch(`http://localhost:3001/api/items/transaction/${itemId}`, {
            method: 'PUT',
        })
            .then(response => response.json())
            .then(data => {
                console.log('Transaction successful');
            })
            .catch(error => {
                console.log('Transaction failed');
            })
        

        // chatroom id -> buyer id, seller id
        fetch(`http://localhost:3001/api/chatRoom/${Chatroom_id}`)
            .then(response => response.json())
            .then((data) => {

                const transactionData = {
                    Date_of_transaction: new Date().toISOString().slice(0, 19).replace('T', ' '),
                    Item_id: Item_id, 
                    Buyer_id: data[0].Buyer_id || 1,  
                    Seller_id: data[0].Seller_id || 1,  
                };

                // To create Transaction tuple
                fetch(`http://localhost:3001/api/transactions`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(transactionData),  
                })
                .then(response => response.json())
                .then(data => {
                    console.log('Transaction successful');
                    alert('Transaction successful');
                    navigate("/");
                })
                .catch(error => {
                    console.log('Transaction failed');
                });
            })
            .catch((err) => {
                console.log(err);
            });


    };


    if (Item.Is_sold) {
        return (
            <div id="center">
                <VerticalBar />
                Transaction Complete
            </div>
        );
    }

    return (
        <div id="center">
            <VerticalBar />
            <button class="basicButton" onClick={() => { transactionItem(Item_id) }}>Make a Transaction</button>
        </div>
    );
}

export default ChatRoom;