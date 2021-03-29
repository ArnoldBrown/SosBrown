import React from 'react';
import {View, Image, Text, TouchableOpacity, StatusBar} from 'react-native';
import {styles} from '../../../utils/styles';
import {COLORS} from '../../../utils/colors';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import VoucherActive from '../sos/VoucherActive';
import VoucherPast from '../sos/VoucherPast';

const Tab = createMaterialTopTabNavigator();

const MyVouchers = ({navigation}) => {
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
            My Vouchers
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{flex: 1}}>
        <Tab.Navigator
          tabBarOptions={{
            tabStyle: {width: 100},
            labelStyle: {
              fontSize: 13,
              fontFamily: 'Poppins-BOld',
              textTransform: 'none',
            },
            style: {backgroundColor: COLORS.white},
            indicatorStyle: {
              backgroundColor: COLORS.black,
              position: 'absolute',
            },
          }}>
          <Tab.Screen name="Active" component={VoucherActive} />
          <Tab.Screen name="Past" component={VoucherPast} />
        </Tab.Navigator>
      </View>
    </View>
  );
};

export default MyVouchers;
