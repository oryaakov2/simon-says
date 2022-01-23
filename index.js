/**
 * @format
 */

import React from 'react';
import { AppRegistry, Platform, StatusBar } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import store from './store/index';
import { Provider } from 'react-redux';
import MMKVStorage from 'react-native-mmkv-storage';

export const storage = new MMKVStorage.Loader().initialize();

if (Platform.OS === 'android') {
    StatusBar.setBackgroundColor('#FFFFFF')
    StatusBar.setBarStyle('dark-content')
}

const RNRedux = () => (
    <Provider store={store}>
        <App />
    </Provider>
)

AppRegistry.registerComponent(appName, () => RNRedux);
