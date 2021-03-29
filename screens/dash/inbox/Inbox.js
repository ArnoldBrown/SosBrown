import React from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  Text,
  FlatList,
  Dimensions,
} from 'react-native';
import {useState} from 'react';
import {COLORS} from '../../../utils/colors';
import {useDispatch, useSelector} from 'react-redux';

const Inbox = ({navigation}) => {
  const screenWidth = Math.round(Dimensions.get('window').width);
  /get_value_from_redux/;
  const getToken = useSelector((state) => state.loginDetails);


  if (getToken === null) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: COLORS.white,
        }}>
        
      </View>
    );
  }

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flex: 1,
          backgroundColor: COLORS.bg_white,
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: COLORS.black_100,
            fontSize: 20,
            marginTop: 50,
            fontFamily: 'Poppins-Medium',
          }}>
          Inbox
        </Text>

        <View style={{margin: 20}}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('InboxDetail');
            }}
            style={{
              width: '80%',
              backgroundColor: COLORS.white,
              flexDirection: 'row',
              padding: 10,
              borderRadius: 5,
              elevation:5
            }}>
            <View style={{width: '20%'}}>
              <Image
                style={{
                  width: 50,
                  height: 50,
                  alignSelf: 'center',
                  resizeMode: 'contain',
                }}
                source={require('../../../Images/unread_msg.png')}
              />
            </View>

            <View style={{alignSelf: 'center', width: '100%', marginLeft: 10}}>
              <Text
                numberOfLines={1}
                style={{
                  color: COLORS.black_100,
                  fontSize: 15,
                  fontFamily: 'Poppins-Medium',
                }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                elusmod tempor.
              </Text>
              <Text
                numberOfLines={1}
                style={{
                  color: COLORS.grey,
                  fontSize: 12,
                  marginTop: 5,
                  fontFamily: 'Poppins-Regular',
                }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                elusmod tempor.
              </Text>
            </View>

            <View style={{width: '10%', alignSelf: 'center'}}>
              <Image
                style={{
                  width: 10,
                  height: 10,
                  alignSelf: 'center',
                  resizeMode: 'contain',
                }}
                source={require('../../../Images/next.png')}
              />
            </View>
          </TouchableOpacity>

          <View style={{height: 10, backgroundColor: COLORS.bg_white}} />

          <View
            style={{
              width: '80%',
              backgroundColor: COLORS.white,
              flexDirection: 'row',
              padding: 10,
              borderRadius: 5,
              elevation:5
            }}>
            <View style={{width: '20%'}}>
              <Image
                style={{
                  width: 40,
                  height: 40,
                  alignSelf: 'center',
                  resizeMode: 'contain',
                }}
                source={require('../../../Images/read_msg.png')}
              />
            </View>

            <View style={{alignSelf: 'center', width: '100%', marginLeft: 10}}>
              <Text
                numberOfLines={1}
                style={{color: COLORS.black_100, fontSize: 15}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                elusmod tempor.
              </Text>
              <Text
                numberOfLines={1}
                style={{color: COLORS.grey, fontSize: 12, marginTop: 5}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                elusmod tempor.
              </Text>
            </View>

            <View style={{width: '10%', alignSelf: 'center'}}>
              <Image
                style={{
                  width: 10,
                  height: 10,
                  alignSelf: 'center',
                  resizeMode: 'contain',
                }}
                source={require('../../../Images/next.png')}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Inbox;
