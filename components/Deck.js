import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { Title, Subtitle,FormButton } from './Styled';
import { Constants } from 'expo';

export default class Deck extends Component{
	static navigationOptions = ({navigation}) => {
		const {item} = navigation.state.params
		return {
			title: `${item.title}`
		}
	}

	render(){
		const { item } = this.props.navigation.state.params;
		const { height, width } = Dimensions.get('window')
		const tabHeight = 56 + Constants.statusBarHeight
		return(
			<View style={{height: (height - tabHeight), justifyContent: 'center', alignItems: 'center'}} >
				<Title style={{marginTop: 0}} >{item.title}</Title>
				<Subtitle style={{marginBottom: 26}} >{item.questions.length} Cards</Subtitle>
				<FormButton>
					<Text>
						Add Card
					</Text>
				</FormButton>
				<FormButton style={{backgroundColor: 'black', marginTop: 15}} >
					<Text style={{color: 'white'}} >
						Play Quizz
					</Text>
				</FormButton>
			</View>
		)
	}
}