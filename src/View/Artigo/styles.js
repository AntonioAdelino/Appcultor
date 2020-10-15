import { StyleSheet } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    alignContent: "flex-start",
    margin: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
  article: {
    margin: 30,
    textAlign: "justify",
  },
  tags: {
    marginBottom: 5,
  },
});

export default styles;
