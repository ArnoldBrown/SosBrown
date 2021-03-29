import React, {useRef} from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  Dimensions,
  StatusBar,
} from 'react-native';

import {styles} from '../../../utils/styles';
import {COLORS} from '../../../utils/colors';
import RBSheet from 'react-native-raw-bottom-sheet';

const CounterPay = ({navigation}) => {
  const refRBSheetTopUp = useRef();
  const screenWidth = Math.round(Dimensions.get('window').width);
  const screenHeight = Math.round(Dimensions.get('window').height);

  return (
    <View style={styles.mainContainer}>
      <StatusBar backgroundColor={COLORS.black_100}></StatusBar>
      <View style={{flex: 1, margin: 10}}>
        <Text
          style={{
            fontSize: 15,
            marginTop: 20,
            marginLeft: 20,
            color: COLORS.black_100,
            fontFamily: 'Poppins-Medium',
          }}>
          Your Unique QR Code
        </Text>
        <Text
          style={{
            fontSize: 10,
            marginTop: 5,
            marginLeft: 20,
            color: COLORS.grey,
            fontFamily: 'Poppins-Medium',
          }}>
          Show code to Merchant
        </Text>

        <TouchableOpacity
          onPress={() => refRBSheetTopUp.current.open()}
          style={{
            height: screenHeight / 1.8,
            width: '90%',
            borderRadius: 10,
            marginLeft: 20,
            marginEnd: 5,
            marginTop: 30,
            backgroundColor: COLORS.white,
            elevation:10
          }}>
          <View
            style={[
              styles.container,
              {
                height: screenHeight / 1.8,
                justifyContent: 'center',
                marginTop: 5,
              },
            ]}>
            <View style={styles.backgroundContainer}>
              <Image
                source={require('../../../Images/qr_code.png')}
                resizeMode="cover"
                style={styles.backdrop}
              />
            </View>
            <View
              style={{
                alignItems: 'center',
                backgroundColor: COLORS.white,
                height: 60,
                width: 60,
                justifyContent: 'center',
                borderRadius: 30,
              }}>
              <Image
                style={styles.logo}
                source={require('../../../Images/app_logo_large.png')}
                resizeMode="contain"
              />
            </View>
          </View>

          <View
            style={{
              height: screenHeight / 8,
              backgroundColor: COLORS.black_100,
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
            }}>
            <View style={{margin: 10}}>
              <View style={{height: '100%', justifyContent: 'center'}}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={{
                      fontSize: 12,
                      color: COLORS.grey_line,
                      fontFamily: 'Poppins-Medium',
                    }}>
                    SOS Wallet Balance
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      color: COLORS.white,
                      fontFamily: 'Poppins-Medium',
                    }}>
                    RM 1,888.80
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 5,
                  }}>
                  <Text
                    style={{
                      fontSize: 12,
                      color: COLORS.grey_line,
                      fontFamily: 'Poppins-Medium',
                    }}>
                    SOS Points
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      color: COLORS.white,
                      fontFamily: 'Poppins-Medium',
                    }}>
                    7,721 PTS
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>

      {/* //cancel_confirmation// */}
      <RBSheet
        ref={refRBSheetTopUp}
        closeOnDragDown={true}
        closeOnPressMask={true}
        height={screenHeight / 3}
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
              marginLeft: 25,
              fontSize: 15,
              fontFamily: 'Poppins-SemiBold',
              marginTop: 10,
              textAlign: 'center',
            }}>
            Accept Top Up
          </Text>
          <Text
            style={{
              marginLeft: 20,
              fontSize: 12,
              marginTop: 10,
              textAlign: 'center',
              color: COLORS.grey,
            }}>
            S01234 Sarawak Outlet
          </Text>

          <View
            style={{
              flexDirection: 'row',
              marginTop: 20,
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: 12,
                color: COLORS.grey_200,
                marginRight: 5,
                marginTop: 3,
              }}>
              RM
            </Text>
            <Text style={{fontSize: 25, color: COLORS.grey_200}}>50.00</Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 20,
            }}>
            <TouchableOpacity
              onPress={() => refRBSheetTopUp.current.close()}
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
                }}>
                CANCEL
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                refRBSheetTopUp.current.close(),
                  navigation.navigate('TopUpAlert');
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
                }}>
                CONFIRM
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </RBSheet>
    </View>
  );
};

export default CounterPay;
