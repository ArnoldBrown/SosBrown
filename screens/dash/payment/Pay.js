import React from 'react';
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
import * as Animatable from 'react-native-animatable';

const Pay = ({navigation}) => {
  const screenWidth = Math.round(Dimensions.get('window').width);
  const screenHeight = Math.round(Dimensions.get('window').height);

  return (
    <View style={styles.mainContainer}>
      <Animatable.View animation="fadeInDown" style={{flex: 1}}>
        <StatusBar backgroundColor={COLORS.black_100}></StatusBar>
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
              Pay
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{flex: 1, margin: 10}}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 20,
              marginTop: 20,
              color: COLORS.black_100,
              fontFamily: 'Poppins-SemiBold',
            }}>
            Your Unique QR Code
          </Text>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 12,
              marginTop: 5,
              color: COLORS.grey,
              fontFamily: 'Poppins-Medium',
            }}>
            Show code to cashier
          </Text>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate('PaymentAlert');
            }}
            style={{
              height: screenHeight / 1.8,
              width: '90%',
              borderRadius: 10,
              marginLeft: 20,
              marginEnd: 5,
              marginTop: 30,
              elevation:10,
              backgroundColor: COLORS.white,
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
                        fontFamily: 'Poppins-Regular',
                      }}>
                      SOS Wallet Balance
                    </Text>
                    <Text
                      style={{
                        fontSize: 12,
                        color: COLORS.white,
                        fontFamily: 'Poppins-Regular',
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
                        fontFamily: 'Poppins-Regular',
                      }}>
                      SOS Points
                    </Text>
                    <Text
                      style={{
                        fontSize: 12,
                        color: COLORS.white,
                        fontFamily: 'Poppins-Regular',
                      }}>
                      7,721 PTS
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View style={{flex: 0.5, justifyContent: 'flex-end'}}>
          <View
            style={{
              backgroundColor: COLORS.grey,
              height: 1,
              marginBottom: 10,
            }}></View>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate('TopUp');
            }}
            style={{
              width: '90%',
              backgroundColor: COLORS.black_100,
              alignSelf: 'center',
              borderRadius: 5,
              marginBottom:10
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 12,
                color: COLORS.white,
                padding: 10,
                fontFamily: 'Poppins-Regular',
              }}>
              TOP-UP BALANCE
            </Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};

export default Pay;
