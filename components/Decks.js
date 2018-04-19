import React, { Component } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import Styled from 'styled-components';

const ListTitle = Styled.Text`
	fontSize: 26;
	marginTop: 30;
`;

const Subtitle = Styled.Text`
	fontSize: 22;
	color: gray;
	marginBottom: 50;
`;

const ListView = Styled.View`
	justifyContent: center;
	alignItems: center;
	borderBottomColor: black;
	borderBottomWidth: 1;
`;

export default class Decks extends Component{
	render(){
		return(
			<View>
				<FlatList 
					data={[
						{key: 'oi'},
						{key: 'minha'},
						{key: 'Ariane'},
						{key: 'Filipe'},
						{key: 'Galeno'},
						{key: 'Biten'},
						{key: 'Foda'},
						{key: 'vida'}
					]}
					renderItem={({item}) => <ListView>
							<ListTitle>{item.key}</ListTitle>
							<Subtitle>{item.key}</Subtitle>
						</ListView>}/>
				<TouchableOpacity><Text>Vida vida doce Vida</Text></TouchableOpacity>
			</View>
		)
	}
}