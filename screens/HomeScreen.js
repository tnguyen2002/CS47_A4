import {
  StyleSheet,
  SafeAreaView,
  Text,
  Pressable,
  StatusBar,
} from "react-native";
import { useSpotifyAuth } from "../utils";
import { Themes } from "../assets/Themes";
import SpotifyAuthButton from "../components/SpotifyAuthButton";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";
import SongList from "../components/SongList";

export default function HomeScreen({ navigation }) {
  // Pass in true to useSpotifyAuth to use the album ID (in env.js) instead of top tracks
  const { token, tracks, getSpotifyAuth } = useSpotifyAuth();

  let contentDisplayed = null;

  // console.log("token: ", token);
  console.log("tracks", tracks);

  if (token) {
    contentDisplayed = <SongList tracks={tracks} navigation={navigation} />;
  } else {
    contentDisplayed = (
      <SpotifyAuthButton authenticationFunction={getSpotifyAuth} />
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      {/* TODO: Your code goes here */}
      {contentDisplayed}
      {/* <Text style={{ color: "white" }}>Welcome to Assignment 3 - Spotify!</Text> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Themes.colors.background,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});
