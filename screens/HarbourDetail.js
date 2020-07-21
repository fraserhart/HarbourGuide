import * as React from "react";
import { StyleSheet } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { ScrollView, Button } from "react-native";
import { useSelector } from "react-redux";

export default function HarbourDetail() {
  const { activeHarbour } = useSelector((state) => state);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{activeHarbour?.name}</Text>
      <Text>{activeHarbour?.description}</Text>
      {/* <Button
        title="Hide"
        onPress={() => {
          _panel.hide();
          dispatch(setActiveHarbour(null));
        }}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
