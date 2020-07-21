import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "../components/Themed";
import { useSelector } from "react-redux";
import * as Location from "expo-location";

const calcCrow = (lat1, lon1, lat2, lon2) => {
  const R = 6371; // km
  const nmPerKm = 0.6214;
  var dLat = toRad(lat2 - lat1);
  var dLon = toRad(lon2 - lon1);
  var lat1 = toRad(lat1);
  var lat2 = toRad(lat2);

  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c;
  return d * nmPerKm;
};

// Converts numeric degrees to radians
function toRad(Value) {
  return (Value * Math.PI) / 180;
}

export default function HarbourDetail() {
  const { activeHarbour } = useSelector((state) => state);
  const [userLocation, setUserLocation] = useState();
  const [errorMsg, setErrorMsg] = useState(null);

  let locationWatcher;
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
      }

      let location = await Location.getCurrentPositionAsync({});
      setUserLocation(location);
    })();
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {activeHarbour?.name} (
        {calcCrow(
          Number(activeHarbour?.lat),
          Number(activeHarbour?.lng),
          Number(userLocation?.coords?.latitude),
          Number(userLocation?.coords?.longitude)
        )}
        )
      </Text>
      <Text style={styles.title}>
        xx
        {JSON.stringify(userLocation)}xx
      </Text>
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
