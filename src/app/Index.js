import { View, Text } from "react-native";
import React from "react";
import Greet from "./components/Greet";
import ButtonComp from "./components/ButtonComp";
import DynamicContent from "./components/DynamicContent";
import ListData from "./components/ListData";
import ParentComponent from "../../ParentComponent";
import Colorpicker from "./Colorpicker";
import Todo from "./Todo";

const Index = () => {
  return (
    <View>
    
      {/* <Text>Index</Text>
      <Greet />
      <ButtonComp/>
      <DynamicContent/> */}
      {/* <ListData/> */}
      {/* <ParentComponent/> */}
       {/* <Colorpicker/> */}
       <Todo/>
    </View>
  );
};

export default Index;
