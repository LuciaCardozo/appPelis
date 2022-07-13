import 'react-native-gesture-handler';

import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { NavigatorScreen } from './src/navigator/NavigatorScreen';

const App = () => {

  return (
    <NavigationContainer>
      <NavigatorScreen/>
    </NavigationContainer>
  );
};

export default App;
