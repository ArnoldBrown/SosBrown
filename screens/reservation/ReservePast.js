import React, {useState, useRef} from 'react';
import {
  View,
  Image,
  Text,
  StatusBar,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {styles} from '../../utils/styles';
import {COLORS} from '../../utils/colors';

const ReservePast = ({navigation}) => {
  return (
    <View style={[styles.mainContainer, {margin: 20}]}>
      <StatusBar backgroundColor={COLORS.black_100}></StatusBar>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('ReserveDetails', {
            paramKeyTitle: 'Past Reservation',
            paramKeyBtn: 'MAKE RESERVATION',
            paramKey: 'PAST',
          });
        }}>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            padding: 10,
            justifyContent: 'space-between',
            backgroundColor: COLORS.white,
            borderRadius: 10,
            elevation: 1,
          }}>
          <View style={{flex: 0.25, width: 70, height: 70}}>
            <Image
              style={{
                width: '100%',
                height: '100%',
                alignSelf: 'center',
                resizeMode: 'cover',
                borderRadius: 10,
              }}
              source={require('../../Images/item_two.png')}
            />
          </View>

          <View
            style={{
              flex: 0.65,
              alignSelf: 'center',
              width: '100%',
              marginLeft: 10,
            }}>
            <Text
              numberOfLines={1}
              style={{color: COLORS.grey, fontWeight: 'bold', fontSize: 12}}>
              SOS Bolevard Kuching
            </Text>
            <View style={{flexDirection: 'row', marginTop: 5}}>
              <Text
                numberOfLines={1}
                style={{color: COLORS.grey, fontWeight: 'bold', fontSize: 12}}>
                4 Pax
              </Text>
              <Text
                numberOfLines={1}
                style={{
                  color: COLORS.grey,
                  fontWeight: 'bold',
                  fontSize: 12,
                  marginLeft: 10,
                }}>
                20 June 2020, 14:00
              </Text>
            </View>
            <View
              style={{
                width: 100,
                marginTop: 5,
                padding: 5,
                backgroundColor: COLORS.grey,
                borderRadius: 20,
                borderRadius: 20,
                alignItems: 'center',
              }}>
              <Text
                numberOfLines={1}
                style={{color: COLORS.white, fontWeight: 'bold', fontSize: 10}}>
                EXPIRED
              </Text>
            </View>
          </View>

          <View style={{flex: 0.1, alignSelf: 'center'}}>
            <Image
              style={{
                width: 10,
                height: 10,
                alignSelf: 'center',
                resizeMode: 'contain',
              }}
              source={require('../../Images/next.png')}
            />
          </View>
        </View>
     
      </TouchableOpacity>
    </View>
  );
};

export default ReservePast;
