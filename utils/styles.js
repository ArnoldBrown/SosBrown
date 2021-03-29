import {StyleSheet} from 'react-native';
import {COLORS} from '../utils/colors';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  logoSos: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: COLORS.yellow,
    justifyContent: 'center',
  },
  logoSosDash: {
    width: 60,
    height: 60,
    borderRadius: 50,
    justifyContent: 'center',
  },
  logoSos40: {
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: COLORS.yellow,
    justifyContent: 'center',
  },

  bgSos40: {
    width: 50,
    height: 50,
    borderRadius: 30,
    backgroundColor: COLORS.yellow,
    justifyContent: 'center',
  },

  backBtn: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    margin: 10,
    alignItems: 'center',
  },
  logoSos40_black: {
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: COLORS.black,
    justifyContent: 'center',
  },

  //Text_Style//
  textBold: {
    backgroundColor: COLORS.yellow,
    justifyContent: 'center',
  },

  textConfirmed: {
    color: COLORS.green,
    fontWeight: 'bold',
    fontSize: 8,
  },

  textPending: {
    color: COLORS.red,
    fontWeight: 'bold',
    fontSize: 8,
  },

  //Button//
  appButtonText: {
    fontSize: 12,
    color: COLORS.white,
    fontWeight: 'bold',
    alignSelf: 'center',
  },

  buttonBlack: {
    elevation: 8,
    backgroundColor: COLORS.black_100,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginBottom: 20,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 20,
  },

  //OTP//

  textInputContainer: {
    marginBottom: 10,
    justifyContent: 'center',
  },

  roundedTextInput: {
    height: 45,
    width: 45,
    borderRadius: 10,
    borderWidth: 4,
    elevation: 1,
    backgroundColor: COLORS.white,
  },

  //overlay//
  overlay_Orange: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(255, 142, 29,0.7)',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },

  overlay_Violet: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(127, 29, 255,0.7)',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },

  overlay_Grey: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(204, 204, 204,0.7)',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },

  //line//
  line_divider: {
    height: 1,
    backgroundColor: COLORS.grey_line,
    marginTop: 10,
    marginBottom: 10,
  },

  bottomContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },

  overlay: {
    flex: 1,
    position: 'absolute',
    left: 0,
    top: 0,
    opacity: 0.5,
    backgroundColor: 'black',
    width: '100%',
  },

  backgroundContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },

  logo: {
    width: 50,
    height: 50,
  },
  backdrop: {
    flex: 1,
    flexDirection: 'column',
    height: '100%',
    width: '100%',
  },
  headline: {
    fontSize: 18,
    textAlign: 'center',
    backgroundColor: 'black',
    color: 'white',
  },

  catalogCatActive: {
    backgroundColor: COLORS.black,
  },

  catalogCatInActive: {
    backgroundColor: COLORS.white,
  },

  catalogCatCommon: {
    width: 70,
    height: 70,
    borderColor: COLORS.black_100,
    borderWidth: 2,
    borderRadius: 5,
    justifyContent: 'center',
    margin: 5,
  },

  headerStyle: {
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    height: 100,
  },

  feedbackOptionOffStyle: {
    fontSize: 15,
    width: 95,
    height: 80,
    backgroundColor: COLORS.white,
    elevation: 10,
    borderRadius: 5,
    margin: 10,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  feedbackOptionOnStyle: {
    fontSize: 15,
    width: 95,
    height: 80,
    backgroundColor: COLORS.yellow_100,
    elevation: 10,
    borderRadius: 5,
    margin: 10,
    textAlign: 'center',
    textAlignVertical: 'center',
  },

  rewardLists: {
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,

    backgroundColor: COLORS.white,
    borderRadius: 15,
    marginBottom: 20,
  },

  imageStyle: {width: '100%', height: '100%'},

  input: {
    height: 50,
    backgroundColor: COLORS.grey_300,
    borderRadius: 25,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 20,
  },

  listBox: {
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,
    elevation: 4,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginLeft: 5,
    marginRight: 5,
  },

  listBoxReward: {
    borderRadius: 20,
    marginBottom: 20,
    elevation: 5,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    marginLeft: 12,
  },

  listBoxCatalog: {
    borderRadius: 20,
    marginBottom: 20,
    elevation: 2,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    marginLeft: 12,
  },

  commonWrapper: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    backgroundColor: COLORS.bg_white,
    flex: 1,
    flexDirection: 'column',
  },

  //TopUp_Online_Banking
  activeBtnBackGround: {
    width: '100%',
    backgroundColor: COLORS.black_100,
    alignSelf: 'center',
    borderRadius: 5,
    marginTop: 20,
  },

  nonactiveBtnBackGround: {
    width: '100%',
    backgroundColor: COLORS.grey_100,
    alignSelf: 'center',
    borderRadius: 5,
    marginTop: 20,
  },

  activeWhiteText: {
    textAlign: 'center',
    fontSize: 12,
    color: COLORS.white,
    padding: 15,
    fontFamily: 'Poppins-Regular',
  },
  nonactiveGreyText: {
    textAlign: 'center',
    fontSize: 12,
    color: COLORS.grey_200,
    padding: 15,
    fontFamily: 'Poppins-Regular',
  },

  sliderContainer: {
    overflow: 'visible',
  },
  sliderContentContainer: {
    overflow: 'visible',
  },

  htmlStyle: {
    color: COLORS.black,
    fontFamily: 'Poppins-Regular',
  },
});
