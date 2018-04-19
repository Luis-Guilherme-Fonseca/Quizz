import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Decks from './components/Decks';
import CreateDeck from './components/CreateDeck';

export default class App extends React.Component {
  render() {
    return (
      <View >
        <CreateDeck />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
