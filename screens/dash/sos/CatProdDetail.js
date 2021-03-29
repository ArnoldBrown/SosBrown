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
import { APILINKS } from '../../../utils/apilinks';
import {SliderBox} from 'react-native-image-slider-box';

const CatProdDetail = ({route, navigation}) => {
  console.log('pqwwe', route.img);
  const screenWidth = Math.round(Dimensions.get('window').width);
  const screenHeight = Math.round(Dimensions.get('window').height);

  return (
    <View style={styles.mainContainer}>
      <StatusBar backgroundColor={COLORS.black_100}></StatusBar>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={{height: screenHeight / 2}}>
          {/* <ImageBackground style={{ height: '100%', width: '100%' }}
                        source={require('../../../Images/item_one.png')}> */}
          <ImageBackground
            style={{height: '100%', width: '100%',}}
            source={{ uri: `${APILINKS.IMG_URL}${route.params.img}` }}>
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
            marginTop: -10,
            elevation:10,
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
              {route.params.prodname}
            </Text>
            <Text
              style={{
                color: COLORS.grey,
                marginTop: 2,
                fontSize: 10,
                fontFamily: 'Poppins-Medium',
              }}>
              {route.params.catname}
            </Text>
            <Text
              style={{
                color: COLORS.grey_100,
                fontSize: 12,
                marginTop: 10,
                fontFamily: 'Poppins-Regular',
              }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              elusmod tempor.
            </Text>
            <Text
              style={{
                color: COLORS.grey_500,
                marginTop: 15,
                fontSize: 15,
                fontFamily: 'Poppins-Medium',
              }}>
              RM {route.params.price}
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default CatProdDetail;
