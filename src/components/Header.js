import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Header extends React.Component {
	render() {
		return(
			<View style={styles.headerContainer}>
				<Text style={styles.textStyle}> Pomodoro Timer </Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	headerContainer: {
    backgroundColor: "#A9CCE3",
    height: 90,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
  },
  textStyle: {
    color: "black",
    fontSize: 50,
    fontWeight: "600",
    letterSpacing: 1.5,
    marginTop: 10
  }
})

export default Header;