/**
 * Destinations Screen
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import {View, FlatList, ActivityIndicator} from 'react-native';

import DestinationCard from '../../components/destinationcard';
import ListHeader from '../../components/listheader';
import Styles from './styles';
import {searchDestinations} from '../../helper';

const Destinations = ({route}) => {
  const [destinations, setDestinationList] = useState([]);
  const [loading, setLoader] = useState(true);
  const place = route.params.place;

  useEffect(() => {
    loadDestinations();
  }, []);

  const loadDestinations = async () => {
    const destinationsList = await searchDestinations(place);
    if (destinationsList && destinationsList.data) {
      setLoader(false);
      setDestinationList(destinationsList.data);
    }
  };

  const {name, image} = place;

  const renderDestination = ({item, index}) => (
    <DestinationCard index={index} destination={item} />
  );

  return (
    <View style={Styles.container}>
      {loading ? (
        <View style={Styles.loadingContainer}>
          <ActivityIndicator color="#2b2c2b" size="large" />
        </View>
      ) : (
        <FlatList
          numColumns={2}
          data={destinations}
          contentContainerStyle={Styles.listInnerContainer}
          ListHeaderComponent={
            <ListHeader
              image={image}
              title={name}
              subTitle={'Top tours in ' + name}
            />
          }
          renderItem={renderDestination}
          keyExtractor={item => item.name + item.id}
        />
      )}
    </View>
  );
};

export default Destinations;
