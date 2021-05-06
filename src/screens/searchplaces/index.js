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

const SearchPlaces = () => {
  const [searchKeyword, setSearchKeyword] = useState(null);
  const [placeSearchResult, setPlaceSearchResult] = useState([]);
  const [recentSearches, setRecentSearches] = useState([]);

  /* This functions takes the search keyword as the input
    and filter the places list based on the keyword and updates
    the placeSearchResult with the filtered data. */

  const handleSearch = keyword => {
    setSearchKeyword(keyword);
    if (keyword !== '') {
      let filteredList = PLACES.filter(function (item) {
        return item.name.includes(keyword);
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
    let newSearch = [];
    newSearch.push({id: place.id, name: place.name});
    setRecentSearches(previousSearch => [...previousSearch, ...newSearch]);
    setSearchKeyword(place.name);
    clearPlacesSearchResult();
  };

  const clearPlacesSearchResult = () => {
    setPlaceSearchResult([]);
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
            <TagCloud data={TAGS} />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default SearchPlaces;
