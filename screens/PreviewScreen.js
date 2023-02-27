import { StyleSheet, Text, View } from "react-native";
import { React } from "react";
import { WebView } from "react-native-webview";
import { Themes } from "../assets/Themes";
const PreviewScreen = (route) => {
  //   const { previewUrl } = route.params.previewUrl;
  const previewURL = route.route.params.previewUrl;
  console.log(previewURL);
  return <WebView source={{ uri: previewURL }} />;
};

export default PreviewScreen;
const styles = StyleSheet.create({
  container: { backgroundColor: Themes.colors.background },
});
