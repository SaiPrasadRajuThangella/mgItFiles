import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

const Product = ({ details }) => {
  // console.log(details)
  return (
    <View style={styles.productContainer}>
      <View style={styles.imageContainer}>
        <Image style={styles.productImage} source={{ uri: details.productImage }} />
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.productName}>{details.productName}</Text>
        <Text style={styles.productPrice}>{`$ ${details.productPrice}`}</Text>
        <Text style={styles.featuredTag}>
          {details.isFeatured ? "Featured" : "Not Featured"}
        </Text>
        <Text style={styles.productDescription}>{details.productDescription}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    productContainer: {
      flexDirection: "row",
      alignItems:"center",
      padding: 16,
      borderColor: "#ddd",
      borderWidth: 1,
      borderRadius: 8,
      marginBottom: 16,
    },
    imageContainer: {
      flex: 1,
      marginRight: 16,
    },
    productImage: {
      width: 120,
      height: 120,
      borderRadius: 8,
    },
    contentContainer: {
      flex: 2,
    },
    productName: {
      fontSize: 18,
      fontWeight: "bold",
      marginBottom: 4,
    },
    productPrice: {
      fontSize: 16,
      color: "#666",
      marginBottom: 4,
    },
    featuredTag: {
      backgroundColor: "#f0f0f0",
      padding: 4,
      borderRadius: 4,
      marginBottom: 8,
    },
    productDescription: {
      fontSize: 14,
    },
  });

  export default Product;