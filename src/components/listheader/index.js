/**
 * List Header Component
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, Text, ImageBackground} from 'react-native';

import Styles from './styles';

const ListHeader = props => {
  const {title, image, subTitle} = props;
  return (
    <View>
      <ImageBackground
        resizeMode="stretch"
        style={Styles.coverImage}
        source={{
          uri: image
            ? image
            : 'https://images.pexels.com/photos/386000/pexels-photo-386000.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        }}>
        <View style={Styles.coverImageOverlay}>
          <Text style={Styles.coverTitle}>{title}</Text>
        </View>
      </ImageBackground>
      <Text style={Styles.listTitle}>{subTitle} </Text>
    </View>
  );
};

export default ListHeader;
