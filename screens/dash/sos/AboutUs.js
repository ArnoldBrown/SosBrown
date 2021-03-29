import React from 'react';
import {View, Image, Text, TouchableOpacity, StatusBar, Linking} from 'react-native';
import {styles} from '../../../utils/styles';
import {COLORS} from '../../../utils/colors';

const AboutUs = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
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
            About Us
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{flex: 0.9}}>
        <View style={{margin: 20}}>
          <View style={{flexDirection: 'row'}}>
            <Image
              style={{
                height: 50,
                width: 50,
                resizeMode: 'contain',
                marginRight: 2,
                marginLeft: 5,
                alignSelf: 'center',
              }}
              source={require('../../../Images/app_logo_large_x.png')}
            />
            <Text
              style={{
                marginLeft: 10,
                alignSelf: 'center',
                fontSize: 15,
                fontFamily: 'Poppins-Regular',
              }}>
              Shop Of Shoes
            </Text>
          </View>

          <Text
            style={{
              marginTop: 20,
              color: COLORS.grey_500,
              fontFamily: 'Poppins-Regular',
            }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Text>

          <Text
            style={{
              marginTop: 10,
              color: COLORS.grey_500,
              fontFamily: 'Poppins-Regular',
            }}>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </Text>
        </View>
      </View>

      <View style={{flex: 0.1, flexDirection: 'row', alignSelf: 'center'}}>
        <TouchableOpacity onPress={() => Linking.openURL('fb://page/218367535213400')}>
          <Image
            style={{
              height: 30,
              width: 30,
              resizeMode: 'contain',
              marginRight: 5,
              alignSelf: 'center',
            }}
            source={require('../../../Images/facebook.png')}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress = {() => Linking.openURL('http://instagram.com/_u/tokyosecretmy')}>
          <Image
            style={{
              height: 30,
              width: 30,
              resizeMode: 'contain',
              marginLeft: 5,
              alignSelf: 'center',
            }}
            source={require('../../../Images/instagram.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AboutUs;
