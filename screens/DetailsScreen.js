import { StyleSheet, Text, View } from "react-native";
import { React } from "react";
import { WebView } from "react-native-webview";

const DetailsScreen = (route) => {
  const externalURL = route.route.params.externalUrl;
  console.log(externalURL);
  return <WebView source={{ uri: externalURL }} />;
};

export default DetailsScreen;
const styles = StyleSheet.create({
  container: {},
  text: {},
});
