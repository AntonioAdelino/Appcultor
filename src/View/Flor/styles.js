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
  body: {
    marginTop: 15,
    alignSelf: "flex-start",
    flex: 2,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start"
  },
  title: {
    alignContent: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  text: {
    fontSize: 17,
    marginVertical: 3,
    textAlign: "justify",
  },
  tags: {
    marginBottom: 5,
  },
});

export default styles;
