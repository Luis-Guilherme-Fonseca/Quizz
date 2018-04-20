import { AsyncStorage } from 'react-native';

function createDeck(title){
	let deck = {};
	deck.title = title;
	deck.questions = [];

	return deck
}

export function saveDeck(title){
	AsyncStorage.setItem(title, JSON.stringify(createDeck(title)));
}

export async function getDecks(){
	return await AsyncStorage.getAllKeys().then((keys) => {
		return AsyncStorage.multiGet(keys)
	}).then((res) => {
		return res.map((R) => {return JSON.parse(R[1])})	
	});
}