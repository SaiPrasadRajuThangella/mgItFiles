import { View, Text } from "react-native";
import React from "react";
import { FlatList } from "react-native";
import Product from "./Product";

const ParentComponent = () => {
  const products = [
    {
      "productName": "Wireless Headphones",
      "productPrice": 49.99,
      "productImage": "https://picsum.photos/200/300?random=1",
      "productDescription": "High-quality wireless headphones with noise cancellation.",
      "isFeatured": true
    },
    {
      "productName": "Smartwatch",
      "productPrice": 79.99,
      "productImage": "https://picsum.photos/200/300?random=2",
      "productDescription": "Stylish smartwatch with fitness tracking and notifications.",
      "isFeatured": false
    },
    {
      "productName": "Bluetooth Speaker",
      "productPrice": 29.99,
      "productImage": "https://picsum.photos/200/300?random=3",
      "productDescription": "Portable Bluetooth speaker with rich bass and long battery life.",
      "isFeatured": true
    },
    {
      "productName": "Laptop Stand",
      "productPrice": 19.99,
      "productImage": "https://picsum.photos/200/300?random=4",
      "productDescription": "Ergonomic laptop stand for better posture and ventilation.",
      "isFeatured": false
    },
    {
      "productName": "Gaming Mouse",
      "productPrice": 25.99,
      "productImage": "https://picsum.photos/200/300?random=5",
      "productDescription": "High-precision gaming mouse with customizable RGB lighting.",
      "isFeatured": false
    },
    {
      "productName": "Wireless Charger",
      "productPrice": 15.99,
      "productImage": "https://picsum.photos/200/300?random=6",
      "productDescription": "Fast wireless charger compatible with all Qi-enabled devices.",
      "isFeatured": true
    },
    {
      "productName": "Backpack",
      "productPrice": 39.99,
      "productImage": "https://picsum.photos/200/300?random=7",
      "productDescription": "Durable and spacious backpack for work, school, or travel.",
      "isFeatured": false
    },
    {
      "productName": "Desk Lamp",
      "productPrice": 22.49,
      "productImage": "https://picsum.photos/200/300?random=8",
      "productDescription": "Adjustable LED desk lamp with multiple brightness settings.",
      "isFeatured": true
    },
    {
      "productName": "Coffee Maker",
      "productPrice": 59.99,
      "productImage": "https://picsum.photos/200/300?random=9",
      "productDescription": "Compact coffee maker with programmable brewing options.",
      "isFeatured": false
    },
    {
      "productName": "Fitness Tracker",
      "productPrice": 35.99,
      "productImage": "https://picsum.photos/200/300?random=10",
      "productDescription": "Lightweight fitness tracker with heart rate monitoring.",
      "isFeatured": true
    }
  ]
  
  return (
     <FlatList data={products} renderItem={({item})=> <Product details={item}/>}/>
  );
};



export default ParentComponent;
