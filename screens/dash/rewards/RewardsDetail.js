import React, {useRef, useState, useEffect} from 'react';
import {
  View,
  Dimensions,
  ImageBackground,
  Image,
  Text,
  TouchableOpacity,
  StatusBar,
  Modal,
  Animated,
} from 'react-native';
import moment from 'moment';
import {ScrollView} from 'react-native-gesture-handler';
import QRCode from 'react-native-qrcode-svg';

import {styles} from '../../../utils/styles';
import {COLORS} from '../../../utils/colors';
import * as Animatable from 'react-native-animatable';
import RBSheet from 'react-native-raw-bottom-sheet';
import LinearGradient from 'react-native-linear-gradient';
import {ProgressBar} from 'react-native-paper';
import ActivityLoader from '../../Loader/ActivityLoader';

import {APILINKS} from '../../../utils/apilinks';
import {useSelector} from 'react-redux';

const RewardsDetail = ({route, navigation}) => {
  const [modalActVisible, setModalActVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const refRBSheetConfirm = useRef();
  const screenWidth = Math.round(Dimensions.get('window').width);
  const screenHeight = Math.round(Dimensions.get('window').height);
  const [getProgressState, setProgressState] = useState(0);
  var anim = new Animated.Value(10);

  const [getMilliSec, setMilliSec] = useState(0);
  const [getMin, setMin] = useState(5);
  const [getSec, setSec] = useState(0);
  const [getQr, setQr] = useState('');
  const [elapsedTime, setElapsedTime] = useState(0);
  const [progress, setProgress] = useState(0);

  /get_value_from_redux/;
  const getToken = useSelector((state) => state.loginDetails);

  //TIMER_INTERVAL
  useEffect(() => {
    let myInterval = setInterval(() => {
      if (getSec > 0) {
        setSec((getSec) => getSec - 1);
      }
      if (getSec === 0) {
        if (getMin === 0) {
          clearInterval(myInterval);
        } else {
          setMin((getMin) => getMin - 1);
          setSec((getSec) => getSec + 59);
        }
      }

      if (getMin === 5) {
        setMin((getMin) => getMin - 1);
        setSec(59);
      } else if (getMin === 0 && getSec === 0) {
        navigation.goBack();
      }
      //  setProgressState(getSec)
    }, 1000);

    return () => {
      clearInterval(myInterval);
    };
  }, [getMin, getSec]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setModalVisible(true);
      var form = new FormData();
      form.append('api_token', getToken.msg.token);
      form.append('voucherID', route.params.voucherId);

      fetch(APILINKS.BASE_URL + APILINKS.CHECK_REDEEM_URL, {
        method: 'POST',
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data',
        }),
        body: form,
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.statuscode === '1') {
            setQrValues(data);
          } else {
            setModalVisible(false);
          }
        });
    });
    return () => {
      unsubscribe;
    };
  }, []);

  const callVoucherActivate = () => {
    setModalVisible(true);
    try {
      var form = new FormData();
      form.append('api_token', getToken.msg.token);
      form.append('voucherID', route.params.voucherId);

      fetch(APILINKS.BASE_URL + APILINKS.ADD_REDEEM_URL, {
        method: 'POST',
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data',
        }),
        body: form,
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.statuscode === '1') {
            setQrValues(data);
          } else {
            setModalVisible(false);
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  const setQrValues = (data) => {
    var maxTime = moment(data.data.max_time);
    setQr(data.data.qr_code);

    let setMaxtime = new Date(maxTime);

    let getMaxtime = setMaxtime.getTime();

    var minTime = moment(data.DateTime);

    let setMintime = new Date(minTime);
    let getMintime = setMintime.getTime();

    let diffTime = getMaxtime - getMintime;

    let secTotal = diffTime / 1000;
    setMilliSec(secTotal);
    console.log('lklklk', secTotal);
    let balSec = 300 - secTotal;
    console.log('lklklks', balSec);
    setElapsedTime(balSec);

    let mins = Math.floor(diffTime / 60000);
    setMin(mins);

    let secs = ((diffTime % 60000) / 1000).toFixed(0);
    setSec(secs);

    setModalActVisible(true);
    setModalVisible(false);

    // callTimerProgress()
  };

  const useProgress = (maxTimeInSeconds = getMilliSec) => {
    useEffect(() => {
      const intervalId = setInterval(() => {
        if (progress < 1) {
          setElapsedTime((t) => t + 1);
        }
      }, 1000);

      return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
      console.log('ela', elapsedTime);
      console.log('maxTim', maxTimeInSeconds);
      let elaTime = elapsedTime / maxTimeInSeconds;
      console.log('elaDeta', elaTime);
      setProgress(elaTime);
    }, [elapsedTime]);

    return progress;
  };

  const progressx = useProgress();

  return (
    <View style={styles.mainContainer}>
      <Animatable.View animation="fadeInUp" style={{flex: 1}}>
        <StatusBar backgroundColor={COLORS.black_100}></StatusBar>
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
          <View style={{height: screenHeight / 2}}>
            <ImageBackground
              resizeMode={'stretch'}
              style={{height: '100%', width: '100%'}}
              source={{uri: `${APILINKS.IMG_URL}${route.params.photo}`}}>
              <TouchableOpacity
                onPress={() => {
                  navigation.goBack();
                }}>
                <Image
                  style={{height: 50, width: 50, margin: 10}}
                  source={require('../../../Images/back_icon.png')}
                />
              </TouchableOpacity>
            </ImageBackground>
          </View>

          <View
            style={{
              backgroundColor: COLORS.black_100,
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              position: 'relative',
              marginTop: -20,
            }}>
            <View style={{margin: 10}}>
              <View style={{flexDirection: 'row', marginTop: 10}}>
                <Image
                  style={{
                    width: 40,
                    height: 40,
                    alignSelf: 'center',
                    resizeMode: 'contain',
                  }}
                  source={require('../../../Images/app_logo_large_x.png')}
                />

                <Text
                  style={{
                    color: COLORS.white,
                    alignSelf: 'center',
                    marginLeft: 10,
                    fontFamily: 'Poppins-Regular',
                  }}>
                  Shop Of Shoes
                </Text>
              </View>

              <Text
                style={{
                  color: COLORS.white,
                  fontSize: 20,
                  marginTop: 10,
                  fontFamily: 'Poppins-Regular',
                }}>
                {route.params.name}
              </Text>

              <Text
                style={{
                  color: COLORS.grey_line,
                  fontSize: 10,
                  marginTop: 20,
                  fontFamily: 'Poppins-Regular',
                }}>
                Available Outlets
              </Text>

              <View
                style={{
                  height: screenHeight / 15,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Image
                  style={{
                    height: 20,
                    width: 15,
                    resizeMode: 'contain',
                    marginRight: 5,
                  }}
                  source={require('../../../Images/location.png')}
                />
                <Text
                  style={{
                    fontSize: 12,
                    color: COLORS.yellow,
                    fontFamily: 'Poppins-Regular',
                  }}>
                  View Locations
                </Text>
              </View>

              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View
                  style={{
                    backgroundColor: COLORS.grey_200,
                    height: 70,
                    width: screenWidth / 2.2,
                    borderRadius: 5,
                  }}>
                  <Text
                    style={{
                      color: COLORS.grey_line,
                      fontSize: 10,
                      marginLeft: 10,
                      marginTop: 10,
                      fontFamily: 'Poppins-Regular',
                    }}>
                    Points
                  </Text>
                  <Text
                    style={{
                      color: COLORS.yellow,
                      fontSize: 12,
                      marginLeft: 10,
                      marginTop: 5,
                      fontFamily: 'Poppins-Regular',
                    }}>
                    17,000
                  </Text>
                </View>

                <View
                  style={{
                    backgroundColor: COLORS.grey_200,
                    height: 70,
                    width: screenWidth / 2.2,
                    borderRadius: 5,
                  }}>
                  <Text
                    style={{
                      color: COLORS.grey_line,
                      fontSize: 10,
                      marginLeft: 10,
                      marginTop: 10,
                      fontFamily: 'Poppins-Regular',
                    }}>
                    Validity
                  </Text>
                  <Text
                    style={{
                      color: COLORS.white,
                      fontSize: 12,
                      marginLeft: 10,
                      marginTop: 5,
                      fontFamily: 'Poppins-Regular',
                    }}>
                    1 Jan 2021 to 31 Jan 2021
                  </Text>
                </View>
              </View>

              <Text
                style={{
                  color: COLORS.grey_line,
                  fontSize: 12,
                  marginTop: 20,
                  fontFamily: 'Poppins-Regular',
                }}>
                Voucher Description
              </Text>

              <Text
                style={{
                  color: COLORS.grey,
                  fontSize: 12,
                  marginTop: 10,
                  fontFamily: 'Poppins-Regular',
                }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                elusmod tempor.
              </Text>

              <View
                style={{
                  height: 0.5,
                  backgroundColor: COLORS.grey_line,
                  marginTop: 20,
                  fontFamily: 'Poppins-Regular',
                }}
              />

              <Text
                style={{
                  color: COLORS.grey_line,
                  fontSize: 12,
                  marginTop: 20,
                  fontFamily: 'Poppins-Regular',
                }}>
                How TO Use
              </Text>

              <Text
                style={{
                  color: COLORS.grey,
                  fontSize: 12,
                  marginTop: 10,
                  fontFamily: 'Poppins-Regular',
                }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                elusmod tempor.
              </Text>

              <View
                style={{
                  height: 0.5,
                  backgroundColor: COLORS.grey_line,
                  marginTop: 20,
                }}
              />

              <Text
                style={{
                  color: COLORS.grey_line,
                  fontSize: 12,
                  marginTop: 20,
                  fontFamily: 'Poppins-Regular',
                }}>
                Terms & Conditions
              </Text>

              <Text
                style={{
                  color: COLORS.grey,
                  fontSize: 12,
                  marginTop: 10,
                  fontFamily: 'Poppins-Regular',
                }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                elusmod tempor.
              </Text>
            </View>
          </View>
        </ScrollView>

        <View
          style={{
            justifyContent: 'flex-end',
            backgroundColor: COLORS.black_100,
          }}>
          <TouchableOpacity onPress={() => refRBSheetConfirm.current.open()}>
            <Text
              style={{
                color: COLORS.black,
                backgroundColor: COLORS.yellow,
                padding: 15,
                borderRadius: 5,
                alignSelf: 'center',
                margin: 5,
                width: '95%',
                textAlign: 'center',
                fontSize: 12,
                fontFamily: 'Poppins-SemiBold',
              }}>
              ACTIVATE
            </Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>

      {/* //cancel_confirmation// */}
      <RBSheet
        ref={refRBSheetConfirm}
        closeOnDragDown={true}
        closeOnPressMask={true}
        height={screenHeight / 4}
        customStyles={{
          wrapper: {
            backgroundColor: 'rgba(52, 52, 52, 0.2)',
          },
          draggableIcon: {
            backgroundColor: '#fff',
          },
          container: {
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            elevation: 20,
            backgroundColor: COLORS.white,
          },
        }}>
        <View style={{padding: 10}}>
          <Text
            style={{
              marginLeft: 5,
              fontSize: 15,
              fontFamily: 'Poppins-SemiBold',
              marginTop: 10,
            }}>
            Activate Voucher
          </Text>
          <Text
            style={{
              marginLeft: 5,
              fontSize: 10,
              fontFamily: 'Poppins-Regular',
              marginTop: 10,
              color: COLORS.grey,
            }}>
            Please use this voucher within 5 minutes
          </Text>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 20,
            }}>
            <TouchableOpacity
              onPress={() => refRBSheetConfirm.current.close()}
              style={{
                backgroundColor: COLORS.white,
                borderColor: COLORS.red,
                borderWidth: 1,
                width: '48%',
                borderRadius: 5,
              }}>
              <Text
                style={{
                  color: COLORS.red,
                  textAlign: 'center',
                  padding: 10,
                  fontSize: 12,
                  fontFamily: 'Poppins-Regular',
                }}>
                CANCEL
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                [refRBSheetConfirm.current.close(), callVoucherActivate()];
              }}
              style={{
                backgroundColor: COLORS.black,
                width: '48%',
                borderRadius: 5,
              }}>
              <Text
                style={{
                  color: COLORS.white,
                  textAlign: 'center',
                  padding: 10,
                  fontSize: 12,
                  fontFamily: 'Poppins-Regular',
                }}>
                CONFIRM
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </RBSheet>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalActVisible}
        onRequestClose={() => {
          navigation.goBack();
          setModalActVisible(!modalActVisible);
        }}>
        <LinearGradient
          colors={[
            'rgba(13, 13, 13, 0.5)',
            'rgba(13, 13, 13, 0.6)',
            'rgba(00, 00, 00, 10)',
            COLORS.black,
            COLORS.black,
          ]}
          style={{
            flex: 1,
          }}>
          <View style={{flex: 0.9}}>
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}>
              <Image
                style={{height: 50, width: 50, margin: 10}}
                source={require('../../../Images/back_icon.png')}
              />
            </TouchableOpacity>

            <View
              style={{
                alignItems: 'center',
                backgroundColor: COLORS.white,
                width: 180,
                height: 180,
                justifyContent: 'center',
                alignSelf: 'center',
              }}>
              <View style={{margin: 10}}>
                <QRCode
                  value={getQr}
                  size={150}
                  backgroundColor={COLORS.white}
                />
              </View>

              {/* <Image
                style={{height: 150, width: 150, margin: 10, borderRadius: 10}}
                source={require('../../../Images/qrr.png')}
              /> */}
            </View>

            <View style={{margin: 10}}>
              <View style={{flexDirection: 'row', marginTop: 50}}>
                <Image
                  style={{
                    width: 40,
                    height: 40,
                    alignSelf: 'center',
                    resizeMode: 'contain',
                  }}
                  source={require('../../../Images/app_logo_large_x.png')}
                />

                <Text
                  style={{
                    color: COLORS.white,
                    alignSelf: 'center',
                    marginLeft: 10,
                    fontFamily: 'Poppins-Regular',
                  }}>
                  Shop Of Shoes
                </Text>
              </View>

              <Text
                style={{
                  color: COLORS.white,
                  fontSize: 18,
                  marginTop: 15,
                  fontFamily: 'Poppins-SemiBold',
                }}>
                RM 100 off purchases on 2020 Air Max Series
              </Text>

              <Text
                style={{
                  color: COLORS.grey_100,
                  fontSize: 12,
                  marginTop: 20,
                  fontFamily: 'Poppins-Regular',
                }}>
                RM100 off purvhase on 1x 2020 Air Max Series
              </Text>
            </View>
          </View>
          <View style={{flex: 0.1, justifyContent: 'flex-end'}}>
            <View
              style={{
                backgroundColor: COLORS.black_100,
                height: 1,
                marginBottom: 10,
              }}></View>

            <View
              style={{
                margin: 10,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View style={{flexDirection: 'row'}}>
                <Image
                  style={{height: 15, width: 15}}
                  source={require('../../../Images/clock_light.png')}
                />
                <Text
                  style={{
                    fontSize: 10,
                    color: COLORS.white,
                    fontFamily: 'Poppins-Regular',
                    marginLeft: 10,
                  }}>
                  Redeem in
                </Text>
              </View>

              <Text
                style={{
                  fontSize: 10,
                  color: COLORS.yellow,
                  fontFamily: 'Poppins-Regular',
                }}>
                {/* {getMin + ':' + getSec} */}

                {getMin + ':' + (getSec < 10 ? '0' : '') + getSec}
              </Text>
            </View>

            <View style={{marginLeft: 10, marginRight: 10, marginBottom: 10}}>
              {/* <ProgressBar progress={getSec} color={COLORS.grey} /> */}
              <ProgressBar progress={progressx} color={COLORS.yellow} />
            </View>
          </View>
        </LinearGradient>
      </Modal>
      <View>{modalVisible ? <ActivityLoader /> : null}</View>
    </View>
  );
};

export default RewardsDetail;
