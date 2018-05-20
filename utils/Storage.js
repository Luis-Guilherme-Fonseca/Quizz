import { AsyncStorage } from 'react-native';
import { Notifications, Permissions } from 'expo';

const QUIZZ_KEY = 'Quizz:DailyReminder';

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

export function getNotification(){
	return AsyncStorage.getItem(QUIZZ_KEY).then(JSON.parse);
}

export async function clearDailyNotification(){
	var tomorrow = new Date( await AsyncStorage.getItem(QUIZZ_KEY).then(JSON.parse))
	var today = new Date()
	tomorrow.setDate(today.getDate() + 1)

	await Notifications.cancelAllScheduledNotificationsAsync()
	Notifications.scheduleLocalNotificationAsync(
		{
			// First Parameter
			title: 'Study Some Quizzes',
			body: 'Don`t forget your daily studies',
			ios: {
				sound: true
			},
				android: {
				priority: 'low',
				vibrate: true
			}
		},
		{
			// Second Parameter
			time: tomorrow,
			repeat: 'day'
		}
	)
	AsyncStorage.removeItem(QUIZZ_KEY)
	AsyncStorage.setItem(QUIZZ_KEY, JSON.stringify(tomorrow));
}

export function addNotification(hour, minute){
	Permissions.askAsync(Permissions.NOTIFICATIONS)
		.then((data) => {
			if(data.status === 'granted'){
				Notifications.cancelAllScheduledNotificationsAsync();
				let tomorrow = new Date();
				if(hour && minute){
					if(tomorrow.getHours() >=  hour){
						tomorrow.setDate(tomorrow.getDate() + 1)
					}
					tomorrow.setHours(hour);
					tomorrow.setMinutes(minute);
				}
				Notifications.scheduleLocalNotificationAsync(
					{
						// First Parameter
						title: 'Study Some Quizzes',
						body: 'Don`t forget your daily studies',
						ios: {
							sound: true
						},
							android: {
							priority: 'low',
							vibrate: true
						}
					},
					{
						// Second Parameter
						time: tomorrow,
						repeat: 'day'
					}
				);
				AsyncStorage.setItem(QUIZZ_KEY, JSON.stringify(tomorrow));
			}
		})
}