import React, {useState} from 'react';
import {
  View,
  ImageBackground,
  Dimensions,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  StatusBar,
} from 'react-native';
import {COLORS} from '../../utils/colors';
import {styles} from '../../utils/styles';
import * as Animatable from 'react-native-animatable';

const PhoneEntry = ({navigation}) => {
  const screenHeight = Math.round(Dimensions.get('window').height);
  const screenWidth = Math.round(Dimensions.get('window').width);

  const [countryCode] = useState([
    {
      code: '+60',
    },
    {
      code: '+91',
    },
  ]);

  return (
    <View style={[styles.mainContainer, {backgroundColor: COLORS.bg_white}]}>
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
                <View style={{width: 100, height: 100}}>
                  <Image
                    style={{
                      width: '100%',
                      height: '100%',
                      alignSelf: 'center',
                      resizeMode: 'contain',
                    }}
                    source={require('../../Images/app_logo_large_x.png')}
                  />
                </View>
              </View>

              <Text
                style={{
                  fontSize: 20,
                  color: COLORS.black,
                  textAlign: 'center',
                  marginTop: 80,
                  fontFamily: 'Poppins-Regular',
                }}>
                Enter Mobile No.
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  color: COLORS.grey,
                  textAlign: 'center',
                  marginTop: 10,
                  fontFamily: 'Poppins-Regular',
                }}>
                Please enter mobile number.
              </Text>

              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 50,
                  marginLeft: 20,
                  marginRight: 20,
                }}>
                <View
                  style={{
                    flex: 1,
                    backgroundColor: COLORS.white,
                    borderRadius: 5,
                    elevation: 1,
                    marginRight: 2,
                    height: 50,
                  }}>
                  <TextInput
                    style={{
                      flex: 1,
                      padding: 10,
                      textAlign: 'center',
                      fontFamily: 'Poppins-Regular',
                    }}
                    placeholder="+60"
                    underlineColorAndroid="#fff"
                    placeholderTextColor="#000"
                  />
                </View>
                <View
                  style={{
                    flex: 3,
                    backgroundColor: COLORS.white,
                    borderRadius: 5,
                    elevation: 1,
                    marginLeft: 2,
                    height: 50,
                    marginBottom: 10,
                  }}>
                  <TextInput
                    style={{flex: 1, color: COLORS.black, padding: 10}}
                    placeholder="Phone Number"
                    underlineColorAndroid="#fff"
                    placeholderTextColor="#000"
                  />
                </View>
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
                navigation.navigate('Otp');
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
      </Animatable.View>
    </View>
  );
};
export default PhoneEntry;
