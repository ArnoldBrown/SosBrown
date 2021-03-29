import React from 'react';
import {View, Image, Text, TouchableOpacity, StatusBar} from 'react-native';
import {styles} from '../../../utils/styles';
import {COLORS} from '../../../utils/colors';

const AboutMain = ({navigation}) => {
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
              alignSelf: 'center',
              fontSize: 15,
              fontFamily: 'Poppins-Bold',
            }}>
            About
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{margin: 20}}>
        <View style={styles.line_divider} />

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('AboutUs');
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
            About Us
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
            navigation.navigate('TermsOfUse');
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
            Terms Of Use
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
            navigation.navigate('PrivacyPolicy');
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
            Privacy Policy
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

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text
            style={{
              fontSize: 15,
              marginTop: 5,
              color: COLORS.black_100,
              marginLeft: 20,
              fontFamily: 'Poppins-Regular',
            }}>
            Version
          </Text>
          <Text
            style={{
              fontSize: 12,
              marginTop: 5,
              color: COLORS.grey,
              marginLeft: 20,
              fontFamily: 'Poppins-Regular',
            }}>
            1.0
          </Text>
        </View>

        <View style={styles.line_divider} />
      </View>
    </View>
  );
};

export default AboutMain;
