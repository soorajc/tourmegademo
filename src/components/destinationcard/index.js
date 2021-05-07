/**
 * DestinationCard Component
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, Text, Dimensions, ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';

import Styles from './styles';
const {width} = Dimensions.get('window');

const DestinationCard = props => {
  const {destination} = props;
  return (
    <View
      style={[
        Styles.card,
        {marginLeft: props.index % 2 != 0 ? width * 0.04 : 0},
      ]}>
      <View style={Styles.cardImageContainer}>
        <ImageBackground
          borderTopLeftRadius={5}
          borderTopRightRadius={5}
          source={{uri: destination.thumbnail_url}}
          style={Styles.cardImage}>
          <View style={Styles.heartIconContainer}>
            <Icon name="heart" size={width * 0.05} color="white" />
          </View>
        </ImageBackground>
      </View>
      <View style={Styles.placeAndRatingContainer}>
        <View style={Styles.placeContainer}>
          <Icon name="map-marker" size={width * 0.05} color="#727272" />
          <Text style={Styles.placeLabel}>{destination.city}</Text>
        </View>
        <View style={Styles.ratingContainer}>
          <Icon name="star" size={width * 0.03} color="#3eb490" />
          <Text style={Styles.ratingLabel}>
            <Text style={Styles.boldText}>{destination.average_rating}</Text> (
            {destination.number_of_reviews})
          </Text>
        </View>
      </View>
      <View style={Styles.destinationNameContainer}>
        <Text numberOfLines={2} style={Styles.destinationName}>
          {destination.name}
        </Text>
      </View>

      <Text style={Styles.price}>
        <Text style={Styles.boldText}>{'$' + destination.price_in_usd}</Text> /
        person{' '}
      </Text>
    </View>
  );
};

export default DestinationCard;

DestinationCard.propTypes = {
  index: PropTypes.number.isRequired,
  destination: PropTypes.object.isRequired,
};
