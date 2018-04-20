import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';
import { Subtitle } from './Decks';
import Styled from 'styled-components';
import { saveDeck } from '../utils/StorageAPI';

export default class CreateDeck extends Component{
	state = {
		title: ''
	}

	createDeck = () => {
		const { title } = this.state;
		if(title !== ''){
			saveDeck(title)
		}
	}

	render(){
		const { height, width } = Dimensions.get('window')
		return(
			<View style={{justifyContent: 'center', height: height, width: width}}>
				<View>
					<Subtitle style={{textAlign: 'center', color: "black", marginBottom: 20}} >Choose a Title for your new deck</Subtitle>
					<TextInput placeholder="Deck Title" onChangeText={(text) => this.setState({title: text})} style={styles.input} />
					<TouchableOpacity 
						style={[styles.submitBtn, {alignSelf: 'center', justifyContent: 'center'}]} 
						onPress={() => this.createDeck()} >
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