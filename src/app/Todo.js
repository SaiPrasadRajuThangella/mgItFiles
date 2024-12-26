import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native";
import { Button, FlatList } from "react-native";

const Todo = () => {
  const [text, setText] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTodo = () => {
    if(text.trim()){
        setTasks([...tasks, { id: Date.now().toString(), text }]);
        setText("");
    }
  };
  const handleSubmit = () => {
    addTodo();
  };

  const removeTodo = (id)=>{
    setTasks(tasks.filter((tasks)=> tasks.id !== id))

  }

  const renderTodo = ({ item }) => {
    return(<TouchableOpacity
        onPress={()=>removeTodo(item.id)}
        style={styles.todoItem}
      >
        <Text style={styles.todoItem}>{item.text}</Text>
      </TouchableOpacity>)
  };
  return (
    <View>
      <Text style={styles.header}>Todo App</Text>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={setText}
        placeholder="Add a new Tasks"
        onSubmitEditing={handleSubmit}
        returnKeyType="done"
      />

      <Button title={"Add tasks"} onPress={addTodo} />

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={renderTodo}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  todoItem: {
    padding: 15,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  todoText: {
    fontSize: 18,
  },
});
export default Todo;
