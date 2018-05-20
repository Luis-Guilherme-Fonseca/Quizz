import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { Title, FormButton } from './Styled';
import { clearDailyNotification } from '../utils/Storage'
import Card from './Card';

class Quizz extends Component{
	state = {
		answers: 0,
		score: 0,
	}

	answer(resultado){
		var {answers, score} = this.state
		const { item } = this.props.navigation.state.params;
		
		answers++;
		
		this.setState({answers});
	
		if(resultado){
			score++;
			this.setState({score})
		}
	}

	toDeck = () => {
		this.props.navigation.dispatch(NavigationActions.back())
		clearDailyNotification()
	}

	reset = () => {
		this.setState({answers: 0});
		this.setState({score: 0});
		clearDailyNotification()
	}

	render(){
		const { item } = this.props.navigation.state.params
		const {answers, score} = this.state
		const { height } = Dimensions.get('window');
		
		return(
			<View>
				{item.questions.length > answers &&
					<View  style={{height: (height - 150), justifyContent: 'space-around'}} >
						<Text style={{fontSize: 22, marginTop: 4, marginLeft: 5}} >{`${answers + 1} / ${item.questions.length}`}</Text>
						<Card question={item.questions[answers]} value={0} />
						<View>
							<FormButton style={{backgroundColor: 'green', marginTop: 12}} onPress={() => this.answer(true)} >
								<Text style={{color: 'white'}} >Correct</Text>
							</FormButton>
							<FormButton style={{backgroundColor: 'red', marginTop: 12}} onPress={() => this.answer(false)} >
								<Text style={{color: 'white'}} >Incorrect</Text>
							</FormButton>
						</View>
					</View>
				}
				{item.questions.length > 0 && item.questions.length <= answers &&
					<View style={{height: (height - 150), justifyContent: 'space-around'}}>
						<Title>Parabens voce acertou {score} de {item.questions.length} perguntas sobre {item.title}</Title>
						<View>
							<FormButton style={{ marginTop: 12}} onPress={() => this.reset()} >
								<Text  >Restart Quizz</Text>
							</FormButton>
							<FormButton style={{backgroundColor: 'black', marginTop: 12}} onPress={() => this.toDeck()} >
								<Text style={{color: 'white'}} >Back to Deck</Text>
							</FormButton>
							{}
						</View>
					</View>

				}
				{item.questions.length <= 0 &&
					<Title>No question Card in this deck try adding some before playing the Quizz</Title>
				}
			</View>
		)
	}
}

export default Quizz