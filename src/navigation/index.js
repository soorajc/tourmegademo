import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SearchPlaces from '../screens/searchplaces';

const Stack = createStackNavigator();

const StackConfig = () => {
  return (
    <Stack.Navigator initialRouteName="SearchPlaces">
      <Stack.Screen
        name="SearchPlaces"
        component={SearchPlaces}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default StackConfig;
