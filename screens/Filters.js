import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "../components/Themed";
import { useSelector } from "react-redux";

export default function Filters() {
  const { activeHarbour } = useSelector((state) => state);
  const { filters } = useSelector((state) => state);

  useEffect(() => {}, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Filter Harbours</Text>
      <Text>Water</Text>
      <Text>Power</Text>
      <Text>ATM</Text>
      <Text>Swimming</Text>
      <Text>Shopping</Text>
      <Text>Nightlife</Text>
      <Text>Restaurants</Text>
      <Text>Peach and Quiet</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(255,255,255,.8)",
    top: 10,
    width: "90%",
    height: "90%",
    position: "absolute",
    zIndex: 9,

    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
