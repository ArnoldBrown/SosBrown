import React, {useState} from 'react';
import {
  View,
  ImageBackground,
  Dimensions,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StatusBar,
  Modal,
  ActivityIndicator,
} from 'react-native';
import SnackBar from 'react-native-snackbar-component';
import {COLORS} from '../../utils/colors';
import {styles} from '../../utils/styles';
import OTPTextView from 'react-native-otp-textinput';
import * as Animatable from 'react-native-animatable';

import {useDispatch, useSelector} from 'react-redux';
import {otpAction} from '../../redux/actions/loginActions';
import {Ltout} from '../../redux/actions/loginActions';
import {purgeStoredState} from 'redux-persist';
import ActivityLoader from '../Loader/ActivityLoader';

import {APILINKS} from '../../utils/apilinks';

const Otp = ({navigation, route}) => {
  const screenHeight = Math.round(Dimensions.get('window').height);
  const screenWidth = Math.round(Dimensions.get('window').width);
  const [snackIsVisible, setSnackVisiblity] = useState(false);
  const [getOtp, setOtp] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const dispatch = useDispatch(); /// ======>>>Redux Hook <<<=====//
  const LoginStatus = useSelector((state) => state.loginDetails);

  const {status, statusCode, msg, extractName} = LoginStatus;

  const [getSnackMsg, setSnackMsg] = useState('Enter Valid OTP');

  const [countryCode] = useState([
    {
      code: '+60',
    },
    {
      code: '+91',
    },
  ]);

  const callOtpCheck = () => {
    if (getOtp.length === 4) {
      setModalVisible(true);
      callCheckOtp(route.params.apitoken, route.params.phoneno, getOtp);
    } else {
      setModalVisible(false);
      setSnackVisiblity(true);
    }
  };

  /check OTP/;
  const callCheckOtp = async (token, phone, otpx) => {
    setModalVisible(true);
    dispatch(Ltout(purgeStoredState));
    await dispatch(otpAction(token, phone, otpx, route.params.from)).then(
      () => {
        setModalVisible(false);

        if (status === 'failure') {
          switch (statusCode) {
            case 1:
              break;
            case 2:
              break;
            case '3':
              setSnackMsg(msg);
              setSnackVisiblity(true);
              break;
          }
        } else {
          setModalVisible(false);

          if (extractName === '') {
            navigation.navigate('UserName', {
              apitoken:token,
            });
          }
        }
      },
    );
  };

  /get OTP again/;
  const callGetOtp = (token, phone) => {
    setModalVisible(true);
    try {
      var form = new FormData();

      form.append('phone', phone);
      var urll = '';

      if (route.params.from === 'OLD') {
        urll = APILINKS.LOGIN_POHONE_URL;
      } else {
        form.append('api_token', token);
        urll = APILINKS.GET_OTP_URL;
      }

      fetch(APILINKS.BASE_URL + urll, {
        method: 'POST',
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data',
        }),
        body: form,
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('lllll', data);
          if (data.statuscode === '1') {
            setModalVisible(false);
          }
        });
    } catch (error) {}
  };

  return (
    <View style={[styles.mainContainer, {backgroundColor: COLORS.bg_white}]}>
      {snackIsVisible ? (
        <SnackBar
          visible={snackIsVisible}
          textMessage={getSnackMsg}
          actionHandler={() => {
            console.log('snackbar button clicked!');
          }}
          backgroundColor={COLORS.red}
          position="top"
          actionHandler={() => setSnackVisiblity(false)}
          actionText="OK"
        />
      ) : null}
      <Animatable.View animation="fadeInDown" style={{flex: 1}}>
        <StatusBar backgroundColor={COLORS.black_100}></StatusBar>
        <ScrollView
          contentContainerStyle={{flexGrow: 1}}
          showsVerticalScrollIndicator={false}>
          <View style={{flex: 0.95}}>
            <ImageBackground
              style={{height: 200, width: screenWidth}}
              imageStyle={{
                borderBottomRightRadius: 25,
                borderBottomLeftRadius: 25,
              }}
              source={require('../../Images/bg.png')}>
              <TouchableOpacity
                onPress={() => {
                  navigation.goBack();
                }}>
                <View style={[styles.backBtn]}>
                  <Image
                    style={{height: 15, width: 15}}
                    source={require('../../Images/back.png')}
                  />
                </View>
              </TouchableOpacity>
            </ImageBackground>

            <View>
              <View
                style={{
                  position: 'absolute',
                  alignItems: 'center',
                  top: -50,
                  width: '100%',
                }}>
                <Image
                  style={{
                    width: 100,
                    height: 100,
                    alignSelf: 'center',
                    resizeMode: 'contain',
                  }}
                  source={require('../../Images/app_logo_large_x.png')}
                />
              </View>

              <Text
                style={{
                  fontSize: 20,
                  color: COLORS.black,
                  textAlign: 'center',
                  marginTop: 80,
                  fontFamily: 'Poppins-Regular',
                }}>
                Enter Verification Code
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  color: COLORS.grey,
                  textAlign: 'center',
                  marginTop: 10,
                  fontFamily: 'Poppins-Regular',
                }}>
                Your verification code is send to
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  color: COLORS.grey,
                  textAlign: 'center',
                  marginTop: 10,
                  fontFamily: 'Poppins-Regular',
                }}>
                {route.params.phoneno}
              </Text>

              <View style={{marginTop: 50, marginLeft: 20, marginRight: 20}}>
                <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                  <OTPTextView
                    containerStyle={styles.textInputContainer}
                    handleTextChange={(text) => setOtp(text)}
                    textInputStyle={styles.roundedTextInput}
                    inputType="numeric"
                    cellTextLength={1}
                    inputCount={4}
                    offTintColor={COLORS.white}
                  />
                </View>

                <TouchableOpacity
                  onPress={() =>
                    callGetOtp(route.params.apitoken, route.params.phoneno)
                  }>
                  <Text
                    style={{
                      fontSize: 12,
                      color: COLORS.black,
                      textAlign: 'center',
                      marginTop: 30,
                      fontFamily: 'Poppins-Regular',
                    }}>
                    RESEND TAC
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={{flex: 0.05, justifyContent: 'flex-end'}}>
            <View
              style={{
                backgroundColor: COLORS.grey,
                height: 1,
                marginBottom: 10,
              }}></View>

            <TouchableOpacity
              onPress={() => {
                callOtpCheck();
              }}
              style={{
                width: '90%',
                backgroundColor: COLORS.black_100,
                alignSelf: 'center',
                borderRadius: 5,
                marginBottom: 5,
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 15,
                  color: COLORS.white,
                  padding: 10,
                  fontFamily: 'Poppins-Regular',
                }}>
                CONTINUE
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

        <View>{modalVisible ? <ActivityLoader /> : null}</View>
      </Animatable.View>
    </View>
  );
};
export default Otp;
