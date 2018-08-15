import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Timer from './components/TImer/index';
import reducer from './Reducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

let store = createStore(reducer);


export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}> 
        <Timer isPlaying={true}/>
      </Provider>
    );
  }
}

