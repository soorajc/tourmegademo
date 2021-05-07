/**
 * TagCloud Component
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

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

TagCloud.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      code: PropTypes.string,
      slug: PropTypes.string,
      introduction: PropTypes.string,
      country_id: PropTypes.number,
      image: PropTypes.string,
    }),
  ).isRequired,
  handleTagPress: PropTypes.func.isRequired,
};
