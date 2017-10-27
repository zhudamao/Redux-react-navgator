/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';


import { Provider } from 'react-redux';
import { createStore,combineReducers } from 'redux';

import {navActionReducer} from './src/appnavigatorreducer';
import AppWithNavigationState  from './src/appnavigator';



const appReducer = combineReducers({
  nav:navActionReducer,
});

let appstore = createStore(appReducer);

export default class App extends Component<{}> {
  render() {
    return (
      <Provider store={appstore} >
        <AppWithNavigationState/>
      </Provider>
    );
  }
}