import React, { Component } from 'react';
import { View, Text, TouchableOpacity, FlatList, Dimensions } from 'react-native';
import { Title, Subtitle } from './Styled'
import Styled from 'styled-components';
import { connect } from 'react-redux';
import { receiveDecks } from '../actions';
import { getDecks } from '../utils/Storage';

const ListView = Styled.View`
	justifyContent: center;
	alignItems: center;
	borderBottomColor: black;
	borderBottomWidth: 1;
`;

class Decks extends Component{
	
	componentDidMount(){
		getDecks().then((decks) => {
			console.warn(decks)
			this.props.returnDecks(decks)
		})
		
	}

	render(){
		const {decks} = this.props
		return(
			<View>
				<FlatList 
					data={decks.decks}
					extraData={this.props}
					renderItem={({item, index}) => 
						<ListView >
							<TouchableOpacity 
								style={{flex: 1, width: Dimensions.get('window').width}}
								onPress={() => this.props.navigation.navigate('Deck', {item, index})} >
								<Title>{item.title}</Title>
								{item.questions !== undefined &&
									<Subtitle>{item.questions.length} Cards</Subtitle>
								}
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
		returnDecks: (decks) => dispatch(receiveDecks(decks)),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Decks);