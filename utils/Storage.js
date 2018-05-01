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

export function addCard(title, card){
	AsyncStorage.getItem(title)
		.then((deck) => {
			return JSON.parse(deck)
		}).then((item) => {
			item.questions.push(card)
			AsyncStorage.setItem(title, JSON.stringify(item))
		})
}