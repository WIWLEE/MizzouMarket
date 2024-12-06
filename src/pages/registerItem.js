import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./registerItem.css";
import CategoryButton from "../components/CategoryButton";

function RegisterItem() {
  const navigate = useNavigate();
  const logined_user_id = 1;

  let [formData, setFormData] = useState({
    Description: "",
    Price: 0,
    Date_registered: new Date().toISOString().slice(0, 19).replace('T', ' '), //To convert Date 
    Item_image: "",
    Is_sold: 0,
    Owner_id : logined_user_id,
    Category : [],
  });

   const [selectedCategories, setSelectedCategories] = useState(new Set()); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value, Date_registered: new Date().toISOString().slice(0, 19).replace('T', ' ')});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postItem();
  };

  const handleCategoryClick = (category, e) => {
    e.preventDefault();
    const updatedCategories = new Set(selectedCategories);
    if (updatedCategories.has(category)) {
      updatedCategories.delete(category); 
    } else {
      updatedCategories.add(category); 
    }
    setSelectedCategories(updatedCategories);
    setFormData({ ...formData, Category: Array.from(updatedCategories) });
  };

  const postItem = () => {
    fetch("http://localhost:3001/api/items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("New item created:", data);
        alert("Item registered successfully!");
        navigate("/"); // 등록 후 홈으로 이동
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
        alert("Failed to register the item." + error);
      });
  };

  return (
    <div id="back-register">
      <h1>Register Item</h1>
      <form onSubmit={handleSubmit}>
        <div id="formCenter">
          <label htmlFor="Description">Description:</label>
          <input
            type="text"
            id="Description"
            name="Description"
            value={formData.Description}
            onChange={handleChange}
            required
          />
        </div>
        <br />

        <div id="formCenter">
          <label htmlFor="Price">Price:</label>
          <input
            type="number"
            id="Price"
            name="Price"
            value={formData.Price}
            onChange={handleChange}
            required
          />
        </div>
        <br />

        <div id="formCenter">
          <label htmlFor="Item_image">Image URL:</label>
          <input
            type="url"
            id="Item_image"
            name="Item_image"
            value={formData.Item_image}
            onChange={handleChange}
          />
        </div>
        <br />

        <div id="formCenter">
        <CategoryButton
        category="Books"
        onClick={(e) => handleCategoryClick("BOOK", e)}
        isSelected={selectedCategories.has("BOOK")}
        />
        <CategoryButton
        category="Electronics"
        onClick={(e) => handleCategoryClick("ELECTRONICS", e)}
        isSelected={selectedCategories.has("ELECTRONICS")}
        />
        <CategoryButton
        category="Clothes"
        onClick={(e) => handleCategoryClick("CLOTHES", e)}
        isSelected={selectedCategories.has("CLOTHES")}
        />
         <CategoryButton
        category="Refrigerator"
        onClick={(e) => handleCategoryClick("REFRIGERATOR", e)}
        isSelected={selectedCategories.has("REFRIGERATOR")}
        />
         <CategoryButton
        category="Laptop"
        onClick={(e) => handleCategoryClick("LAPTOP", e)}
        isSelected={selectedCategories.has("LAPTOP")}
        />
         <CategoryButton
        category="ETC"
        onClick={(e) => handleCategoryClick("ETC", e)}
        isSelected={selectedCategories.has("ETC")}
        />
        </div>
        <div id="formCenter">
          <button className="basicButton" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default RegisterItem;
