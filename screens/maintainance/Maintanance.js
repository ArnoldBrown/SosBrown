import React from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  Dimensions,
  StatusBar,
} from 'react-native';

import {styles} from '../../utils/styles';
import {COLORS} from '../../utils/colors';
import * as Animatable from 'react-native-animatable';

const Maintanance = ({navigation}) => {
  const screenWidth = Math.round(Dimensions.get('window').width);
  const screenHeight = Math.round(Dimensions.get('window').height);

  return (
    <View style={styles.mainContainer}>
      <Animatable.View animation="fadeInDown" style={{flex: 1}}>
        <View
          style={{
            flex: 1,
            margin: 10,
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 20,
          }}>
          <View style={{width: 100, height: 100}}>
            <Image
              source={require('../../Images/maintain.png')}
              resizeMode="cover"
              style={styles.backdrop}
            />
          </View>

          <Text
            style={{
              color: COLORS.black,
              fontFamily: 'Poppins-Medium',
              fontSize: 15,
              marginTop: 25,
            }}>
            We're having trouble connecting
          </Text>

          <Text
            style={{
              color: COLORS.grey,
              fontFamily: 'Poppins-Medium',
              fontSize: 12,
              marginTop: 20,
              textAlign: 'center',
            }}>
            There was a problem getting your information. Please try again later
          </Text>
        </View>

        <View style={{justifyContent: 'flex-end'}}>
          <View
            style={{
              backgroundColor: COLORS.grey,
              height: 1,
              marginBottom: 10,
            }}></View>

          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
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
              Retry
            </Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};

export default Maintanance;
