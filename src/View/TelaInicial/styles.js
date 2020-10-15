import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 5,
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  text: {
    color: "#fff",
  },
  textInput: {
    flexGrow: 1,
    paddingHorizontal: 7,
    margin: 5,
    width: 200,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
  },
  button: {
    marginStart: 2,
    height: 40,
    width: 75,
    borderRadius: 10,
    backgroundColor: "#f7b20d",
    justifyContent: "center",
    alignItems: "center"
  },
  button_text:{
    color: "#fff",
  },
  
});

export default styles;
