import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SearchPlaces from '../screens/searchplaces';
import Destinations from '../screens/destinations';
import Offers from '../screens/offers';
import SearchTours from '../screens/searchtours';

const Stack = createStackNavigator();

const Stack2 = testingCetner();

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
      <Stack.Screen
        name="Offers"
        component={Offers}
        options={{headerShown: true, headerTitle: ''}}
      />
      <Stack.Screen
        name="SearchTours"
        component={SearchTours}
        options={{headerShown: true, headerTitle: ''}}
      />
    </Stack.Navigator>
  );
};

export default StackConfig;
