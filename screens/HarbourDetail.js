import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "../components/Themed";
import { useSelector } from "react-redux";
import * as Location from "expo-location";
import {
  bearing,
  calculateAndFormatDistanceAsTheCrowFlies,
} from "../utils/utils";

export default function HarbourDetail() {
  const { activeHarbour } = useSelector((state) => state);
  const [userLocation, setUserLocation] = useState();
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
      }
      let location = await Location.getCurrentPositionAsync({});
      setUserLocation(location);
    })();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{activeHarbour?.name}</Text>
      <Text>
        {calculateAndFormatDistanceAsTheCrowFlies(
          Number(activeHarbour?.lat),
          Number(activeHarbour?.lng),
          Number(userLocation?.coords?.latitude),
          Number(userLocation?.coords?.longitude)
        )}{" "}
        NM |{" "}
        {bearing(
          Number(userLocation?.coords?.latitude),
          Number(userLocation?.coords?.longitude),
          Number(activeHarbour?.lat),
          Number(activeHarbour?.lng)
        )}
        °
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
