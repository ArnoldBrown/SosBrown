import React, {useEffect, useState} from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  StatusBar,
  ScrollView,
} from 'react-native';
import {styles} from '../../../utils/styles';
import {COLORS} from '../../../utils/colors';
import {APILINKS} from '../../../utils/apilinks';
import HTML from 'react-native-render-html';

import ActivityLoader from '../../Loader/ActivityLoader';

const PrivacyPolicy = ({navigation}) => {
  const [getValue, setValue] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    setModalVisible(true);

    fetch(APILINKS.BASE_URL + APILINKS.GET_PRIVACY_URL, {
      method: 'POST',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setValue(data.data);
        setModalVisible(false);
      });
  }, []);

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
            Privacy Policy
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{flex: 0.9}}>
        <View style={{margin: 20}}>
          <View style={{flexDirection: 'row'}}>
            <Image
              style={{
                height: 50,
                width: 50,
                resizeMode: 'contain',
                marginRight: 2,
                marginLeft: 5,
                alignSelf: 'center',
              }}
              source={require('../../../Images/app_logo_large_x.png')}
            />
            <Text
              style={{
                marginLeft: 10,
                alignSelf: 'center',
                fontSize: 15,
                fontFamily: 'Poppins-Regular',
              }}>
              Shop Of Shoes
            </Text>
          </View>

          {getValue.map((e) => {
            return (
              <View key={e.id}>
                <ScrollView showsVerticalScrollIndicator={false}>
                  <HTML
                    baseFontStyle={styles.htmlStyle}
                    source={{html: e.fDesc}}
                  />
                </ScrollView>
                {/* <Text
                  style={{
                    marginTop: 20,
                    color: COLORS.grey_500,
                    fontFamily: 'Poppins-Regular',
                  }}>
                  {e.fDesc.replace(/<\/?[^>]+(>|$)/g, '')}
                </Text> */}
              </View>
            );
          })}
        </View>
      </View>

      <View>{modalVisible ? <ActivityLoader /> : null}</View>
    </View>
  );
};

export default PrivacyPolicy;
