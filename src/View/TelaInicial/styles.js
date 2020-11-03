import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
    flexWrap: "nowrap",
    justifyContent: "flex-start",
  },
  // imgBackground: {
  //   width: '100%',
  //   height: '100%',
  //   flex: 1
  // },
  // text: {
  //   color: "#fff",
  // },
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
    marginVertical: 5,
    paddingHorizontal: 5,
    paddingVertical: 10,
    flex: 2,
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
    flex: 1,
    flexWrap: "wrap",
    alignSelf: "flex-end",
    alignItems: "center",
    marginEnd: 2

  },
  buttonText: {

    color: "#fff",
  },


});

export default styles;
