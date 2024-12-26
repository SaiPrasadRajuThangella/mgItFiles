import { View, Text,Image, StyleSheet } from "react-native";
import React from "react";
import { FlatList } from "react-native";
// import { blue } from "react-native-reanimated/lib/typescript/Colors";

const ListData = () => {
  //   const fruits = ["apple", "banana", "orange"];
  const data = [
    {
      image: "https://picsum.photos/200/300?random=1",
      name: "Product 1",
      rating: 4.5,
      price: 19.99,
    },
    {
      image: "https://picsum.photos/200/300?random=2",
      name: "Product 2",
      rating: 4.2,
      price: 24.99,
    },
    {
      image: "https://picsum.photos/200/300?random=3",
      name: "Product 3",
      rating: 3.8,
      price: 14.99,
    },
    {
      image: "https://picsum.photos/200/300?random=4",
      name: "Product 4",
      rating: 4.9,
      price: 29.99,
    },
    {
      image: "https://picsum.photos/200/300?random=5",
      name: "Product 5",
      rating: 3.5,
      price: 9.99,
    },
  ];

  const renderItem =  ({ item, index }) => (
    <View style={styles.productContainer}>
        <Image style={styles.image} source={{uri: item.image} }/>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.rating}>{item.rating}</Text>
        <Text style={styles.price}>{item.price}</Text>
    </View>
  )

  return (
   <View>
     <View style={{ padding: 20,}}>
      <FlatList
        data={data}
        keyExtractor={(item,index) => index.toString()}
        renderItem={renderItem}
      />
    </View>
   </View>
  );
};


const styles = StyleSheet.create({
    productContainer:{borderColor : "#888" ,borderWidth: 1,
        flex: 1,
        alignItems: "center",
        padding: 10,
        marginBottom: 10,
        backgroundColor: "#fff",
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 5,
    },
    image: {
        width: 200,
        height: 300,
        borderRadius: 10,
      },
      name: {
        fontSize: 18,
        fontWeight: "bold",
        marginTop: 10,
      },
      rating: {
        fontSize: 16,
        color: "#888",
        marginTop: 5,
      },
      price: {
        fontSize: 16,
        color: "#000",
        marginTop: 5,
      },
})

export default ListData;
