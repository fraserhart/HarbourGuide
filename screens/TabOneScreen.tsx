import * as React from "react";
import { StyleSheet } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { ScrollView, Button } from "react-native";
import { useSelector } from "react-redux";

export default function TabOneScreen() {
  const { harbours } = useSelector((state) => state);

  return (
    <View style={styles.container}>
      <Button title="Show panel" onPress={() => _panel.show()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
