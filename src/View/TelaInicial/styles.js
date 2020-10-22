import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 2,
    flex: 1,
    width: "100%",
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
  },
  textInput: {
    paddingHorizontal: 7,
    margin: 5,
    width: "95%",
    height: 40,
    flexWrap: "nowrap",
    borderColor: "gray",
    borderWidth: 1,
  },
  button: {
    marginStart: 2,
    height: 40,
    width: 75,
    borderRadius: 10,
    flexWrap: "nowrap",
    backgroundColor: "#f7b20d",
    justifyContent: "center",
    alignItems: "center"

  },
  buttonContainer: {
    marginHorizontal: 7,
    flex: 1,
    flexWrap: "nowrap",
    alignContent: "flex-end",
    alignSelf: "flex-end",
    alignItems: "flex-end",
    margin: 2,
    padding: 2,
  },
  button_text: {
    color: "#fff",
  },

});

export default styles;
