import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    paddingVertical: 0,
    paddingHorizontal: 0,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
    borderRadius: 0
  },
  tagsContainer: {
    flex: .1,
    flexDirection: "row",
    flex: 0,
    flexBasis: 45,
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f7b20d",
  },
  tags: {
    flex: 0,
    color: "#fff",

  },
});

export default styles;
