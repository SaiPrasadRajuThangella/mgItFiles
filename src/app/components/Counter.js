import { View, Text, Button, TextInput, Touchable, TouchableOpacity } from "react-native";
import React, { useReducer, useState } from "react";
import { FlatList } from "react-native-web";

const initialState = {
  todos:[]
};
const reducer = (state, action) => {
  switch(action.type){
    case "ADD_TODO": return {
      todos:[
        ...state.todos,{id: Date.now().toString(), text:action.payload}
      ]
    }
    case "REMOVE_TODO":return{
      todos: state.todos.filter(todo=>todo.id!==action.payload)
    }
    default: return state

  }
};
const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [inputValue,setInputValue] =  useState("")
  const handleSubmit=()=>{};
  return (
    <View>
        <TextInput placeholder="inputValue" onChangeText={setInputValue}/>
        <Button title="add todo" onPress={handleSubmit}/>

        <FlatList data={state.todos} keyExtractor={(item)=>item.id} renderItem={({item})=>(
          <View>
                <Text>{item.text}</Text>
                <TouchableOpacity  onPress={removeTodo}/>
          </View>
        )}/>
        
    </View>
  );
};

export default Counter;
