import React, { useEffect, useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

const InputBox = ({
  AddHandler,
  selectedObject,
  setSelectedObject,
  editHandler
}) => {
  const [input, setInput] = useState("");

  useEffect(() => {
    selectedObject?.goal ? setInput(selectedObject?.goal) : setInput("");
  }, [selectedObject]);

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="add your goals"
        value={input}
        onChangeText={setInput}
      />
      <Button
        title={selectedObject ? "Save" : "Add"}
        onPress={() => {
          if (selectedObject) {
            editHandler({ key: selectedObject.key, goal: input });
            setSelectedObject(null);
          } else {
            AddHandler(input);
            setInput("");
          }
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20
  },
  input: {
    borderWdth: 2,
    width: "60%",
    marginRight: 10,
    padding: 10
  }
});
export default InputBox;
