import React from "react";
import { Image, View , StyleSheet} from "react-native";


export default class Info extends React.Component{
	constructor(props){
		super(props);
	}

	render(){

		return (
			<View style={styles.container} >
				<Image 
					source ={require("../../../assets/apoio.png")} 
					style={styles.imagem}
					/>
			</View>
		)
	}

}


const styles = StyleSheet.create({
	container:{
		flex: 1,
		backgroundColor: "#f7b20d",
		alignItems: "center",
		justifyContent: "center",
	},
	imagem:{
		flex: 0,
		width: 280,		
		height: 350,
		marginBottom: 80
	}

})