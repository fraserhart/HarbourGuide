const toRad = (Value) => {
  return (Value * Math.PI) / 180;
};

const toDegrees = (radians) => {
  return (radians * 180) / Math.PI;
};

const calcCrowInKm = (lat1, lon1, lat2, lon2) => {
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
  return d;
};

const numberWithCommas = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const kmToNm = (distanceInKm) => {
  const nmPerKm = 0.6214;
  return distanceInKm * nmPerKm;
};

const friendlyFormatNumbers = (number) => {
  return number.toFixed(2);
};

export const calculateAndFormatDistanceAsTheCrowFlies = (
  lat1,
  lon1,
  lat2,
  lon2
) => {
  const distanceInKm = calcCrowInKm(lat1, lon1, lat2, lon2);
  const distanceInNm = kmToNm(distanceInKm);
  return numberWithCommas(friendlyFormatNumbers(distanceInNm));
};

const formatBearing = (bearing) => {
  const bearingString = `00${Math.round(bearing).toString()}`;
  return bearingString.substring(bearingString.length - 3);
};

export const bearing = (startLatIn, startLngIn, destLatIn, destLngIn) => {
  let startLat = toRad(startLatIn);
  let startLng = toRad(startLngIn);
  let destLat = toRad(destLatIn);
  let destLng = toRad(destLngIn);

  let y = Math.sin(destLng - startLng) * Math.cos(destLat);
  let x =
    Math.cos(startLat) * Math.sin(destLat) -
    Math.sin(startLat) * Math.cos(destLat) * Math.cos(destLng - startLng);
  let brng = Math.atan2(y, x);
  brng = toDegrees(brng);
  return formatBearing((brng + 360) % 360);
};
