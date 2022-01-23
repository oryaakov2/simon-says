import 'react-native-gesture-handler';
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useEffect } from 'react';
import GameScreen from './screens/GameScreen';
import ResultsScreen from './screens/ResultsScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { storage } from './index';
import { gameActions } from './store/gameSlice';
import { useDispatch } from 'react-redux';
import Sound from 'react-native-sound';

Sound.setCategory('Playback');

const App = () => {

  const dispatch = useDispatch()

  const Stack = createStackNavigator()

  useEffect(() => {
    initialResults()
  }, [])

  const initialResults = async (): Promise<void> => {
    const results = await storage.getArrayAsync('results')

    if (results != null) {
      dispatch(gameActions.setResults(results))
    }
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false, gestureEnabled: false, headerTitleAlign: 'center' }}>
        <Stack.Screen name='Game' component={GameScreen} />
        <Stack.Screen name='Results' component={ResultsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
