import {StyleSheet, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
  coverImage: {
    width: width,
    height: height * 0.3,
  },
  coverImageOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(52, 52, 52, 0.5)',
  },
  coverTitle: {
    fontFamily: 'Montserrat-Bold',
    color: 'white',
    fontSize: height * 0.04,
    width: width * 0.8,
    textAlign: 'center',
  },
  listInnerContainer: {
    alignItems: 'center',
  },
  listTitle: {
    fontFamily: 'Montserrat-Bold',
    color: 'black',
    fontSize: height * 0.025,
    width: width * 0.8,
    textAlign: 'left',
    marginLeft: width * 0.05,
    marginTop: height * 0.03,
    marginBottom: height * 0.03,
  },
});

export default styles;
