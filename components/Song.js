import {
  Text,
  StyleSheet,
  View,
  ImageBackground,
  Dimensions,
  Pressable,
} from "react-native";
import millisToMinutesAndSeconds from "../utils/millisToMinutesAndSeconds.js";
import { Themes } from "../assets/Themes";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
import Ionicons from "@expo/vector-icons/Ionicons";
const Song = ({
  index,
  songName,
  songArtists,
  songDuration,
  songImage,
  songAlbum,
  navigation,
  previewUrl,
  externalUrl,
}) => {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.index}>{index}</Text> */}
      <Pressable
        style={styles.playButtonBox}
        onPress={() =>
          navigation.navigate("Song preview", { previewUrl: previewUrl })
        }
      >
        <Ionicons
          name="play-circle"
          size={windowWidth * 0.05}
          color={Themes.colors.spotify}
        />
      </Pressable>
      <Pressable
        style={styles.songBox}
        onPress={() =>
          navigation.navigate("Song details", { externalUrl: externalUrl })
        }
      >
        <ImageBackground source={{ url: songImage }} style={styles.songImage} />
        <View style={styles.artistBox}>
          <Text numberOfLines={1} style={styles.songName}>
            {songName}
          </Text>
          <Text numberOfLines={1} style={styles.songArtists}>
            {songArtists.map((item) => item.name + " ")}
          </Text>
        </View>
        <Text numberOfLines={1} style={styles.songAlbum}>
          {songAlbum}
        </Text>
        <Text style={styles.songLength}>
          {millisToMinutesAndSeconds(songDuration)}
        </Text>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: windowWidth,
  },
  // index: {
  //   color: Themes.colors.gray,
  //   width: windowWidth * 0.05,
  // },
  playButtonBox: {
    width: windowWidth * 0.075,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },

  songBox: {
    display: "flex",
    width: windowHeight * 0.925,
    flexDirection: "row",
    alignItems: "center",
  },
  artistBox: {
    display: "flex",
    flexDirection: "column",
    width: windowWidth * 0.25,
  },
  songArtists: {
    color: Themes.colors.gray,
  },
  songName: {
    color: Themes.colors.white,
  },
  songAlbum: {
    color: Themes.colors.white,
    width: windowWidth * 0.375,
  },
  songLength: {
    color: Themes.colors.white,
  },
  songDuration: {
    songDuration: Themes.colors.white,
    width: windowWidth * 0.1,
  },
  songImage: {
    aspectRatio: 1 / 1,
    width: windowWidth * 0.2,
    margin: 5,
  },
});
export default Song;
