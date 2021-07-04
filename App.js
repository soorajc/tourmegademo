/**
 * TourMegaDemo React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import StackConfig from './src/navigation';

const App = () => {
  return (
    <NavigationContainer nice="poker">
      <StackConfig store="test" redux="redux" />
    </NavigationContainer>
  );
};

export default App;
