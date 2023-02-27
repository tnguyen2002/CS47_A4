import { StyleSheet, SafeAreaView, Text, Pressable } from "react-native";
import { useSpotifyAuth } from "./utils";
import { Themes } from "./assets/Themes";
import SpotifyAuthButton from "./components/SpotifyAuthButton";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";
import SongList from "./components/SongList";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import DetailsScreen from "./screens/DetailsScreen";
import PreviewScreen from "./screens/PreviewScreen";

const Stack = createStackNavigator();

export default function App() {
  // Pass in true to useSpotifyAuth to use the album ID (in env.js) instead of top tracks
  const Home = ({ navigation }) => {
    return <HomeScreen navigation={navigation} />;
  };

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={styles.stackNavigator}>
        <Stack.Screen
          name="Home"
          options={{ headerShown: false }}
          component={Home}
        />
        <Stack.Screen name="Song details" component={DetailsScreen} />
        <Stack.Screen name="Song preview" component={PreviewScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Themes.colors.background,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  stackNavigator: {
    headerStyle: { backgroundColor: "black" },
    headerTitleStyle: { color: "white" },
    headerBackTitle: "Back",
  },
  detailsScreen: {
    backgroundColor: Themes.colors.background,
    color: Themes.colors.text,
  },
});
