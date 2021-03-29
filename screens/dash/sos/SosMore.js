import React, {useRef, useState} from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  Text,
  TextInput,
  Dimensions,
  Alert,
  StatusBar,
  ActivityIndicator,
  LogBox,
} from 'react-native';
import SnackBar from 'react-native-snackbar-component';
import {ScrollView} from 'react-native-gesture-handler';
import {COLORS} from '../../../utils/colors';
import {styles} from '../../../utils/styles';
import {APILINKS} from '../../../utils/apilinks';
import RBSheet from 'react-native-raw-bottom-sheet';
import ActivityLoader from '../../Loader/ActivityLoader';

import {Ltout} from '../../../redux/actions/loginActions';
import {useDispatch, useSelector} from 'react-redux';
import {purgeStoredState} from 'redux-persist';

const SosMore = ({navigation}) => {
  const refRBSheet = useRef();

  const screenWidth = Math.round(Dimensions.get('window').width);
  const screenHeight = Math.round(Dimensions.get('window').height);
  const [getFbType, setFbType] = useState('');
  const [getFeedBack, setFeedBack] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [getSnackMsg, setSnackMsg] = useState('');
  const [snackIsVisible, setSnackVisiblity] = useState(false);

  const dispatch = useDispatch();

  const LOGOUT = () => {
    dispatch(Ltout(purgeStoredState));
  };

  /get_value_from_redux/;
  const getToken = useSelector((state) => state.loginDetails);
  console.log('dfddd', getToken);

  const logoutAlert = () => {
    //function to make two option alert
    Alert.alert(
      //title
      getToken.msg.name !== '' ? 'Hi ' + getToken.msg.name : 'Hi user',
      //body
      'Are you sure you want to logout?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('No Pressed'),
          style: 'cancel',
        },
        {
          text: 'Yes',
          onPress: () => LOGOUT(),
        },
      ],
      {cancelable: false},
      //clicking out side of alert will not cancel
    );
  };

  const postFeedBack = () => {
    console.log('COMING', 'YESSSS');
    if (getFbType.length > 0) {
      console.log('COMING', 'YESSSS1');
      if (getFeedBack.length > 0) {
        console.log('COMING', 'YESSSS2');
        setModalVisible(true);
        setSnackVisiblity(false);
        callFeedBack();
      } else {
        setSnackMsg('Enter some thoughts');
        setModalVisible(false);
        setSnackVisiblity(true);
      }
    } else {
      setSnackMsg('Select the feedback type');
      setModalVisible(false);
      setSnackVisiblity(true);
    }
  };

  const callFeedBack = () => {
    try {
      var form = new FormData();
      form.append('title', getFbType);
      form.append('description', getFeedBack);
      form.append('email', 'arnoldbrown009@gmail.com');

      fetch(APILINKS.BASE_URL + APILINKS.POST_FEEDBACK_URL, {
        method: 'POST',
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data',
        }),
        body: form,
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('reess', data);
          setModalVisible(false);
          setSnackVisiblity(false);
          setSnackMsg(data.data);
          setSnackVisiblity(true);
          refRBSheet.current.close();
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor={COLORS.black_100}></StatusBar>
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
      <View style={{flex: 1, backgroundColor: COLORS.grey_300}}>
       
      <View
        style={{
          backgroundColor: COLORS.white,
          height: 50,
          flexDirection: 'row',
          elevation: 1,
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={{alignSelf: 'center', flexDirection: 'row'}}>
          <Image
            style={{
              height: 15,
              width: 15,
              resizeMode: 'contain',
              marginRight: 2,
              marginLeft: 5,
              alignSelf: 'center',
            }}
            source={require('../../../Images/back_black.png')}
          />

          <Text
            style={{
              marginLeft: 10,
              fontFamily: 'Poppins-Bold',
              alignSelf: 'center',
              fontSize: 15,
            }}>
            More
          </Text>
        </TouchableOpacity>
      </View>


        <ScrollView contentContainerStyle={{flexGrow: 1}}>
          <Text
            style={{
              fontSize: 25,
              alignSelf: 'center',
              marginTop: 20,
              fontFamily: 'Poppins-Bold',
            }}>
            {getToken.msg.name !== '' ? getToken.msg.name : 'Hi user'}
            {/* // {getToken.msg.name} */}
          </Text>
          <Text
            style={{
              fontSize: 12,
              alignSelf: 'center',
              marginTop: 5,
              color: COLORS.grey,
              fontFamily: 'Poppins-Bold',
            }}>
            {getToken.msg.phone}
          </Text>

          <View
            style={{
              marginTop: 40,
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('MyVouchers');
              }}
              style={{marginRight: 10}}>
              <View style={[styles.logoSos40_black, {alignSelf: 'center'}]}>
                <Image
                  style={{
                    width: 15,
                    height: 15,
                    alignSelf: 'center',
                    resizeMode: 'contain',
                  }}
                  source={require('../../../Images/ticket.png')}
                />
              </View>
              <Text
                style={{
                  fontSize: 12,
                  alignSelf: 'center',
                  marginTop: 5,
                  color: COLORS.black_100,
                  fontFamily: 'Poppins-Regular',
                }}>
                My Vouchers
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('EditProfile');
              }}
              style={{marginLeft: 10}}>
              <View style={[styles.logoSos40_black, {alignSelf: 'center'}]}>
                <Image
                  style={{
                    width: 15,
                    height: 15,
                    alignSelf: 'center',
                    resizeMode: 'contain',
                  }}
                  source={require('../../../Images/edit.png')}
                />
              </View>
              <Text
                style={{
                  fontSize: 12,
                  alignSelf: 'center',
                  marginTop: 5,
                  color: COLORS.black_100,
                  fontFamily: 'Poppins-Regular',
                }}>
                Edit Profile
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{margin: 20}}>
            <Text
              style={{
                fontSize: 15,
                marginTop: 5,
                color: COLORS.grey,
                fontFamily: 'Poppins-Regular',
              }}>
              SOS
            </Text>

            <View style={styles.line_divider} />

            <TouchableOpacity
              onPress={() => {
                navigation.navigate('MyReservation');
              }}
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text
                style={{
                  fontSize: 15,
                  marginTop: 5,
                  color: COLORS.black_100,
                  marginLeft: 20,
                  fontFamily: 'Poppins-Regular',
                }}>
                My Reservations
              </Text>
              <Image
                style={{
                  width: 10,
                  height: 10,
                  alignSelf: 'center',
                  resizeMode: 'contain',
                }}
                source={require('../../../Images/next.png')}
              />
            </TouchableOpacity>

            <View style={styles.line_divider} />

            <TouchableOpacity
              onPress={() => {
                navigation.navigate('OutletsMain');
              }}
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text
                style={{
                  fontSize: 15,
                  marginTop: 5,
                  color: COLORS.black_100,
                  marginLeft: 20,
                  fontFamily: 'Poppins-Regular',
                }}>
                Outlets
              </Text>
              <Image
                style={{
                  width: 10,
                  height: 10,
                  alignSelf: 'center',
                  resizeMode: 'contain',
                }}
                source={require('../../../Images/next.png')}
              />
            </TouchableOpacity>

            <View style={styles.line_divider} />

            <Text
              style={{
                fontSize: 15,
                marginTop: 5,
                color: COLORS.grey,
                marginTop: 15,
                fontFamily: 'Poppins-Regular',
              }}>
              Preferences
            </Text>

            <View style={styles.line_divider} />

            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text
                style={{
                  fontSize: 15,
                  marginTop: 5,
                  color: COLORS.black_100,
                  marginLeft: 20,
                  fontFamily: 'Poppins-Regular',
                }}>
                Security
              </Text>
              <Image
                style={{
                  width: 10,
                  height: 10,
                  alignSelf: 'center',
                  resizeMode: 'contain',
                }}
                source={require('../../../Images/next.png')}
              />
            </View>

            <View style={styles.line_divider} />

            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text
                style={{
                  fontSize: 15,
                  marginTop: 5,
                  color: COLORS.black_100,
                  marginLeft: 20,
                  fontFamily: 'Poppins-Regular',
                }}>
                Push Notifications
              </Text>
              <Image
                style={{
                  width: 10,
                  height: 10,
                  alignSelf: 'center',
                  resizeMode: 'contain',
                }}
                source={require('../../../Images/next.png')}
              />
            </View>

            <View style={styles.line_divider} />

            <Text
              style={{
                fontSize: 15,
                marginTop: 5,
                color: COLORS.grey,
                marginTop: 15,
                fontFamily: 'Poppins-Regular',
              }}>
              Others
            </Text>

            <View style={styles.line_divider} />

            <TouchableOpacity
              onPress={() => refRBSheet.current.open()}
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text
                style={{
                  fontSize: 15,
                  marginTop: 5,
                  color: COLORS.black_100,
                  marginLeft: 20,
                  fontFamily: 'Poppins-Regular',
                }}>
                Feedback
              </Text>
              <Image
                style={{
                  width: 10,
                  height: 10,
                  alignSelf: 'center',
                  resizeMode: 'contain',
                }}
                source={require('../../../Images/next.png')}
              />
            </TouchableOpacity>

            <View style={styles.line_divider} />

            <TouchableOpacity
              onPress={() => {
                navigation.navigate('AboutMain');
              }}
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text
                style={{
                  fontSize: 15,
                  marginTop: 5,
                  color: COLORS.black_100,
                  marginLeft: 20,
                  fontFamily: 'Poppins-Regular',
                }}>
                About
              </Text>
              <Image
                style={{
                  width: 10,
                  height: 10,
                  alignSelf: 'center',
                  resizeMode: 'contain',
                }}
                source={require('../../../Images/next.png')}
              />
            </TouchableOpacity>

            <View style={styles.line_divider} />

            <TouchableOpacity
              onPress={logoutAlert}
              style={{
                flexDirection: 'row',
                width: 100,
                height: 40,
                marginRight: 20,
                borderRadius: 5,
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 10,
                alignSelf: 'center',
              }}>
              <Image
                style={{
                  height: 20,
                  width: 20,
                  resizeMode: 'contain',
                  marginRight: 5,
                  alignItems: 'center',
                }}
                source={require('../../../Images/logout.png')}
              />
              <Text
                style={{
                  fontSize: 15,
                  color: COLORS.red,
                  fontFamily: 'Poppins-Regular',
                }}>
                LOGOUT
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
      <View>{modalVisible ? <ActivityLoader /> : null}</View>
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        height={screenHeight / 1.5}
        customStyles={{
          wrapper: {
            backgroundColor: 'rgba(52, 52, 52, 0.2)',
          },
          container: {
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            elevation: 20,
            backgroundColor: COLORS.white,
          },
        }}>
        <ScrollView
          contentContainerStyle={{flexGrow: 1}}
          collapsable={true}
          showsVerticalScrollIndicator={false}>
          <TouchableOpacity activeOpacity={1}>
            <View style={{margin: 10}}>
              <Text
                style={{
                  fontSize: 20,
                  color: COLORS.black_100,
                  textAlign: 'center',
                }}>
                Every feedback helps.
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  color: COLORS.black_100,
                  textAlign: 'center',
                }}>
                What can we improve on?
              </Text>

              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 20,
                  alignSelf: 'center',
                }}>
                <TouchableOpacity onPress={() => setFbType('Service')}>
                  <Text
                    style={
                      getFbType === 'Service'
                        ? styles.feedbackOptionOnStyle
                        : styles.feedbackOptionOffStyle
                    }>
                    Service
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setFbType('App Experience')}>
                  <Text
                    style={
                      getFbType === 'App Experience'
                        ? styles.feedbackOptionOnStyle
                        : styles.feedbackOptionOffStyle
                    }>
                    App Experience
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setFbType('Prices')}>
                  <Text
                    style={
                      getFbType === 'Prices'
                        ? styles.feedbackOptionOnStyle
                        : styles.feedbackOptionOffStyle
                    }>
                    Prices
                  </Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 5,
                  alignSelf: 'center',
                }}>
                <TouchableOpacity
                  onPress={() => setFbType('Payment Experience')}>
                  <Text
                    style={
                      getFbType === 'Payment Experience'
                        ? styles.feedbackOptionOnStyle
                        : styles.feedbackOptionOffStyle
                    }>
                    Payment Experience
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setFbType('Others')}>
                  <Text
                    style={
                      getFbType === 'Others'
                        ? styles.feedbackOptionOnStyle
                        : styles.feedbackOptionOffStyle
                    }>
                    Others
                  </Text>
                </TouchableOpacity>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 20,
                  marginLeft: 5,
                  marginRight: 5,
                }}>
                <View
                  style={{
                    flex: 1,
                    backgroundColor: COLORS.white,
                    borderRadius: 5,
                    elevation: 1,
                    marginLeft: 2,
                    height: 50,
                  }}>
                  <TextInput
                    style={{flex: 1, color: COLORS.black, padding: 10}}
                    placeholder="Share your thoughts here"
                    underlineColorAndroid="#fff"
                    placeholderTextColor={COLORS.grey}
                    onChangeText={(text) => setFeedBack(text)}
                  />
                </View>
              </View>

              <TouchableOpacity
                onPress={() => {
                  postFeedBack();
                }}
                style={{
                  width: '96%',
                  backgroundColor: COLORS.black_100,
                  alignSelf: 'center',
                  borderRadius: 5,
                  justifyContent: 'flex-end',
                  marginTop: 20,
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 15,
                    color: COLORS.white,
                    padding: 10,
                  }}>
                  SEND FEEDBACK
                </Text>
              </TouchableOpacity>
              <View style={{paddingBottom: 100}}></View>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </RBSheet>
    </View>
  );
};

export default SosMore;
