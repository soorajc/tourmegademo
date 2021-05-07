/**
 * TagCloud Component
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import Styles from './styles';

const TagCloud = props => {
  return (
    <View style={Styles.container}>
      {props.data.map(item => (
        <TouchableOpacity
          onPress={() => props.handleTagPress(item)}
          key={item.id}
          style={Styles.tagContainer}>
          <Text style={Styles.tag}>{item.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default TagCloud;
