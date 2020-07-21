import React, { useEffect } from "react";
import { StyleSheet, Dimensions, Button } from "react-native";

import { Text, View } from "../components/Themed";
import MapView, { Marker } from "react-native-maps";
import { useSelector, useDispatch } from "react-redux";
import { setActiveHarbour } from "../src/redux/harbours";

import SlidingUpPanel from "rn-sliding-up-panel";

import HarbourDetail from "./HarbourDetail";

export default function MapScreen() {
  const { harbours, activeHarbour } = useSelector((state) => state);
  const dispatch = useDispatch();
  let _panel;
  useEffect(() => {
    activeHarbour && _panel.show({ toValue: 250, velocity: 0 });
  }, [activeHarbour]);
  return (
    <View style={styles.container}>
      <MapView style={styles.mapStyle} showsUserLocation={true}>
        {harbours.map((harbour) => (
          <Marker
            coordinate={{ latitude: harbour.lat, longitude: harbour.lng }}
            key={harbour.id}
            pinColor={activeHarbour?.id === harbour.id ? "green" : "red"}
            onPress={() => {
              dispatch(setActiveHarbour(harbour));
            }}
          />
        ))}
      </MapView>
      <SlidingUpPanel
        ref={(c) => (_panel = c)}
        onBottomReached={() => dispatch(setActiveHarbour(null))}
      >
        <HarbourDetail />
      </SlidingUpPanel>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
