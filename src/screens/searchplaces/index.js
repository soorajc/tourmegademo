/**
 * SearchPlaces Screen
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {View, Dimensions, TextInput, Text, SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Styles from './styles';
import {PLACES, TAGS} from '../../data';
import PlaceList from '../../components/placeslist';
import TagCloud from '../../components/tagcloud';

const {width} = Dimensions.get('window');

const SearchPlaces = ({navigation}) => {
  const [searchKeyword, setSearchKeyword] = useState(null);
  const [placeSearchResult, setPlaceSearchResult] = useState([]);
  const [recentSearches, setRecentSearches] = useState([]);

  /* This functions takes the search keyword as the input
    and filter the places list based on the keyword and updates
    the placeSearchResult with the filtered data. */

  const handleSearch = keyword => {
    setSearchKeyword(keyword);
    const formattedKeyWord = keyword.toLowerCase();
    if (keyword !== '') {
      let filteredList = PLACES.filter(function (place) {
        return place.name.toLowerCase().includes(formattedKeyWord);
      });
      if (filteredList.length > 0) {
        setPlaceSearchResult(filteredList);
      } else {
        clearPlacesSearchResult();
      }
    } else {
      clearPlacesSearchResult();
    }
  };

  /* This functions handles placelistitem click and navigation
  to the screen with the destination details.
   */

  const showDestinations = place => {
    // Step1: Set search keyword
    setSearchKeyword(place.name);

    // Step2: Update recent search items
    let newSearch = recentSearches;

    // Step2a: Check whether the keyword was
    // already searched recently
    if (!newSearch.some(search => search.name === place.name)) {
      // Store only last few recent searched items
      if (newSearch.length > 3) {
        newSearch.shift();
      }
      newSearch.push(place);
      newSearch.reverse();
    }
    setRecentSearches(newSearch);

    // Step3: Clear filtered places list data
    clearPlacesSearchResult();

    // Step4: Navigate to the destinations screen
    navigation.navigate('Destinations', {place});
  };

  const clearPlacesSearchResult = () => {
    setPlaceSearchResult([]);
  };

  const handleTagPress = place => {
    navigation.navigate('Destinations', {place});
  };

  return (
    <SafeAreaView style={Styles.container}>
      <View style={Styles.container}>
        <View style={Styles.searchBoxContainer}>
          <View style={Styles.searchIconContainer}>
            <Icon name="search" size={width * 0.06} color="black" />
          </View>
          <View style={Styles.searchInputContainer}>
            <TextInput
              style={Styles.searchInput}
              onChangeText={handleSearch}
              value={searchKeyword}
              placeholder="Search your destination"
            />
          </View>
        </View>
        {placeSearchResult && placeSearchResult.length > 0 && (
          <PlaceList
            data={placeSearchResult}
            handlePlaceSelection={showDestinations}
          />
        )}
        {recentSearches.length > 0 && placeSearchResult.length === 0 && (
          <View style={Styles.recentSearchContainer}>
            <Text style={Styles.listTitle}>Recent Searches</Text>
            <PlaceList
              data={recentSearches}
              containerStyle={Styles.recentListContainer}
              listStyle={Styles.recentList}
              listItemContainerStyle={Styles.recentListItem}
              handlePlaceSelection={showDestinations}
            />
          </View>
        )}
        {placeSearchResult.length === 0 && (
          <View style={Styles.topSearchesContainer}>
            <Text style={Styles.listTitle}>Top Searches</Text>
            <TagCloud handleTagPress={handleTagPress} data={TAGS} />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default SearchPlaces;
