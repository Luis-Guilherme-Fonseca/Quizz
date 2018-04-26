import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';
import { Title } from './Styled';
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
		}
	}

	render(){
		const { height, width } = Dimensions.get('window')
		return(
			<View style={{justifyContent: 'center', height: height, width: width}}>
				<View>
					<Title style={{ color: "black", marginBottom: 20}} >Choose a Title for your new deck</Title>
					<TextInput placeholder="Deck Title" onChangeText={(text) => this.setState({title: text})} style={styles.input} />
					<TouchableOpacity 
						style={[styles.submitBtn, {alignSelf: 'center', justifyContent: 'center'}]} 
						onPress={() => this.addNewDeck()} >
							<Text style={{color: 'white', alignSelf: 'center', fontSize: 15}} >Submit</Text>
					</TouchableOpacity>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	input: {
      margin: 40,
      fontSize: 16,
      height: 40,
      borderColor: 'black',
      borderRadius: 8,
      borderWidth: 2
   },
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