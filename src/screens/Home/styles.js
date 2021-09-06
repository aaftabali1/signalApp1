import {StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    flex: 1,
  },
  settingImage: {
    position: 'absolute',
    right: 20,
    top: 20,
    zIndex: 10,
  },
  heading: {
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 20,
  },
  imageStyle: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  ambBtn: {borderWidth: 1, borderRadius: 4, padding: 10, marginVertical: 10},
  aBtn: {
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    marginVertical: 10,
  },
  aBtnHorizontal: {
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    marginHorizontal: 10,
  },
  ambBtnHorizontal: {
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    marginHorizontal: 10,
  },
  aliginItemCenter: {alignItems: 'center'},
  rowJustifyContent: {flexDirection: 'row', justifyContent: 'space-between'},
  rowAlignItems: {flexDirection: 'row', alignItems: 'center'},
});
