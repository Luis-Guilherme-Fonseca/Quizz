import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Dimensions, Animated, StyleSheet } from 'react-native';
import Styled from 'styled-components';
import { Title, FormButton} from './Styled';

class Card extends Component{

	constructor() {
		super();
		this.animatedValue = new Animated.Value(0);
		this.value = 0;
		this.animatedValue.addListener(({ value }) => {
			this.value = value;
		})
		this.frontInterpolate = this.animatedValue.interpolate({
			inputRange: [0, 180],
			outputRange: ['0deg', '180deg'],
		})
		this.backInterpolate = this.animatedValue.interpolate({
			inputRange: [0, 180],
			outputRange: ['180deg', '360deg']
		})
		this.frontOpacity = this.animatedValue.interpolate({
			inputRange: [80, 100],
			outputRange: [1, 0]
		})
		this.backOpacity = this.animatedValue.interpolate({
			inputRange: [80, 100],
			outputRange: [0, 1]
		})
	}

	shouldComponentUpdate(nextProps){
		if(this.value >= 90){
			Animated.spring(this.animatedValue,{
				toValue: 0,
				friction: 12,
				tension: 10
				}).start();
		}

		return true
	}

	flipCard = () => {
		if (this.value >= 90) {
			Animated.spring(this.animatedValue,{
				toValue: 0,
				friction: 12,
				tension: 10
				}).start();
		} else {
			Animated.spring(this.animatedValue,{
				toValue: 180,
				friction: 12,
				tension: 10
				}).start();
		}
	}


	render(){
		const frontStyle = {
			transform: [
				{ rotateY: this.frontInterpolate }
			],
			opacity: this.frontOpacity
		}
		const backStyle = {
			transform: [
				{ rotateY: this.backInterpolate }
			],
			opacity: this.backOpacity
		}

		return(
			<View style={{alignItems: 'center'}} >
				{/*frente*/}
				<Animated.View style={[styles.card, frontStyle]}>
					<Title>{this.props.question.question}</Title>
					<TouchableOpacity onPress={() => this.flipCard()} style={{alignSelf: 'center'}} >
						<Text style={{color: 'red'}}>View Answer</Text>
					</TouchableOpacity>
				</Animated.View>
				{/*verso*/}
				<Animated.View style={[styles.card, styles.cardBack, backStyle]}>
					<Title>{this.props.question.answer}</Title>
					<TouchableOpacity onPress={() => this.flipCard()} style={{alignSelf: 'center'}} >	
						<Text style={{color: 'red'}}>View Question</Text>
					</TouchableOpacity>
				</Animated.View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
  card: {
	width: 250,
	height: 300,
	alignItems: 'center',
	justifyContent: 'center',
	backfaceVisibility: 'hidden',
	borderColor: "black",
	borderWidth: 0.8,
  },
  cardBack: {
	position: "absolute",
	top: 0,
  }
});

export default Card;