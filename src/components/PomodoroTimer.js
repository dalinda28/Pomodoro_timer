import React from 'react';
import { Platform, StyleSheet, Text, View, TextInput } from 'react-native';
import Timer from './Timer'

class PomodoroTimer extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			workTime: 25,
			breakTime: 5,
			intervalType : "Travail",
		}
	}

    handleTimerCompleted = () => {
		if(this.state.intervalType === "Travail")
		{
			this.setState({
				intervalType: "Pause"
			})
		}
		else
		{
			this.setState({
				intervalType: "Travail"
			})	
		}
	}

	// se déclenche lors du changement de texte de l'horloge de travail
	handleWorkTime = (text) =>
	{
		if(text >= 0)
		{
			this.setState({
				workTime: text
			})
		}
		else{
			alert("Heure invalide, veuillez saisir une heure valide")
			this.setState({
				workTime: 25
			})
		}
	}

	// se déclenche lors du changement de texte du breaktimer
	handleBreakTime = (text) =>{
		if(text >= 0)
		{
			this.setState({
				breakTime:  text
			})
		}
		else
		{
			alert("Heure invalide, veuillez saisir une heure valide")
			this.setState({
				breakTime: 5
			})
		}
	}

	// appelé pour régler l'heure de la minuterie
	handleTime = () => {
		if(this.state.intervalType === "Travail")
		{
			return this.state.workTime
		}
		else
		{
			return this.state.breakTime
		}
	}

    render() {
        let time= this.handleTime()

        return(
		    <View>
				<Timer
					intervalType={this.state.intervalType}
					Oncomplete={this.handleTimerCompleted}
					period={time}
				/>
                <View style={styles.row}>
					<View style={styles.inputWrap}>
						<Text style={styles.textStyle}>Travail</Text>
						<TextInput  style={styles.textStyle}  keyboardType={"numeric"} defaultValue={''+this.state.workTime} placeholder = "Travail en min" onChangeText={this.handleWorkTime} />
					</View>
					<View style={styles.inputWrap}>
						<Text style={styles.textStyle}>Pause</Text>
						<TextInput  style={styles.textStyle}  keyboardType={"numeric"} defaultValue={''+this.state.breakTime} placeholder = "Pause en min" onChangeText={this.handleBreakTime} />
					</View>
				</View>
			</View>
        )
	}
}

export default PomodoroTimer;

const styles = StyleSheet.create({
    row: {
     flex: 1,
     flexDirection: "row",
   },
   inputWrap: {
     flex: 1,
     borderColor: "#cccccc",
     borderBottomWidth: 1,
     margin: 20,
   },
   textStyle: {
     fontSize: 25,
     fontWeight: "500",
     letterSpacing: 1.5,
     fontFamily: Platform.OS == "android" ? "notoserif" : "system",
     padding: 10
   }
 });