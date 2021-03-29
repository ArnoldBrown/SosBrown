import React, {useRef, useState, useEffect} from 'react';
import {
  View,
  ScrollView,
  Image,
  Text,
  ImageBackground,
  Dimensions,
  Platform,
  StatusBar,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {COLORS} from '../../../utils/colors';
import {styles} from '../../../utils/styles';
import {APILINKS} from '../../../utils/apilinks';
import Carousel, {ParallaxImage} from 'react-native-snap-carousel';
import {useDispatch, useSelector} from 'react-redux';
import ActivityLoader from '../../Loader/ActivityLoader';
import {color} from 'react-native-reanimated';

const Home = ({navigation}) => {
  const screenWidth = Math.round(Dimensions.get('window').width);
  const screenHeight = Math.round(Dimensions.get('window').height);
  const ITEM_WIDTH = Math.round(screenWidth * 0.7);
  const ITEM_HEIGHT = Math.round(screenWidth * 0.7);

  /get_value_from_redux/;
  const getToken = useSelector((state) => state.loginDetails);

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

  const [modalVisible, setModalVisible] = useState(false);
  const [getNewPost, setNewPost] = useState([]);
  const [getProduct, setProduct] = useState([]);
  const [getCaroIndex, setCaroIndex] = useState([]);
  const carouselRef = useRef(null);

  useEffect(() => {
    //  setEntries(ENTRIES1)P;
    setModalVisible(true);
    fetch(APILINKS.BASE_URL + APILINKS.NEW_POST_URL, {
      method: 'POST',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setNewPost(data.data);
      });

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
        setProduct(data.data);
        setTimeout(() => {
          setModalVisible(false);
        }, 2000);
      });
  }, []);

  const renderItem = ({item, index}, parallaxProps) => {
    let imgName = '';
    {
      item.postImage.map((ee) => {
        imgName = ee.pImage;
      });

      return (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('NewsDetail');
          }}>
          <View
            style={{
              width: ITEM_WIDTH,
              height: ITEM_HEIGHT,
              justifyContent: 'center',
              elevation: 10,
              backgroundColor: COLORS.bg_white,
              marginBottom: 5,
            }}>
            <Image
              source={{uri: `${APILINKS.IMG_URL_2}${imgName}`}}
              containerStyle={{
                flex: 1,
                marginBottom: Platform.select({ios: 0, android: 1}), // Prevent a random Android rendering issue
                backgroundColor: 'transparent',
              }}
              style={{
                position: 'absolute',
                width: ITEM_WIDTH + 30,
                height: ITEM_HEIGHT,
                left: -15,
                right: -15,
                resizeMode: 'cover',
                borderRadius: 15,
              }}
              key={index}
              parallaxFactor={0.4}
              {...parallaxProps}
            />
          </View>
        </TouchableOpacity>
      );
      // })
    }
  };

  return (
    <View style={styles.mainContainer}>
      <StatusBar backgroundColor={COLORS.black_100}></StatusBar>
      <View
        style={{
          position: 'absolute',
          height: screenHeight / 10,
          borderBottomRightRadius: 25,
          borderBottomLeftRadius: 25,
        }}>
        <ImageBackground
          style={{height: '100%', width: '100%'}}
          imageStyle={{
            borderBottomRightRadius: 25,
            borderBottomLeftRadius: 25,
            backgroundColor: 'transparent',
          }}
          source={require('../../../Images/bg.png')}>
          <View>
            <View
              style={{
                margin: 20,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  fontSize: 12,
                  color: COLORS.white,
                  alignSelf: 'center',
                  marginTop: 10,
                  fontFamily: 'Poppins-Medium',
                }}>
                Balance
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignSelf: 'center',
                  marginTop: 10,
                }}>
                <Text
                  style={{
                    fontSize: 10,
                    color: COLORS.white,
                    marginRight: 5,
                    fontFamily: 'Poppins-Medium',
                  }}>
                  RM
                </Text>
                <Text
                  style={{
                    fontSize: 10,
                    color: COLORS.white,
                    fontFamily: 'Poppins-Medium',
                  }}>
                  1,888.80
                </Text>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <View style={{backgroundColor: COLORS.bg_white}}>
          <View
            style={{
              height: screenHeight / 3.5,
            }}>
            <ImageBackground
              style={{height: '100%', width: '100%'}}
              imageStyle={{
                borderBottomRightRadius: 25,
                borderBottomLeftRadius: 25,
              }}
              source={require('../../../Images/bg.png')}>
              <View>
                <View style={{margin: 20}}>
                  <Text
                    style={{
                      fontSize: 15,
                      color: COLORS.white,
                      alignSelf: 'center',
                      marginTop: 10,
                      fontFamily: 'Poppins-Medium',
                    }}>
                    Wallet Balance
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignSelf: 'center',
                      marginTop: 10,
                    }}>
                    <Text
                      style={{
                        fontSize: 12,
                        color: COLORS.white,
                        marginTop: 3,
                        marginRight: 5,
                        fontFamily: 'Poppins-Medium',
                      }}>
                      RM
                    </Text>
                    <Text
                      style={{
                        fontSize: 25,
                        color: COLORS.white,
                        fontFamily: 'Poppins-Medium',
                      }}>
                      1,888.80
                    </Text>
                  </View>
                </View>
              </View>
            </ImageBackground>
          </View>

          <View style={{backgroundColor: COLORS.bg_white}}>
            <View
              style={{
                position: 'absolute',
                alignItems: 'center',
                top: -50,
                width: '100%',
                height: 160,
              }}>
              <View
                style={{
                  backgroundColor: COLORS.white,
                  width: '90%',
                  height: '100%',

                  borderRadius: 10,
                  shadowColor: COLORS.black,
                  shadowOffset: {
                    width: 0,
                    height: 10,
                  },
                  shadowOpacity: 0.51,
                  shadowRadius: 13.16,

                  elevation: 10,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: 15,
                  }}>
                  <Text
                    style={{
                      color: COLORS.black_100,
                      fontSize: 15,
                      fontFamily: 'Poppins-Medium',
                    }}>
                    {getToken.msg.name !== '' ? getToken.msg.name : 'Hi user'}
                  </Text>
                  <Text
                    style={{
                      color: COLORS.black_100,
                      fontSize: 12,
                      fontFamily: 'Poppins-Regular',
                    }}>
                    ID {getToken.msg.id}
                  </Text>
                </View>
                <ImageBackground
                  style={{
                    height: '80%',
                    width: '100%',
                    justifyContent: 'center',
                  }}
                  source={require('../../../Images/item_three.png')}
                  imageStyle={{
                    resizeMode: 'cover',
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate('Pay');
                      }}>
                      <Image
                        style={{width: 100, height: 100, resizeMode: 'contain'}}
                        source={require('../../../Images/qr_hand.png')}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate('Maintanance');
                      }}>
                      <View
                        style={{
                          flexDirection: 'row',
                          backgroundColor: COLORS.white,
                          width: 100,
                          height: 40,
                          marginRight: 20,
                          borderRadius: 5,
                          alignItems: 'center',
                          justifyContent: 'center',
                          elevation: 5,
                          marginBottom: 20,
                        }}>
                        <Image
                          style={{
                            height: 20,
                            width: 20,
                            resizeMode: 'contain',
                            marginRight: 5,
                            alignItems: 'center',
                          }}
                          source={require('../../../Images/ticket_star_black.png')}
                        />
                        <Text
                          style={{
                            fontSize: 10,
                            color: COLORS.black_100,
                            fontFamily: 'Poppins-Regular',
                          }}>
                          71,717 PTS
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </ImageBackground>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                marginTop: 140,
                marginLeft: 10,
                marginRight: 10,
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: 15,
                  fontFamily: 'Poppins-Medium',
                  color: COLORS.black_100,
                }}>
                News & Promotions
              </Text>
            </View>

            <Text
              style={{
                fontSize: 10,
                color: COLORS.grey,
                marginTop: 3,
                marginLeft: 10,
                fontFamily: 'Poppins-Regular',
              }}>
              Check out our latest updates
            </Text>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: 20,
                marginBottom: 20,
              }}>
              <Carousel
                layout={'default'}
                sliderWidth={screenWidth}
                itemWidth={ITEM_WIDTH}
                itemHeight={ITEM_HEIGHT}
                data={getNewPost}
                renderItem={renderItem}
                loop={true}
                inactiveSlideShift={0}
                inactiveSlideScale={0.8}
                inactiveSlideOpacity={0.7}
                useScrollView={true}
                onSnapToItem={(index) => setCaroIndex({index})}
              />
            </View>

            <Text
              style={{
                fontSize: 15,
                fontFamily: 'Poppins-Medium',
                color: COLORS.black_100,
                marginLeft: 10,
              }}>
              Shop Rewards
            </Text>

            <Text
              style={{
                fontSize: 10,
                color: COLORS.grey,
                marginTop: 3,
                marginLeft: 10,
                marginBottom: 20,
                fontFamily: 'Poppins-Regular',
              }}>
              Claim exclusive offers now
            </Text>

            <View>
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                data={getProduct}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item, index}) => (
                 
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('RewardDetails', {
                        name: item.title,
                        photo: item.photo,
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
                      <View style={{height: 200, width: '100%'}}>
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
      </ScrollView>
    </View>
  );
};

export default Home;
