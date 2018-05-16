import React from 'react';
import { StyleSheet, Text, View, StatusBar, Alert, TimePickerAndroid} from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import Decks from './components/Decks';
import CreateDeck from './components/CreateDeck';
import Deck from './components/Deck';
import Quizz from './components/Quizz';
import AddCard from './components/CreateCard';
import reducer from './reducers';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { FontAwesome, Entypo } from '@expo/vector-icons';
import { Constants } from 'expo';
import { addNotification, getNotification } from './utils/Storage';

function MyStatusBar({...props}){
	return (
		<View style={{backgroundColor: 'black', height: Constants.statusBarHeight}}>
			<StatusBar translucent backgroundColor={'black'} {...props}/>
		</View>
	)
}

const Tabs = TabNavigator({
	Decks: {
		screen: Decks,
		navigationOptions: {
			tabBarLabel: 'Decks',
			tabBarIcon: <FontAwesome name="question-circle-o" size={30}/>
		}
	},
	CreateDeck: {
		screen: CreateDeck,
		navigationOptions: {
			tabBarLabel: 'Add Deck',
			tabBarIcon: <Entypo name='circle-with-plus' size={30} />
		}
	}
},{
	navigationOptions: {
		header: null
	},
	tabBarOptions: {
		activeTintColor: 'white',
		style: {
			height: 56,
			backgroundColor: 'black'
		}
	}
})

const MainNavigator = StackNavigator({
	Home: {
		screen: Tabs
	},
	Deck: {
		screen: Deck,
		navigationOptions: {
			headerTintColor: 'white',
			headerStyle: {
				backgroundColor: 'black',
				height: 50
			}
		}
	},
	Quizz: {
		screen: Quizz,
		navigationOptions: {
			headerTintColor: 'white',
			title: 'Quizz',
			headerStyle: {
				backgroundColor: 'black',
				height: 50
			}
		}
	},
	AddCard: {
		screen: AddCard,
		navigationOptions: {
			headerTintColor: 'white',
			title: 'Add Card',
			headerStyle: {
				height: 50,
				backgroundColor: 'black'
			}
		}
	}
})

export default class App extends React.Component {
	componentDidMount(){
		getNotification()
			.then(data => {
				if(!data){
					Alert.alert(
						'Add a study remainder.',
						'Do you want to set a remainder to remember youto study daily?',
						[
							{text: 'Yes', onPress: () => this.setNotificationTime()},
							{text: 'No', style: 'cancel'},
						]
					)
				}
			})
	}

	async setNotificationTime(){
		const {action, hour, minute} = await TimePickerAndroid.open({
			mode: 'default'
		})
		if(action !== TimePickerAndroid.dismissedAction){
			addNotification(hour, minute)
		}
	}

	render() {
		return (
			<Provider store={createStore(reducer)} >
				<View style={{flex: 1}} >
					<MyStatusBar />
					<MainNavigator />
				</View>
			</Provider>
		);
	}
}
