import { View, Text, TouchableOpacity, TextInput } from 'react-native';
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
	height: 40;
	alignSelf: center;
	alignItems: center;
	justifyContent: center;
	borderWidth: 1;
	borderColor: black;
	borderRadius: 9;
`;

export const InputField = Styled.TextInput`
    fontSize: 16;
	margin: 15px 40px;
    height: 40;
    borderColor: black;
    borderRadius: 8;
    borderWidth: 2;
`;

export const SubmitBtn = Styled.TouchableOpacity`
	borderWidth: 1;
   	borderRadius: 10;
   	width: 100;
   	height: 45;
   	backgroundColor: black;
`;