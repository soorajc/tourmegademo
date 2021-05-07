import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SearchPlaces from '../screens/searchplaces';
import Destinations from '../screens/destinations';

const Stack = createStackNavigator();

const StackConfig = () => {
  return (
    <Stack.Navigator initialRouteName="SearchPlaces">
      <Stack.Screen
        name="SearchPlaces"
        component={SearchPlaces}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Destinations"
        component={Destinations}
        options={{headerShown: true, headerTitle: ''}}
      />
    </Stack.Navigator>
  );
};

export default StackConfig;
