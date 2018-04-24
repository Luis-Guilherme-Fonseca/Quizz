import { AsyncStorage } from 'react-native';

export function createDeck(title){
	let deck = {};
	deck.title = title;
	deck.questions = [];

	return deck
}

export function saveDeck(deck){
	AsyncStorage.setItem(deck.title, JSON.stringify(deck));
}

export async function getDecks(){
	return await AsyncStorage.getAllKeys().then((keys) => {
		return AsyncStorage.multiGet(keys)
	}).then((res) => {
		return res.map((R) => {return JSON.parse(R[1])})	
	});
}