import React from 'react';
import {
  View,
  Dimensions,
  ImageBackground,
  Image,
  Text,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import {styles} from '../../../utils/styles';
import {COLORS} from '../../../utils/colors';

const NewsDetail = ({navigation}) => {
  const screenWidth = Math.round(Dimensions.get('window').width);
  const screenHeight = Math.round(Dimensions.get('window').height);

  return (
    <View style={styles.mainContainer}>
      <StatusBar backgroundColor={COLORS.black_100}></StatusBar>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={{height: screenHeight / 3}}>
          <ImageBackground
            style={{height: '100%', width: '100%'}}
            source={require('../../../Images/item_four.png')}>
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
            backgroundColor: COLORS.white,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            marginTop: -20,
            flex: 1,
          }}>
          <View style={{margin: 10}}>
            <Text
              style={{
                color: COLORS.black_100,
                marginTop: 20,
                fontSize: 20,
                fontFamily: 'Poppins-Medium',
              }}>
              New Stocks Have Arrived!
            </Text>

            <Text
              style={{
                color: COLORS.grey,
                marginTop: 5,
                fontSize: 12,
                fontFamily: 'Poppins-Medium',
              }}>
              11 Mar 2021
            </Text>

            <View style={{margin: 10}}>
              <Image
                style={{
                  height: screenHeight / 5,
                  width: '100%',
                  alignSelf: 'center',
                }}
                source={require('../../../Images/item_one.png')}
              />

              <Text
                style={{
                  color: COLORS.grey_100,
                  fontSize: 12,
                  marginTop: 10,
                  fontFamily: 'Poppins-Regular',
                }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                elusmod tempor. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do elusmod tempor.
              </Text>

              <Text
                style={{
                  color: COLORS.blue,
                  fontSize: 12,
                  marginTop: 10,
                  fontFamily: 'Poppins-Regular',
                }}>
                T & Cs Apply.
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            justifyContent: 'flex-end',
            elevation: 10,
            backgroundColor: COLORS.white,
          }}>
          <View
            style={{
              backgroundColor: COLORS.grey_line,
              height: 1,
              marginBottom: 10,
            }}></View>

          <TouchableOpacity
            //   onPress={() => {
            //     navigation.navigate('');
            //   }}
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
              LEARN MORE
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default NewsDetail;
