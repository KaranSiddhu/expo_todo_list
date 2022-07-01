import {StyleSheet, Text, View} from "react-native";
import AppLoading from "expo-app-loading";
import {useFonts} from "expo-font";
import { HomePage } from "./src/screens";


export default function App() {
  // let [fontsLoaded] = useFonts({
  //   Montserrat_Semibold: require("./assets/fonts/Montserrat-SemiBold.ttf")
  // });

  // if (!fontsLoaded) {
  //   return <AppLoading />;
  // }

  return (
    <HomePage />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
