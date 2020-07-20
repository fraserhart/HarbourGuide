import * as React from "react";
import { StyleSheet, Dimensions } from "react-native";

import { Text, View } from "../components/Themed";
import MapView, { Marker } from "react-native-maps";
import { useSelector, useDispatch } from "react-redux";
import { setActiveHarbour } from "../src/redux/harbours";

export default function MapScreen() {
  const { harbours, activeHarbour } = useSelector((state) => state);
  const dispatch = useDispatch();
  alert(activeHarbour);
  return (
    <View style={styles.container}>
      <MapView style={styles.mapStyle} showsUserLocation={true}>
        {harbours.map((harbour) => (
          <Marker
            coordinate={{ latitude: harbour.lat, longitude: harbour.lng }}
            title={harbour.name}
            description={harbour.description}
            key={harbour.id}
            pinColor="green"
            onPress={() => {
              dispatch(setActiveHarbour(harbour.id));
            }}
          />
        ))}
      </MapView>
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
