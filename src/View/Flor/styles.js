import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 0,
    paddingHorizontal: 0,
    elevation: 0,
    backgroundColor: "#fff",
    justifyContent: "space-between"
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
  imageCredits:{
    flex: 1,
    alignSelf: "flex-end"
  },
  imageCreditsText:{
    fontSize: 10,
    color: "#a2a2a2",
    marginVertical: -10,
    marginEnd: 5
  },
  text: {
    fontSize: 17,
    color: "#4e4e4e",
    marginBottom: 16
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#292929",
  },
  line: {
    height: 10,
    width: Dimensions.get('window').width,
    backgroundColor: "#f7b20d",
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
