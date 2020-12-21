import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    paddingVertical: 0,
    paddingHorizontal: 0,
    backgroundColor: "#fff",
    justifyContent: "space-between",
    borderRadius: 0
  },
  titleContainer: {
    flex: .1,
    margin: 0,
    backgroundColor: "#f7b20d",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingVertical: 20,
    alignSelf: "stretch",
    flexBasis: 30,
  },
  title: {
    alignContent: "center",
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
  },
  articleContainer: {
    flex: 0,
  },
  article: {
    flex: 4,
    textAlign: "justify",
    fontSize: 16,
    lineHeight: 20,
    paddingHorizontal: 2,
    margin: 30,
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
