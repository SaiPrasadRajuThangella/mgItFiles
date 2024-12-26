import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

const colors = ["red", "yellow", "green", "blue"];

const Colorpicker = () => {
  const [bg, setBg] = useState("red ");
  // const changeBG = (e)=>{
  //     console.log(e.target.value)
  // }
  return (
    <View style={{ backgroundColor: bg }}>
      <Text>Pick a Color</Text>
      <View style={styles.container}>
        {colors.map((color) => {
          return (
            <TouchableOpacity
              style={[styles.ColorBox, { backgroundColor: color }]}
              key={color}
              onPress={() => setBg(color)}
            />
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex:1,
    flexDirection: "row",
    gap: 10,
    // borderWidth:10
  },
  ColorBox: {
    height: 100,
    width: 100,
    borderRadius: 50,
    // backgroundColor: "red",
  },
});

export default Colorpicker;
