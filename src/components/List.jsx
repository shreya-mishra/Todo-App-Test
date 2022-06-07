import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

const List = ({ list, deleteHandler, setSelectedObject }) => {
  return (
    <View style={styles.listContainer}>
      {list.map((item) => (
        <View style={styles.operations}>
          <Text style={styles.goal}>{item.goal}</Text>
          <TouchableOpacity
            style={styles.edit}
            onPress={() => {
              setSelectedObject({
                key: item.key,
                goal: item.goal
              });
            }}
          >
            <Text>✍️</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.delete}
            onPress={() => deleteHandler(item.key)}
          >
            <Text>❌</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    marginTop: 20,
    textAlign: "center"
  },
  goal: {},
  operations: {
    fisplay: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20
  },
  delete: {
    borderWidth: 2,
    marginLeft: 20,
    fontSize: 20
  },
  edit: {
    borderWidth: 2,
    marginLeft: 20,
    fontSize: 20
  }
});

export default List;
