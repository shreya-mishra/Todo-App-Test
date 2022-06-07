import React, { useState } from "react";
import { View } from "react-native";
import InputBox from "./components/InputBox";
import List from "./components/List";

const App = () => {
  const [list, setList] = useState([
    {
      key: 1,
      goal: "have to get into it"
    }
  ]);

  const [selectedObject, setSelectedObject] = useState(null);

  const AddHandler = (text) => {
    setList([...list, { key: Math.random(), goal: text }]);
  };

  const deleteHandler = (key) => {
    const filteredList = list.filter((item) => item.key !== key);
    setList(filteredList);
  };

  const editHandler = (selectedObject) => {
    const index = list.findIndex((item) => item.key === selectedObject.key);
    const copy = list;
    console.log(selectedObject);
    copy[index] = {
      key: selectedObject.key,
      goal: selectedObject.goal
    };

    console.log(copy[index]);
    setList(copy);
  };

  return (
    <View>
      <InputBox
        AddHandler={AddHandler}
        selectedObject={selectedObject}
        setSelectedObject={setSelectedObject}
        editHandler={editHandler}
      />
      <List
        list={list}
        deleteHandler={deleteHandler}
        editHandler={editHandler}
        setSelectedObject={setSelectedObject}
        selectedObject={selectedObject}
      />
    </View>
  );
};

export default App;
