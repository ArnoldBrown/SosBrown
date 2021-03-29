import React, {useState, useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  Text,
  ImageBackground,
  Dimensions,
  FlatList,
  StatusBar,
} from 'react-native';
import {COLORS} from '../../../utils/colors';
import {styles} from '../../../utils/styles';
import {APILINKS} from '../../../utils/apilinks';
import ActivityLoader from '../../Loader/ActivityLoader';

import {useSelector} from 'react-redux';

const Rewards = ({navigation}) => {
  const screenWidth = Math.round(Dimensions.get('window').width);
  const screenHeight = Math.round(Dimensions.get('window').height);
  const [getRewards, setRewards] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  /get_value_from_redux/;
  const getToken = useSelector((state) => state.loginDetails);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setModalVisible(true);
      var form = new FormData();
      form.append('api_token', getToken.msg.token);

      fetch(APILINKS.BASE_URL + APILINKS.HOME_PRODUCT_URL, {
        method: 'POST',
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data',
        }),
        body: form,
      })
        .then((response) => response.json())
        .then((data) => {
          setRewards(data.data);
          setTimeout(() => {
            setModalVisible(false);
          }, 200);
        });
    });

    return () => {
      unsubscribe;
    };
  }, []);



  // useEffect(() => {
  //   setModalVisible(true);
  //   var form = new FormData();
  //   form.append('api_token', getToken.msg.token);

  //   fetch(APILINKS.BASE_URL + APILINKS.HOME_PRODUCT_URL, {
  //     method: 'POST',
  //     headers: new Headers({
  //       Accept: 'application/json',
  //       'Content-Type': 'multipart/form-data',
  //     }),
  //     body: form,
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setRewards(data.data);
  //       setTimeout(() => {
  //         setModalVisible(false);
  //       }, 200);
  //     });
  // }, []);

  const [rewardList] = useState([
    {
      id: '1',
      img: require('../../../Images/item_one.png'),
      name: 'Nike',
      desc: 'RM100 off purchases on 2020 Air Max Series',
      color: '#6A6867',
      points: '190,000 points',
    },
    {
      id: '2',
      img: require('../../../Images/item_two.png'),
      name: 'Adidas',
      desc: 'RM5 off purchases on 2020',
      color: '#596A55',
      points: 'FREE',
    },
  ]);

  return (
    <View style={styles.mainContainer}>
      <StatusBar backgroundColor={COLORS.black_100}></StatusBar>
      <View
        style={{height: screenHeight / 3.5, backgroundColor: COLORS.bg_white}}>
        <ImageBackground
          style={{height: '100%', width: '100%'}}
          imageStyle={{borderBottomRightRadius: 25, borderBottomLeftRadius: 25}}
          source={require('../../../Images/bg.png')}
        />

        <View style={styles.overlay_Violet}>
          <View style={{margin: 20}}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('PointsHistory');
                }}>
                <Image
                  style={{height: 20, width: 20, resizeMode: 'contain'}}
                  source={require('../../../Images/Iconly_Light_Timer.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('MyVouchers');
                }}>
                <Image
                  style={{height: 20, width: 20, resizeMode: 'contain'}}
                  source={require('../../../Images/Iconly-Light-Ticket.png')}
                />
              </TouchableOpacity>
            </View>

            <Text
              style={{
                fontSize: 15,
                color: COLORS.white,
                alignSelf: 'center',
                marginTop: 15,
                fontFamily: 'Poppins-Medium',
              }}>
              SOS Points
            </Text>
            <Text
              style={{
                fontSize: 20,
                color: COLORS.white,
                alignSelf: 'center',
                marginTop: 10,
                fontFamily: 'Poppins-Medium',
              }}>
              71,717
            </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('RewardBadge');
              }}
              style={{
                width: screenWidth / 3,
                padding: 2,
                borderRadius: 20,
                flexDirection: 'row',
                alignSelf: 'center',
                backgroundColor: COLORS.violet,
                marginTop: 20,
                justifyContent: 'space-between',
              }}>
              <Image
                style={{
                  height: 40,
                  width: 40,
                  resizeMode: 'contain',
                  marginTop: 2,
                }}
                source={require('../../../Images/silver_badge.png')}
              />
              <Text
                style={{
                  fontSize: 12,
                  color: COLORS.white,
                  alignSelf: 'center',
                  marginRight: 5,
                  marginTop: 2,
                  fontFamily: 'Poppins-Regular',
                }}>
                Silver
              </Text>
              <Image
                style={{
                  height: 10,
                  width: 10,
                  resizeMode: 'contain',
                  alignSelf: 'center',
                  opacity: 0.7,
                }}
                source={require('../../../Images/next_white.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={{flex: 1, backgroundColor: COLORS.bg_white}}>
        <View style={{margin: 20}}>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 10,
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={{fontSize: 18, fontFamily: 'Poppins-Medium'}}>
              Limited Offers
            </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('LimitedOffers', {listVal: getRewards});
              }}>
              <Text
                style={{
                  fontSize: 10,
                  color: COLORS.grey,
                  fontFamily: 'Poppins-Regular',
                }}>
                View More
              </Text>
            </TouchableOpacity>
          </View>

          <Text
            style={{
              fontSize: 10,
              fontFamily: 'Poppins-Regular',
              color: COLORS.grey,
              marginTop: 3,
            }}>
            Claim limited time offers now
          </Text>
        </View>

        <View style={{flex: 1}}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            data={getRewards}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item, index}) => (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('RewardDetails', {
                    name: item.title,
                    photo: item.photo,
                    voucherId: item.id,
                  });
                }}>
                <View
                  style={[
                    styles.listBoxReward,
                    {
                      flexDirection: 'column',
                      elevation: 5,
                    },
                    
                  ]}>
                  <View style={{height: screenHeight/4, width: '100%'}}>
                    <Image
                      source={{uri: `${APILINKS.IMG_URL_2}${item.photo}`}}
                      style={[
                        styles.imageStyle,
                        {
                          backgroundColor: COLORS.bg_white,
                          borderTopLeftRadius: 20,
                          borderTopRightRadius: 20,
                        },
                      ]}
                      resizeMode='stretch'
                    />
                  </View>

                  <View
                    style={{
                      backgroundColor: COLORS.black_100,
                      width: screenWidth / 1.8,
                      borderBottomLeftRadius: 20,
                      borderBottomRightRadius: 20,
                    }}>
                    <View style={{margin: 10}}>
                      <View style={{height: screenHeight / 12}}>
                        <Text
                          style={{
                            fontSize: 12,
                            color: COLORS.white,
                            fontFamily: 'Poppins-Medium',
                          }}
                          numberOfLines={2}>
                          {item.title}
                        </Text>
                        <Text
                          style={{
                            fontSize: 10,
                            color: COLORS.grey_100,
                            marginTop: 5,
                            fontFamily: 'Poppins-Regular',
                          }}
                          numberOfLines={1}>
                          {item.title}
                        </Text>
                      </View>

                      <View
                        style={{
                          height: screenHeight / 15,
                          flexDirection: 'row',
                          alignItems: 'center',
                        }}>
                        <Image
                          style={{
                            height: 10,
                            width: 10,
                            resizeMode: 'contain',
                            marginRight: 5,
                          }}
                          source={require('../../../Images/Iconly-Yellow-Ticket.png')}
                        />
                        <Text
                          style={{
                            fontSize: 12,
                            color: COLORS.yellow,
                            fontFamily: 'Poppins-Regular',
                          }}>
                          {item.cus_elg_value}
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>

      <View>{modalVisible ? <ActivityLoader /> : null}</View>
    </View>
  );
};

export default Rewards;
