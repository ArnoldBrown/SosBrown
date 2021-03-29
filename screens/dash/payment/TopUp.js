import React, {useState, useRef} from 'react';
import {
  View,
  Image,
  Text,
  StatusBar,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {styles} from '../../../utils/styles';
import {COLORS} from '../../../utils/colors';

import TopUpOnlineBank from '../payment/TopUpOnlineBank';
import CounterPay from '../payment/CounterPay';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

const TopUP = ({navigation}) => {
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
              fontWeight: 'bold',
              alignSelf: 'center',
              fontSize: 15,
              fontFamily: 'Poppins-Regular',
            }}>
            Top Up Method
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{flex: 1}}>
        <Tab.Navigator
          tabBarOptions={{
            tabStyle: {width: 150},
            labelStyle: {
              fontSize: 13,
              textTransform: 'none',
              fontFamily: 'Poppins-Bold',
            },
            style: {backgroundColor: COLORS.white},
            indicatorStyle: {
              backgroundColor: COLORS.black,
              position: 'absolute',
            },
          }}>
          <Tab.Screen name="Online Banking" component={TopUpOnlineBank} />
          <Tab.Screen name="Counter" component={CounterPay} />
        </Tab.Navigator>
      </View>
    </View>
  );
};

export default TopUP;
