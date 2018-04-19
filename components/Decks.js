import React, { Component } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import Styled from 'styled-components';

const ListTitle = Styled.Text`
	fontSize: 26;
	marginTop: 30;
`;

export const Subtitle = Styled.Text`
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
						{key: 'oi', cards: 1},
						{key: 'minha', cards: 2},
						{key: 'Ariane', cards: 0},
						{key: 'Filipe', cards: 1},
						{key: 'Galeno', cards: 3},
						{key: 'Biten', cards: 5},
						{key: 'Foda', cards: 4},
						{key: 'vida', cards: 3}
					]}
					renderItem={({item}) => <ListView>
							<ListTitle>{item.key}</ListTitle>
							<Subtitle>{item.cards}</Subtitle>
						</ListView>}/>
				<TouchableOpacity><Text>Vida vida doce Vida</Text></TouchableOpacity>
			</View>
		)
	}
}