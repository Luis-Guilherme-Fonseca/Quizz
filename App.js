import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import Decks from './components/Decks';
import CreateDeck from './components/CreateDeck';
import Deck from './components/Deck';
import reducer from './reducers';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { FontAwesome, Entypo } from '@expo/vector-icons';
import { Constants } from 'expo';

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
        height: 56
      }
    }
  }
})

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer, applyMiddleware(thunk))} >
        <View style={{flex: 1}} >
          <MyStatusBar />
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}
