import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import Styled from 'styled-components';
import { Title, FormButton } from './Styled';

class Card extends Component{

	render(){
		const { side, changeSide } = this.props
		return(
			<View>
				{ side === 0 &&
					<View>
						{/*frente*/}
						<Title>{this.props.question.question}</Title>
						<TouchableOpacity onPress={() => changeSide(1)} style={{alignSelf: 'center'}} >
							<Text style={{color: 'red'}}>View Answer</Text>
						</TouchableOpacity>
					</View>
				}
				{ side === 1 &&
					<View>
						{/*verso*/}
						<Title>{this.props.question.answer}</Title>
						<TouchableOpacity onPress={() => changeSide(0)} style={{alignSelf: 'center'}} >	
							<Text style={{color: 'red'}}>View Question</Text>
						</TouchableOpacity>
					</View>
				}
			</View>
		)
	}
}

export default Card;