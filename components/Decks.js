import React, { Component } from 'react';
import { View, Text, TouchableOpacity, FlatList, Dimensions } from 'react-native';
import Styled from 'styled-components';
import { connect } from 'react-redux';
import { fetchDecks } from '../actions';

const ListTitle = Styled.Text`
	fontSize: 26;
	marginTop: 30;
	textAlign: center;
`;

export const Subtitle = Styled.Text`
	fontSize: 22;
	color: gray;
	marginBottom: 50;
	textAlign: center;
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
					renderItem={({item}) => 
						<ListView >
							<TouchableOpacity style={{flex: 1, width: Dimensions.get('window').width}} >
								<ListTitle>{item.title}</ListTitle>
								<Subtitle>{item.questions.length} Cards</Subtitle>
							</TouchableOpacity>
						</ListView>
					}/>
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