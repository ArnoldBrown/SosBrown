import React, {useState, useRef} from 'react';
import {
  View,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Dimensions,
  StatusBar,
  ActivityIndicator,
  Modal,
} from 'react-native';
import SnackBar from 'react-native-snackbar-component';
import {styles} from '../../utils/styles';
import {COLORS} from '../../utils/colors';
import {APILINKS} from '../../utils/apilinks';
import RBSheet from 'react-native-raw-bottom-sheet';

const ReserveDetails = ({navigation, route}) => {
  const refRBSheet = useRef();
  const refRBSheetCancelReason = useRef();

  const screenHeight = Math.round(Dimensions.get('window').height);
  const screenWidth = Math.round(Dimensions.get('window').width);
  const [modalVisible, setModalVisible] = useState(false);
  const [getCanReason, setCanReason] = useState('');
  const [snackIsVisible, setSnackVisiblity] = useState(false);
  const [getSnackMsg, setSnackMsg] = useState('cxcxcxcxcx');

  const callCancelReserv = (id) => {
    if (getCanReason === '') {
      setSnackMsg('Enter reason to cancel');
      setSnackVisiblity(true);
    } else {
      console.log('llllxxxl', id);
      console.log(getCanReason);
      setModalVisible(true);
      try {
        var form = new FormData();
        form.append('id', id);
        fetch(APILINKS.BASE_URL + APILINKS.RESERVATION_CANCEL_URL, {
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
              setModalVisible(false);
              navigation.navigate('MyReservation');
            }
          });
      } catch (error) {}
    }
  };

  return (
    <View style={[styles.mainContainer, {backgroundColor: COLORS.white}]}>
      <StatusBar backgroundColor={COLORS.black_100}></StatusBar>

      <View
        style={{
          backgroundColor: COLORS.white,
          height: 50,
          flexDirection: 'row',
          elevation: 1,
        }}>
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
            source={require('../../Images/back_black.png')}
          />

          <Text
            style={{
              marginLeft: 10,
              fontFamily: 'Poppins-Bold',
              alignSelf: 'center',
              fontSize: 15,
            }}>
            {route.params.paramKeyTitle}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{flex: 1}}>
        <Text
          style={{
            backgroundColor: COLORS.grey_300,
            padding: 10,
            fontFamily: 'Poppins-Regular',
          }}>
          Reservation Summary
        </Text>

        <ScrollView
          contentContainerStyle={{flexGrow: 1}}
          showsHorizontalScrollIndicator={false}>
          <View style={{margin: 10}}>
            <View style={{marginTop: 20}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <TouchableOpacity
                  onPress={() => refRBSheet.current.close()}
                  style={{
                    backgroundColor: COLORS.black,
                    width: '48%',
                    borderRadius: 5,
                    padding: 10,elevation:20
                  }}>
                  <Image
                    style={{
                      height: 15,
                      width: 15,
                      resizeMode: 'contain',
                    }}
                    source={require('../../Images/location.png')}
                  />
                  <Text
                    style={{
                      color: COLORS.yellow,

                      fontSize: 12,
                      marginTop: 10,
                      fontFamily: 'Poppins-Regular',
                    }}>
                    Get Directions
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    refRBSheetCancelReason.current.open();
                    refRBSheet.current.close();
                  }}
                  style={{
                    backgroundColor: COLORS.black,
                    width: '48%',
                    borderRadius: 5,
                    padding: 15,elevation:20
                  }}>
                  <Image
                    style={{
                      height: 15,
                      width: 15,
                      resizeMode: 'contain',
                    }}
                    source={require('../../Images/location.png')}
                  />
                  <Text
                    style={{
                      color: COLORS.yellow,
                      fontSize: 12,
                      marginTop: 10,
                      fontFamily: 'Poppins-Regular',
                    }}>
                    Contact Us
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <Text
              style={{
                fontSize: 12,
                color: COLORS.grey,
                marginTop: 20,
                fontFamily: 'Poppins-Regular',
              }}>
              Outlet
            </Text>

            <Text
              style={{
                fontSize: 12,
                color: COLORS.black_100,
                marginTop: 5,
                fontFamily: 'Poppins-Medium',
              }}>
              {route.params.outname}
            </Text>

            <Text
              style={{
                fontSize: 12,
                color: COLORS.grey,
                marginTop: 20,
                fontFamily: 'Poppins-Regular',
              }}>
              Date
            </Text>

            <Text
              style={{
                fontSize: 12,
                color: COLORS.black_100,
                marginTop: 5,
                fontFamily: 'Poppins-Medium',
              }}>
              {route.params.date}
            </Text>

            <Text
              style={{
                fontSize: 12,
                color: COLORS.grey,
                marginTop: 20,
                fontFamily: 'Poppins-Regular',
              }}>
              Time
            </Text>

            <Text
              style={{
                fontSize: 12,
                color: COLORS.black_100,
                marginTop: 5,
                fontFamily: 'Poppins-Medium',
              }}>
              {route.params.time}
            </Text>

            <Text
              style={{
                fontSize: 12,
                color: COLORS.grey,
                marginTop: 20,
                fontFamily: 'Poppins-Regular',
              }}>
              Number of Pax
            </Text>

            <Text
              style={{
                fontSize: 12,
                color: COLORS.black_100,
                marginTop: 5,
                fontFamily: 'Poppins-Medium',
              }}>
              {route.params.pax}
            </Text>

            <Text
              style={{
                fontSize: 12,
                color: COLORS.grey,
                marginTop: 20,
                fontFamily: 'Poppins-Regular',
              }}>
              Reservation Name
            </Text>

            <Text
              style={{
                fontSize: 12,
                color: COLORS.black_100,
                marginTop: 5,
                fontFamily: 'Poppins-Medium',
              }}>
              {route.params.usrName}
            </Text>

            <Text
              style={{
                fontSize: 12,
                color: COLORS.grey,
                marginTop: 20,
                fontFamily: 'Poppins-Regular',
              }}>
              Mobile Number
            </Text>

            <Text
              style={{
                fontSize: 12,
                color: COLORS.black_100,
                marginTop: 5,
                fontFamily: 'Poppins-Medium',
              }}>
              {route.params.mobile}
            </Text>

            <Text
              style={{
                fontSize: 12,
                color: COLORS.grey,
                marginTop: 20,
                fontFamily: 'Poppins-Regular',
              }}>
              Additional Notes
            </Text>

            <Text
              style={{
                fontSize: 12,
                color: COLORS.black_100,
                marginTop: 5,
                fontFamily: 'Poppins-Medium',
              }}>
              {route.params.desc}
            </Text>
          </View>
        </ScrollView>

        <View style={{justifyContent: 'flex-end', elevation: 10}}>
          <View
            style={{backgroundColor: COLORS.grey, height: 1, marginBottom: 10}}
          />

          <TouchableOpacity
            onPress={() => refRBSheet.current.open()}
            style={{
              width: '90%',
              backgroundColor: COLORS.black_100,
              alignSelf: 'center',
              borderRadius: 5,
              marginBottom: 10,
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 12,
                color: COLORS.white,
                padding: 10,
                fontFamily: 'Poppins-Regular',
              }}>
              {route.params.paramKeyBtn}
            </Text>
          </TouchableOpacity>
        </View>

        <Modal transparent={true} visible={modalVisible}>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <View
              style={{
                backgroundColor: 'rgba(52, 52, 52, 0.8)',
                width: 100,
                height: 100,
                borderRadius: 20,
                justifyContent: 'center',
              }}>
              <ActivityIndicator size="large" color={COLORS.yellow} />
            </View>
          </View>
        </Modal>
      </View>

      {/* //cancel_confirmation// */}
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}
        height={screenHeight / 3.5}
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
        <View style={{padding: 10}}>
          <Text
            style={{
              marginLeft: 20,
              fontSize: 15,
              fontFamily: 'Poppins-Bold',
              marginTop: 10,
              textAlign: 'center',
            }}>
            Cancel Reservation
          </Text>
          <Text
            style={{
              marginLeft: 20,
              fontSize: 12,
              marginTop: 10,
              textAlign: 'center',
              color: COLORS.grey,
              fontFamily: 'Poppins-Regular',
            }}>
            Are you sure you want to cancel reservation?
          </Text>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 40,
            }}>
            <TouchableOpacity
              onPress={() => refRBSheet.current.close()}
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
                NO
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                refRBSheetCancelReason.current.open();
                refRBSheet.current.close();
              }}
              style={{
                backgroundColor: COLORS.white,
                borderColor: COLORS.black,
                borderWidth: 1,
                width: '48%',
                borderRadius: 5,
              }}>
              <Text
                style={{
                  color: COLORS.black_100,
                  textAlign: 'center',
                  padding: 10,
                  fontSize: 12,
                  fontFamily: 'Poppins-Regular',
                }}>
                YES
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </RBSheet>

      {/* //cancel_reason// */}
      <RBSheet
        ref={refRBSheetCancelReason}
        closeOnDragDown={true}
        closeOnPressMask={true}
        height={screenHeight / 3.5}
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
        <View style={{padding: 10}}>
          <Text
            style={{
              marginLeft: 20,
              fontSize: 15,
              fontFamily: 'Poppins-Bold',
              marginTop: 5,
              textAlign: 'center',
            }}>
            Reason for Cancelling
          </Text>

          <View
            style={{
              backgroundColor: COLORS.white,
              borderRadius: 2,
              elevation: 2,
              height: 50,
              marginTop: 10,
            }}>
            <TextInput
              style={{
                flex: 1,
                color: COLORS.black,
                padding: 10,
                fontFamily: 'Poppins-Regular',
              }}
              placeholder="Enter reason"
              underlineColorAndroid="#fff"
              placeholderTextColor={COLORS.grey_line}
              onChangeText={(text) => setCanReason(text)}
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 20,
            }}>
            <TouchableOpacity
              onPress={() => {
                refRBSheet.current.open();
                refRBSheetCancelReason.current.close();
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
                BACK
              </Text>
            </TouchableOpacity>
            {/* <TouchableOpacity onPress={() => { navigation.navigate('ReserveCancelAlert'); refRBSheetCancelReason.current.close() }} style={{
                            backgroundColor: COLORS.white, borderColor: COLORS.black, borderWidth: 1,
                            width: '48%', borderRadius: 5
                        }}> */}
            <TouchableOpacity
              onPress={() => {
                callCancelReserv(route.params.id);
              }}
              style={{
                backgroundColor: COLORS.white,
                borderColor: COLORS.black,
                borderWidth: 1,
                width: '48%',
                borderRadius: 5,
              }}>
              <Text
                style={{
                  color: COLORS.black_100,
                  textAlign: 'center',
                  padding: 10,
                  fontSize: 12,
                  fontFamily: 'Poppins-Regular',
                }}>
                PROCEED
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </RBSheet>
    </View>
  );
};

export default ReserveDetails;
