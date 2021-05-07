import {StyleSheet, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
  card: {
    width: width * 0.44,
    elevation: 2,
    backgroundColor: 'white',
    marginBottom: height * 0.03,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
  },
  cardImageContainer: {
    height: height * 0.25,
    width: '100%',
    backgroundColor: 'white',
  },
  cardImage: {
    flex: 1,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    resizeMode: 'stretch',
    backgroundColor: '#e6e6e6',
  },
  heartIconContainer: {
    flex: 1,
    paddingLeft: width * 0.02,
    paddingTop: height * 0.02,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    backgroundColor: 'rgba(52, 52, 52, 0.6)',
  },
  placeAndRatingContainer: {
    width: '100%',
    paddingLeft: '5%',
    flexDirection: 'row',
    paddingTop: '3%',
  },
  placeContainer: {
    width: '65%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  placeLabel: {
    fontSize: height * 0.015,
    fontFamily: 'Montserrat-Regular',
    width: width * 0.2,
    marginLeft: width * 0.01,
  },
  ratingContainer: {
    width: '35%',
    alignItems: 'center',
    flexDirection: 'row',
  },
  ratingLabel: {
    fontSize: height * 0.015,
    width: width * 0.2,
    marginLeft: width * 0.01,
    fontFamily: 'Montserrat-Regular',
  },
  boldText: {
    fontFamily: 'Montserrat-Bold',
  },
  destinationNameContainer: {
    height: height * 0.08,
    padding: '5%',
  },
  destinationName: {
    fontFamily: 'Montserrat-Regular',
    fontSize: height * 0.02,
  },
  price: {
    fontFamily: 'Montserrat-Regular',
    marginLeft: '5%',
    marginBottom: '5%',
  },
});

export default styles;
