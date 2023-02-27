import {
  FlatList,
  Text,
  View,
  Image,
  StyleSheet,
  Dimensions,
} from "react-native";
import { Themes } from "../assets/Themes";
import Song from "./Song.js";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const SongList = ({ tracks, navigation }) => {
  //   console.log("song artist", item.songArtists);
  return (
    <View styles={styles.container}>
      <View style={styles.topBar}>
        <Image
          style={styles.spotifyLogo}
          source={require("../assets/spotify-logo.png")}
        />
        <Text style={styles.topTrack}>MY TOP TRACKS</Text>
      </View>
      <FlatList
        data={tracks}
        renderItem={({ item, index }) => (
          <Song
            index={index + 1}
            songArtists={item.songArtists}
            songName={item.songTitle}
            songDuration={item.duration}
            songImage={item.imageUrl}
            songAlbum={item.albumName}
            key={item.id}
            navigation={navigation}
            previewUrl={item.previewUrl}
            externalUrl={item.externalUrl}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
  },
  spotifyLogo: {
    aspectRatio: 1 / 1,
    height: windowHeight * 0.04,
    width: undefined,
    margin: windowWidth * 0.025,
    // backgroundColor: "red",
  },
  topBar: {
    display: "flex",
    flexDirection: "row",
    height: windowHeight * 0.05,
    width: "auto",
    // backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
  },
  topTrack: {
    color: Themes.colors.white,
    fontSize: windowHeight * 0.02,
    fontWeight: "bold",
    // textAlign: "center",
    // backgroundColor: "red",
  },
});
export default SongList;
