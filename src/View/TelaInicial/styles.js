import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 2,
    flexGrow: 1,
    width: "100%",
    height: "100%",
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
    flexWrap: "nowrap",
    justifyContent: "flex-start",
  },
  textInput: {
    paddingHorizontal: 7,
    marginStart: 2,
    marginEnd: 2,
    marginTop: 6,
    marginBottom: 6,
    width: "95%",
    height: 40,
    flexWrap: "nowrap",
    borderColor: "gray",
    borderWidth: 1,
  },
  button: {
    marginHorizontal: 4,
    marginTop: 4,
    paddingHorizontal: 5,
    paddingVertical: 10,
    flex: 1,
    maxWidth: 150,
    maxHeight: 40,
    flexDirection: "row",
    borderRadius: 10,
    flexWrap: "wrap",
    backgroundColor: "#f7b20d",
    justifyContent: "center",
    alignContent: "center"

  },
  buttonContainer: {
    backgroundColor: '#f9c64c',
    flex: 1,
    flexWrap: "wrap",
    alignSelf: "flex-end",
    alignItems: "center",
    marginEnd: 2,
    marginBottom: 0

  },
  buttonText: {
    color: "#fff",
  },
  flatList: {
    flexGrow: 5,
    width: "100%",
    height: "100%",
    alignSelf: "center",
    flex: 2,


  },
  flatListContainer: {
    flexGrow: 5,
    justifyContent: "flex-start",
    alignContent: "space-around",

  }


});

export default styles;
