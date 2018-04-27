import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import Styled from 'styled-components';
import { Title, FormButton } from './Styled';

class Card extends Component{
	state = {
		correctAnswers: 0,
	}


	render(){
		const { height } = Dimensions.get('window');
		return(
			<View style={{height: (height - 130), justifyContent: 'space-between'}} >
				<View>
					{/*frente*/}
					<Title>Question</Title>
					<Text>View Answer</Text>
				</View>
				<View>
					{/*verso*/}
					<Title>Answer</Title>
					<Text>View Question</Text>
				</View>
				<View>
					<FormButton style={{backgroundColor: 'green', marginTop: 12}} >
						<Text>Correct</Text>
					</FormButton>
					<FormButton style={{backgroundColor: 'green', marginTop: 12}} >
						<Text>Incorrect</Text>
					</FormButton>
				</View>
			</View>
		)
	}
}

export default Card;