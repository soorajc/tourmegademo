import {StyleSheet, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: height * 0.02,
  },
  searchBoxContainer: {
    width: width * 0.9,
    height: height * 0.07,
    alignSelf: 'center',
    borderRadius: 5,
    backgroundColor: '#f2f9f7',
    flexDirection: 'row',
  },
  searchIconContainer: {
    width: '15%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchInputContainer: {
    width: '85%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchInput: {
    height: height * 0.06,
    width: '100%',
    alignSelf: 'center',
    justifyContent: 'center',
    fontFamily: 'Montserrat-Regular',
  },
  recentSearchContainer: {
    marginTop: height * 0.02,
    marginBottom: height * 0.02,
    paddingTop: height * 0.02,
    width: width * 0.9,
    alignSelf: 'center',
  },
  listTitle: {
    fontFamily: 'Montserrat-Bold',
    color: '#2b2c2b',
  },
  recentListContainer: {
    marginTop: height * 0.02,
    width: width * 0.9,
    alignSelf: 'center',
  },
  recentList: {
    backgroundColor: 'white',
  },
  recentListItem: {
    width: width * 0.9,
    padding: '2%',
    borderBottomWidth: 1,
    borderColor: '#dedede',
    paddingBottom: height * 0.02,
  },
  topSearchesContainer: {
    paddingLeft: width * 0.05,
    paddingTop: height * 0.02,
  },
});

export default styles;
