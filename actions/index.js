import * as Storage from '../utils/Storage';

export const RECEIVE_DECKS = 'RECEIVE_DECKS';
export const ADD_DECK = 'ADD_DECK';

export function receiveDecks(decks){
	return{
		type: RECEIVE_DECKS,
		decks
	}
}

export function addDeck(deck, decks){
	return{
		type: ADD_DECK,
		decks,
		deck
	}
}

export const fetchDecks = () => dispatch =>{
	Storage.getDecks()
		.then((decks) => dispatch(receiveDecks(decks)));
}