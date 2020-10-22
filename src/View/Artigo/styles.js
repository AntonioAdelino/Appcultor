import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    alignContent: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  article: {
    textAlign: "justify",
  },
  tags: {
    marginBottom: 5,
  },
});

export default styles;
