import React, {useEffect} from 'react';
import {
  View,
  Dimensions,
  ImageBackground,
  Image,
  Text,
  TouchableOpacity,
  StatusBar,
  Linking,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import {styles} from '../../utils/styles';
import {COLORS} from '../../utils/colors';
import {APILINKS} from '../../utils/apilinks';
import * as Animatable from 'react-native-animatable';

const OutletsDetail = ({route, navigation}) => {
  const screenWidth = Math.round(Dimensions.get('window').width);
  const screenHeight = Math.round(Dimensions.get('window').height);
  var latitude = '';
  var longitude = '';

  useEffect(() => {
    var latlngArr = route.params.latlog.split(',');
    latitude = latlngArr[0];
    longitude = latlngArr[1];
  });

  return (
    <View style={styles.mainContainer}>
      <Animatable.View animation="fadeInDown" style={{flex: 1}}>
        <StatusBar backgroundColor={COLORS.black_100}></StatusBar>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{flexGrow: 1}}>
          <View style={{flex: 3}}>
            <View style={{flex: 2}}>
              <ImageBackground
                style={{height: '100%', width: '100%'}}
                source={{uri: `${APILINKS.IMG_URL}${route.params.image}`}}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.goBack();
                  }}>
                  <Image
                    style={{height: 50, width: 50, margin: 10}}
                    source={require('../../Images/back_icon.png')}
                  />
                </TouchableOpacity>
              </ImageBackground>
            </View>

            <View
              style={{
                flex: 1,
                backgroundColor: COLORS.bg_white,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                position: 'relative',
                marginTop: -20,
              }}>
              <View style={{margin: 10}}>
                <Text
                  style={{
                    color: COLORS.black_100,
                    marginTop: 20,
                    fontSize: 20,
                    fontFamily: 'Poppins-Medium',
                  }}>
                  {route.params.name}
                </Text>

                <Text
                  style={{
                    color: COLORS.grey_100,
                    fontSize: 12,
                    marginTop: 20,
                    fontFamily: 'Poppins-Regular',
                  }}>
                  Operation Hours
                </Text>

                <Text
                  style={{
                    color: COLORS.black_100,
                    fontSize: 12,
                    marginTop: 5,
                    fontFamily: 'Poppins-Regular',
                  }}>
                  {route.params.workhour}
                </Text>

                <Text
                  style={{
                    color: COLORS.grey_100,
                    fontSize: 12,
                    marginTop: 20,
                    fontFamily: 'Poppins-Regular',
                  }}>
                  Location
                </Text>

                <Text
                  style={{
                    color: COLORS.black_100,
                    fontSize: 12,
                    marginTop: 5,
                    fontFamily: 'Poppins-Regular',
                  }}>
                  {route.params.address}
                </Text>

                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 20,
                  }}>
                  <TouchableOpacity
                    onPress={() =>
                      Linking.openURL(
                        `google.navigation:q=${latitude}+${longitude}`,
                      )
                    }
                    style={{
                      backgroundColor: COLORS.black,
                      width: '48%',
                      borderRadius: 5,
                      padding: 10,
                    }}>
                    <Image
                      style={{height: 15, width: 15, resizeMode: 'contain'}}
                      source={require('../../Images/location.png')}
                    />
                    <Text
                      style={{
                        color: COLORS.yellow,
                        fontSize: 12,
                        marginTop: 10,
                        fontFamily: 'Poppins-Regular',
                      }}>
                      Get Directions
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      Linking.openURL(`tel:${route.params.phone}`);
                    }}
                    style={{
                      backgroundColor: COLORS.black,
                      width: '48%',
                      borderRadius: 5,
                      padding: 10,
                    }}>
                    <Image
                      style={{height: 15, width: 15, resizeMode: 'contain'}}
                      source={require('../../Images/location.png')}
                    />
                    <Text
                      style={{
                        color: COLORS.yellow,
                        fontSize: 12,
                        marginTop: 10,
                        fontFamily: 'Poppins-Regular',
                      }}>
                      Contact Us
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
        <View
          style={{
            justifyContent: 'flex-end',
            elevation: 5,
            backgroundColor: COLORS.white,
            padding:10
          }}>
            
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('MakeReservation');
            }}
            style={{
              width: '100%',
              backgroundColor: COLORS.black_100,
              alignSelf: 'center',
              borderRadius: 5,
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
      </Animatable.View>
    </View>
  );
};

export default OutletsDetail;
