import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Dimensions, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { Title, InputField } from './Styled';
import Styled from 'styled-components';
import { connect } from 'react-redux';
import { addDeck } from '../actions';
import { createDeck, saveDeck } from '../utils/Storage';

class CreateDeck extends Component{
	state = {
		title: ''
	}

	addNewDeck = () => {
		const { title } = this.state;
		const { decks } = this.props.decks;

		if(title !== ''){
			const deck = createDeck(title)
			saveDeck(deck)
			this.props.dispatch(addDeck(deck, decks))
			this.props.navigation.navigate('Deck', {item: deck, index: decks.length - 1})
		}
	}

	render(){
		const { height, width } = Dimensions.get('window')
		return(
			<KeyboardAvoidingView style={{justifyContent: 'center', height: (height - 100), width: width}} behavior="padding" enabled >
				<Title style={{ color: "black", marginBottom: 20, marginTop: 0}} >Choose a Title for your new deck</Title>
				<InputField placeholder="Deck Title" onChangeText={(text) => this.setState({title: text})} />
				<TouchableOpacity
					style={[styles.submitBtn, {alignSelf: 'center', justifyContent: 'center', marginBottom: 25}]}
					onPress={() => this.addNewDeck()} >
						<Text style={{color: 'white', alignSelf: 'center', fontSize: 15}} >Submit</Text>
				</TouchableOpacity>
			</KeyboardAvoidingView>
		)
	}
}

const styles = StyleSheet.create({
   submitBtn: {
   	  borderWidth: 1,
   	  borderRadius: 10,
   	  width: 100,
   	  height: 45,
   	  backgroundColor: 'black'
   }
})

function mapStateToProps(decks) {
	return {
		decks
	}
}

export default connect(mapStateToProps)(CreateDeck)