import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    width: "100%",
    paddingVertical: 0,
    paddingHorizontal: 0,
    elevation: 0,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
  },
  body: {
    margin: 10,
    alignSelf: "flex-start",
    padding: 6,
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center"
  },
  titleContainer: {
    margin: 0,
    backgroundColor: "#f7b20d",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingVertical: 20,
    alignSelf: "stretch",
    flex: 0,
    flexBasis: 80,
  },
  title: {
    alignContent: "center",
    color: "#fff",
    fontSize: 20,
    fontStyle: "italic",
    fontWeight: "bold",
  },
  imageContainer: {
    width: Dimensions.get('window').width - 15,
    height: 260,
    marginTop: 10
  },
  image: {
    width: Dimensions.get('window').width - 15,
    height: 260,
    resizeMode: 'cover',
  },
  text: {
    fontSize: 17,
    marginVertical: 2,
    color: "#4e4e4e",
    // textAlign: "justify",
  },
  tags: {
    color: "#4e4e4e",
    marginBottom: 5,
  },
  bottomContainer: {
    flexDirection: "row",
    flex: 0,
    flexBasis: 45,
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f7b20d",
  },
  bottomContainerText: {
    flex: 0,
    color: "#fff",
  }
});

export default styles;
