import React, {useState} from 'react';
import {
  View,
  Image,
  Text,
  FlatList,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {styles} from '../../../utils/styles';
import {COLORS} from '../../../utils/colors';
import {APILINKS} from '../../../utils/apilinks';

const LimitedOffers = ({route, navigation}) => {
  const [offerList] = useState([
    {
      id: '1',
      img: require('../../../Images/item_one.png'),
      name: 'Nike',
      desc: 'RM100 off purchases on 2020 Air Max Series',
      color: '#6A6867',
      points: '200,000 PTS',
    },
    {
      id: '2',
      img: require('../../../Images/item_two.png'),
      name: 'Adidas',
      desc: 'RM5 off purchases on 2020',
      color: '#596A55',
      points: 'FREE',
    },
    {
      id: '3',
      img: require('../../../Images/item_three.png'),
      name: 'Reebok',
      desc: 'RM15 off purchases on 2020 CR7 Model',
      color: '#596A55',
      points: '10,000 PTS',
    },
  ]);

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
            }}>
            Limited Offers
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{flex: 1, backgroundColor:COLORS.bg_white, paddingBottom:10}}>
        <FlatList
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          data={route.params.listVal}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('RewardDetails', {
                  name: item.title,
                  photo: item.photo,
                });
              }}
              style={{
                flexDirection: 'row',
                backgroundColor: COLORS.bg_white,
                marginLeft: 15,
                marginTop: 10,
                marginRight: 15,
                elevation:5,
                borderRadius:20,
              }}>
              <View style={{backgroundColor: COLORS.bg_white}}>
                <Image
                  style={{
                    width: 100,
                    height: 100,
                    borderTopLeftRadius: 10,
                    borderBottomLeftRadius: 10,
                    resizeMode: 'cover',
                  }}
                  source={{uri: `${APILINKS.IMG_URL}${item.photo}`}}
                />
              </View>

              <View
                style={{
                  flex: 1,
                  backgroundColor: COLORS.black_100,
                  borderBottomRightRadius: 10,
                  borderTopRightRadius: 10,
                }}>
                <View style={{flex: 1, margin: 10}}>
                  <Text
                    numberOfLines={1}
                    ellipsizeMode="tail"
                    style={{
                      flex: 0.2,
                      fontSize: 10,
                      width: 200,
                      color: '#B6B4B4',
                      marginTop: 5,
                      fontFamily: 'Poppins-Regular',
                    }}>
                    {item.title}
                  </Text>
                  <Text
                    numberOfLines={2}
                    ellipsizeMode="tail"
                    style={{
                      flex: 0.6,
                      fontSize: 12,
                      fontWeight: 'bold',
                      width: 200,
                      color: COLORS.white,
                      fontFamily: 'Poppins-Regular',
                    }}>
                    {item.title}
                  </Text>
                  <View
                    style={{
                      flex: 0.2,
                      marginTop: 5,
                      justifyContent: 'flex-end',
                    }}>
                    <Text
                      style={{
                        fontSize: 10,
                        color: COLORS.yellow,
                        textAlignVertical: 'bottom',
                        fontFamily: 'Poppins-Regular',
                      }}>
                      {item.cus_elg_value}
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default LimitedOffers;
