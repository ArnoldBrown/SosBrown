import React, {useState, useEffect} from 'react';
import {
  View,
  Image,
  Text,
  FlatList,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {styles} from '../../utils/styles';
import {COLORS} from '../../utils/colors';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import ReserveUpcoming from '../reservation/ReserveUpcoming';
import ReservePast from '../reservation/ReservePast';
import ReserveCancel from '../reservation/ReserveCancel';
import { onChange } from 'react-native-reanimated';

const Tab = createMaterialTopTabNavigator();

const MyReservation = ({navigation}) => {
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
            source={require('../../Images/back_black.png')}
          />

          <Text
            style={{
              marginLeft: 10,
              fontFamily: 'Poppins-Bold',
              alignSelf: 'center',
              fontSize: 15,
            }}>
            Reservation
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{flex: 1}}>
        <Tab.Navigator
          tabBarOptions={{
            tabStyle: {width: 100},
            labelStyle: {
              fontSize: 13,
              fontFamily: 'Poppins-Bold',
              textTransform: 'none',
            },
            style: {backgroundColor: COLORS.white},
            indicatorStyle: {
              backgroundColor: COLORS.black,
              position: 'absolute',
            },
          }}>
          <Tab.Screen name="Upcoming" component={ReserveUpcoming} />
          <Tab.Screen name="Past" component={ReservePast} />
          <Tab.Screen name="Cancelled" component={ReserveCancel} />
        </Tab.Navigator>
      </View>

      <View style={{ justifyContent: 'flex-end', elevation:10, backgroundColor:COLORS.white}}>
        <View
          style={{
            backgroundColor: COLORS.grey_line,
            height: 1,
            marginBottom: 10,
          }}></View>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('MakeReservation');
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
            MAKE RESERVATION
          </Text>
        </TouchableOpacity>
      </View>
   
    </View>
  );
};

export default MyReservation;
