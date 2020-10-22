import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",

  },
  text: {
    alignContent: "flex-start",
    margin: 3,
  },
  flatList: {
    flex: 1,
    width: "100%",
  },
  carregando: {
    flex: 1,
  }
  ,

  listItem: {
    margin: 10,
    flex: 1,
    flexGrow: 1,
    marginStart: 2,
    height: 40,
    width: 75,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center"
  },

});

export default styles;
