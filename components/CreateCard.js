import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import Styled from 'styled-components';
import { InputField, SubmitBtn } from './Styled';
import { addCard } from '../utils/Storage';
import { receiveDecks } from '../actions';

class CreateCard extends Component{
	state = {
		question: "",
		answer: ""
	}

	addQuestion = () => {
		const { question, answer} = this.state;
		const { item, index } = this.props.navigation.state.params
		var { decks } = this.props.decks;

		if(question !== "" && answer !== ""){
			decks[index].questions.push({question: question, answer: answer});
			addCard(item.title, {question: question, answer: answer});
			this.props.getDecks(decks)
		}
	}

	render(){
		return(
			<View>
				<InputField placeholder="Question" onChangeText={(text) => this.setState({question: text})} />
				<InputField placeholder="Answer" onChangeText={(text) => this.setState({answer: text})} />
				<SubmitBtn
					style={{alignSelf: 'center', justifyContent: 'center'}}
					onPress={() => this.addQuestion()}>
						<Text style={{color: 'white', alignSelf: 'center', fontSize: 15}}>Submit</Text>
				</SubmitBtn>
			</View>
		)
	}
}

function mapDispatchToProps(dispatch){
	return{
		getDecks: (decks) => dispatch(receiveDecks(decks)),
	}
}

function mapStateToProps(decks){
	return {
		decks
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateCard);