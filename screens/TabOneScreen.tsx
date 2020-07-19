import * as React from "react";
import { StyleSheet } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { ScrollView } from "react-native";
import { useSelector } from "react-redux";
export default function TabOneScreen() {
  const { harbours } = useSelector((state) => state);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />

      <ScrollView>
        {harbours.map((harbour, i) => (
          <Text key={i}>
            {"xxxx" +
              i +
              "xxxx" +
              JSON.stringify(harbour) +
              "xxxx" +
              i +
              "xxxx"}
          </Text>
        ))}
      </ScrollView>
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
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
