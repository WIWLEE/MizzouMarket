import VerticalBar from '../components/VerticalBar';
import ItemLogo from '../components/Logo';
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./myPage.css";

// MyPage component
const MyPage = () => {

    const [user, setUser] = useState({
      Profile_image : "https://raw.githubusercontent.com/WIWLEE/ImageStorage/master/img/image-20241202235746970.png",
      Nickname : "Jay",
      Fname : "Jihyun",
      Lname : "Lee"
    });
    const transactions = [
      {
        Item_name : "Sample Item",
        Seller_name : "Sample_Seller"
      }, 
      {
        Item_name : "Sample Item 2",
        Seller_name : "Sample_Seller 2"
      }, 
    ]
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
 
    useEffect(() => {
      // API로부터 데이터 가져오기
      axios
         .get("http://localhost:3001/api/users/currentUser")
         .then((response) => {
          const data = response.data[0];
          // alert(JSON.stringify(response.data[0], null, 2));
          setUser({
            Profile_image: data.Profile_image,
            Nickname: data.Nickname,
            Fname: data.Fname,
            Lname: data.Lname,
          });
          setLoading(false); 
         })
         .catch((err) => {
            setError("Error fetching users"); 
            setLoading(false); 
         });

   }, []); 

   if (loading) {
    return <p>Loading Profile</p>; 
 }

 if (error) {
    return <p>{error}</p>; // 에러 발생 시 메시지
 }


  return (
    <div>
    <VerticalBar />
    <ItemLogo />
      <div id="center-back">
      <h2>My Profile</h2>
        <img
          src={user.Profile_image}
          className="profile-image"
        /><br />
        <h3>NickName : {user.Nickname} | Name : {user.Fname} {user.Lname}</h3>
        <br />
        <h2>My Transactions</h2>
        <ul>
          {transactions.map((transaction) => (
            <li className="transactionList" key={transaction.id}>
              <p>Item: {transaction.Item_name}</p>
              <p>Seller: {transaction.Seller_name}</p>
              <button className = "basicButton" >Write a Review</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MyPage;
