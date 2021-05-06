import {StyleSheet, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
  placeListContainer: {
    width: width * 0.9,
    alignSelf: 'center',
    height: height * 0.3,
  },
  placeList: {
    width: width * 0.9,
    backgroundColor: '#fafafa',
  },
  placeListItemContainer: {
    borderBottomWidth: 1,
    padding: '5%',
    borderColor: '#ededed',
  },
  placeLabel: {
    fontFamily: 'Montserrat-Regular',
    color: '#2b2c2b',
  },
});

export default styles;
