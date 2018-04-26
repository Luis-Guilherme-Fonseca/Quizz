import { View, Text, TouchableOpacity, FlatList, Dimensions } from 'react-native';
import Styled from 'styled-components';


export const Title = Styled.Text`
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

export const FormButton = Styled.TouchableOpacity`
	width: 200;
	height: 40
	alignSelf: center;
	alignItems: center;
	justifyContent: center;
	borderWidth: 1;
	borderColor: black;
	borderRadius: 9;
`;