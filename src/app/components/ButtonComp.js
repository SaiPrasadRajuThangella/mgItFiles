import { View, Text, Pressable, Image, StyleSheet } from "react-native";
import React from "react";
// import { blue } from "react-native-reanimated/lib/typescript/Colors";
import { Colors } from "react-native/Libraries/NewAppScreen";
const ButtonComp = () => {
    return (
        <View>
      <Text style={styles.container}>lets see some images</Text>
      <Image
        source={{
            uri: "https://picsum.photos/200/300",
        }}
        style={{ width: 200, height: 300 }}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  //   flex: 1,

    fontSize: 50,
    color: "blue",
    backgroundColor: "grey",
  },
});
export default ButtonComp;
