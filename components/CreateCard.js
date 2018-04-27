import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import Styled from 'styled-components';
import { InputField, SubmitBtn } from './Styled';

class CreateCard extends Component{
	render(){
		return(
			<View>
				<InputField placeholder="Question" />
				<InputField placeholder="Answer" />
				<SubmitBtn
					style={{alignSelf: 'center', justifyContent: 'center'}}>
						<Text style={{color: 'white', alignSelf: 'center', fontSize: 15}} >Submit</Text>
				</SubmitBtn>
			</View>
		)
	}
}

export default CreateCard;