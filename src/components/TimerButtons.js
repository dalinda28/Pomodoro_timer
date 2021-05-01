import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

class TimerButtons extends React.Component {
	state = {};

	//Boutons start/stop/reset
	render() {
		if(this.props.running === true)
		{
			return (
				<View style={styles.container}>
					<TouchableOpacity style={styles.buttonStyle} onPress={this.props.pause}>
						<Text style={styles.buttonText}>Stop</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.buttonStyle} onPress={this.props.reset}>
						<Text style={styles.buttonText}>Reset</Text>
					</TouchableOpacity>
				</View>
			)
		}
		else
		{
			return(
				<View  style={styles.container}>
					<TouchableOpacity style={styles.buttonStyle} onPress={this.props.play}>
						<Text style={styles.buttonText}>Start</Text>
					</TouchableOpacity>
				</View>
			)
		}
	}
}

const styles=StyleSheet.create({
	container:{
		flex: 1,
		flexDirection: "row" ,
		marginLeft: 20, 
		justifyContent: 'space-evenly',
		marginBottom: 20
	},
	buttonStyle:{
		alignItems: "center",
		backgroundColor: "#A9CCE3",
	    padding: 30,
	    flexDirection: "row" ,
	    borderRadius: 10,
	}, 
	 buttonText: {
	    color: "black",
	    fontSize: 25,
	    fontWeight: "300",
  	}
})

export default TimerButtons