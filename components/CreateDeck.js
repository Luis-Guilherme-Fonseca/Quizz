import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';
import { Subtitle } from './Decks';
import Styled from 'styled-components';

export default class CreateDeck extends Component{
	render(){
		const { height, width } = Dimensions.get('window')
		return(
			<View style={{justifyContent: 'center', height: height, width: width}}>
				<View>
					<Subtitle style={{textAlign: 'center', color: "black", marginBottom: 20}} >Choose a Title for your new deck</Subtitle>
					<TextInput placeholder="Deck Title" onChangeText={(text) => console.warn(text)} style={styles.input} />
					<TouchableOpacity style={[styles.submitBtn, {alignSelf: 'center', justifyContent: 'center'}]} >
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
   	  borderRadius: 5,
   	  width: 80,
   	  height: 40,
   	  borderColor: 'gray',
   	  backgroundColor: 'black'
   }
}) 