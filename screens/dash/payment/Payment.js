import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  Text,
  ImageBackground,
  Dimensions,
  StatusBar,
} from 'react-native';
import {COLORS} from '../../../utils/colors';
import {styles} from '../../../utils/styles';

const Payment = ({navigation}) => {
  const screenWidth = Math.round(Dimensions.get('window').width);
  const screenHeight = Math.round(Dimensions.get('window').height);

  return (
    <View style={[styles.mainContainer, {backgroundColor: COLORS.bg_white}]}>
      <StatusBar backgroundColor={COLORS.black_100}></StatusBar>
      <View style={{height: screenHeight / 3.5, marginBottom: 50}}>
        <ImageBackground
          style={{height: '100%', width: '100%'}}
          imageStyle={{borderBottomRightRadius: 25, borderBottomLeftRadius: 25}}
          source={require('../../../Images/bg.png')}>
          <View style={styles.overlay_Orange}>
            <View style={{margin: 20}}>
              <Text
                style={{
                  fontSize: 15,
                  color: COLORS.white,
                  alignSelf: 'center',
                  marginTop: 10,
                  fontFamily: 'Poppins-Medium',
                }}>
                Wallet Balance
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignSelf: 'center',
                  marginTop: 10,
                }}>
                <Text
                  style={{
                    fontSize: 12,
                    color: COLORS.white,
                    marginTop: 3,
                    marginRight: 5,
                    fontFamily: 'Poppins-Medium',
                  }}>
                  RM
                </Text>
                <Text
                  style={{
                    fontSize: 20,
                    color: COLORS.white,
                    fontFamily: 'Poppins-Medium',
                  }}>
                  1,888.80
                </Text>
              </View>
            </View>

            <View
              style={{
                alignItems: 'center',
                width: '100%',
                position: 'absolute',
                bottom: -40,
              }}>
              <View
                style={{
                  backgroundColor: COLORS.white,
                  padding: 15,
                  flexDirection: 'row',
                  width: '90%',
                  borderRadius: 10,
                  justifyContent: 'space-between',

                  shadowColor: COLORS.black,
                  shadowOffset: {
                    width: 0,
                    height: 10,
                  },
                  shadowOpacity: 0.51,
                  shadowRadius: 13.16,

                  elevation: 7,
                }}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('Pay');
                  }}>
                  <View style={{alignItems: 'center'}}>
                    <Image
                      style={{
                        width: 50,
                        height: 50,
                        alignSelf: 'center',
                        resizeMode: 'contain',
                      }}
                      source={require('../../../Images/pay.png')}
                    />
                    <Text
                      style={{
                        color: COLORS.black_100,
                        fontSize: 12,
                        fontFamily: 'Poppins-Medium',
                      }}>
                      Pay
                    </Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('TopUp');
                  }}>
                  <View style={{alignItems: 'center'}}>
                    <Image
                      style={{
                        width: 50,
                        height: 50,
                        alignSelf: 'center',
                        resizeMode: 'contain',
                      }}
                      source={require('../../../Images/topup.png')}
                    />
                    <Text
                      style={{
                        color: COLORS.black_100,
                        fontSize: 12,
                        fontFamily: 'Poppins-Medium',
                      }}>
                      Top-Up
                    </Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('PaymentHistory');
                  }}>
                  <View style={{alignItems: 'center'}}>
                    <Image
                      style={{
                        width: 50,
                        height: 50,
                        alignSelf: 'center',
                        resizeMode: 'contain',
                      }}
                      source={require('../../../Images/history.png')}
                    />
                    <Text
                      style={{
                        color: COLORS.black_100,
                        fontSize: 12,
                        fontFamily: 'Poppins-Medium',
                      }}>
                      History
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>

      <View style={{backgroundColor: COLORS.bg_white}}>
        <View style={{marginTop: 20}}>
          <Text
            style={{
              color: COLORS.black_100,
              fontSize: 12,
              marginLeft: 20,
              fontFamily: 'Poppins-Regular',
            }}>
            JANUARY 2021
          </Text>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Receipt');
            }}
            style={{backgroundColor: COLORS.white, marginTop: 10}}>
            <View
              style={{
                backgroundColor: COLORS.white,
                padding: 10,
                marginTop: 10,
              }}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text
                  style={{
                    color: COLORS.black_100,
                    fontSize: 12,
                    marginLeft: 10,
                    fontFamily: 'Poppins-Regular',
                  }}>
                  Purchase - SOS Sarawak
                </Text>
                <Text
                  style={{
                    color: COLORS.black_100,
                    fontSize: 12,
                    marginLeft: 20,
                    marginRight: 10,
                    fontFamily: 'Poppins-Regular',
                  }}>
                  - RM 250.00
                </Text>
              </View>
              <Text
                style={{
                  color: COLORS.grey,
                  fontSize: 12,
                  marginLeft: 10,
                  marginTop: 5,
                  fontFamily: 'Poppins-Regular',
                }}>
                5 Jan
              </Text>
            </View>

            <View
              style={{
                height: 1,
                backgroundColor: COLORS.grey_line,
                marginLeft: 20,
                marginRight: 20,
              }}
            />

            <View
              style={{
                backgroundColor: COLORS.white,
                padding: 10,
                marginTop: 10,
              }}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text
                  style={{
                    color: COLORS.black_100,
                    fontSize: 12,
                    marginLeft: 10,
                    fontFamily: 'Poppins-Regular',
                  }}>
                  Top-up
                </Text>
                <Text
                  style={{
                    color: COLORS.blue,
                    fontSize: 12,
                    marginLeft: 20,
                    marginRight: 10,
                    fontFamily: 'Poppins-Regular',
                  }}>
                  RM 550.00
                </Text>
              </View>
              <Text
                style={{
                  color: COLORS.grey,
                  fontSize: 12,
                  marginLeft: 10,
                  marginTop: 5,
                  fontFamily: 'Poppins-Regular',
                }}>
                3 Jan
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Payment;
