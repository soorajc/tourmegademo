/**
 * Place List Component
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, FlatList, Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

import Styles from './styles';

const PlaceList = props => {
  return (
    <View
      style={
        props.containerStyle ? props.containerStyle : Styles.placeListContainer
      }>
      <FlatList
        style={props.listStyle ? props.listStyle : Styles.placeList}
        data={props.data}
        renderItem={({item, index}) => (
          <TouchableOpacity
            onPress={() => props.handlePlaceSelection(item)}
            style={
              props.listItemContainerStyle
                ? props.listItemContainerStyle
                : Styles.placeListItemContainer
            }>
            <Text style={Styles.placeLabel}>{item.name}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.name + item.id}
      />
    </View>
  );
};

export default PlaceList;

PlaceList.propTypes = {
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
  handlePlaceSelection: PropTypes.func.isRequired,
  containerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  listStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  listItemContainerStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]),
};
