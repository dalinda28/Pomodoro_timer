import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class TimerDisplay extends React.Component {

	// afficher la minuterie
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.textStyle}> 
					{Math.floor(this.props.time/60).toString().padStart(2,"0") + ":" + 
					(this.props.time % 60).toString().padStart(2,"0")}
				</Text>
			</View>
		)
	}
}

export default TimerDisplay;

const styles = StyleSheet.create({
	container: {
	    borderRadius: 80,
	    borderWidth: 5,
		marginBottom: 50,
		alignItems: 'center',
		backgroundColor: "#A9CCE3",
	},
	textStyle: {
		color: "black",
	    fontSize: 50,
	    fontWeight: "400",
	}
})