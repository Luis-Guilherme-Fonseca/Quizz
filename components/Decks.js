import React, { Component } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import Styled from 'styled-components';
import { connect } from 'react-redux';
import { fetchDecks } from '../actions';

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

class Decks extends Component{
	
	componentDidMount(){
		this.props.receiveDecks();
	}

	render(){
		const {decks} = this.props
		return(
			<View>
				<FlatList 
					data={decks.decks}
					renderItem={({item}) => <ListView>
							<ListTitle>{item.title}</ListTitle>
							<Subtitle>{item.questions.length} Cards</Subtitle>
						</ListView>}/>
			</View>
		)
	}
}

function mapStateToProps(decks){
	return{
		decks
	}
}

function mapDispatchToProps(dispatch){
	return{
		receiveDecks: () => dispatch(fetchDecks()),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Decks);