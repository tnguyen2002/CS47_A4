import { Pressable, Text, StyleSheet, Image, Dimensions } from "react-native";
import { authorize } from "react-native-app-auth";
import { Themes } from "../assets/Themes";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const SpotifyAuthButton = ({ authenticationFunction }) => {
  return (
    <Pressable style={styles.authButton} onPress={authenticationFunction}>
      <Image
        style={styles.spotifyLogo}
        source={require("../assets/spotify-logo.png")}
      />
      <Text style={styles.authText}> CONNECT WITH SPOTIFY</Text>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  authButton: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: Themes.colors.spotify,
    // height: "auto",
    padding: 12,
    // width: "auto",
    borderRadius: 999999,
  },
  authText: {
    color: "white",
    fontSize: windowWidth * 0.03,
    fontWeight: "bold",
    // backgroundColor: "red",
  },
  spotifyLogo: {
    aspectRatio: 1 / 1,
    height: windowHeight * 0.02,
    width: undefined,
    // margin: windowWidth * 0.02,
    // backgroundColor: "red",
  },
});
export default SpotifyAuthButton;
