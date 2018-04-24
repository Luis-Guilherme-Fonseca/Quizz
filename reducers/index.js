import { RECEIVE_DECKS, ADD_DECK } from '../actions';

function decks(state = {}, action){
	const {decks, deck} = action
	switch(action.type){
		case RECEIVE_DECKS:
			return{
				...state,
				decks: decks
			}
		case ADD_DECK:
			return{
				...state,
				[decks]: decks.push(deck)
			}
		default:
			return state
	}
}

export default decks;