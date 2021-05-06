import {StyleSheet, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    paddingTop: height * 0.02,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  tagContainer: {
    borderRadius: 10,
    width: width * 0.3,
    justifyContent: 'center',
    alignItems: 'center',
    //padding: '2%',
    backgroundColor: '#f8f8f8',
    marginRight: width * 0.01,
    marginTop: height * 0.01,
  },
  tag: {
    margin: '5%',
    fontFamily: 'Montserrat-Regular',
    color: '#2b2c2b',
  },
});

export default styles;
