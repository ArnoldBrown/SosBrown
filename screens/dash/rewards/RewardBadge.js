import React from 'react';
import {
  View,
  ImageBackground,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  Dimensions,
} from 'react-native';
import {styles} from '../../../utils/styles';
import {COLORS} from '../../../utils/colors';

const RewardBadge = ({navigation}) => {
  const screenHeight = Math.round(Dimensions.get('window').height);

  return (
    <View style={styles.mainContainer}>
      <StatusBar backgroundColor={COLORS.black_100}></StatusBar>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={{flex: 1, backgroundColor: COLORS.grey_300}}>
          <View style={{height: screenHeight / 3.5}}>
            <ImageBackground
              style={{height: '100%', width: '100%'}}
              imageStyle={{
                borderBottomRightRadius: 25,
                borderBottomLeftRadius: 25,
              }}
              source={require('../../../Images/bg.png')}>
              <View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginRight: 10,
                  }}>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.goBack();
                    }}
                    style={{alignSelf: 'center'}}>
                    <Image
                      style={{height: 50, width: 50, resizeMode: 'contain'}}
                      source={require('../../../Images/back_icon.png')}
                    />
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('PointsHistory');
                    }}>
                    <Image
                      style={{height: 20, width: 20, resizeMode: 'contain'}}
                      source={require('../../../Images/Iconly_Light_Timer.png')}
                    />
                  </TouchableOpacity>
                </View>

                <View style={{alignSelf: 'center', height: 70, width: 100}}>

                  <Image
                    style={{
                      height: '100%',
                      width: '100%',
                      resizeMode: 'cover',
                    }}
                    source={require('../../../Images/silver_badge.png')}
                  />

                  <Text
                    style={{
                      fontSize: 15,
                      color: COLORS.white,
                      alignSelf: 'center',
                      fontFamily: 'Poppins-SemiBold',
                    }}>
                    Silver
                  </Text>
                </View>
              </View>
            </ImageBackground>
          </View>
        </View>

        <View style={{flex: 2.5, backgroundColor: COLORS.grey_300}}>
          <View
            style={{
              position: 'absolute',
              alignItems: 'center',
              top: -30,
              width: '100%',
            }}>
            <View
              style={{
                width: '80%',
                backgroundColor: COLORS.white,
                flexDirection: 'row',
                padding: 10,
                borderRadius: 5,
                elevation: 5,
              }}>
              <View style={styles.logoSos40_black}>
                <Image
                  style={{
                    width: 20,
                    height: 20,
                    alignSelf: 'center',
                    resizeMode: 'contain',
                  }}
                  source={require('../../../Images/ticket_star_yellow_fill.png')}
                />
              </View>

              <View style={{alignSelf: 'center', width: '60%', marginLeft: 10}}>
                <Text
                  numberOfLines={2}
                  ellipsizeMode="tail"
                  style={{
                    color: COLORS.black_100,
                    fontSize: 13,
                    fontFamily: 'Poppins-Regular',
                  }}>
                  Earn 28,289 points to reach the next tier.
                </Text>
              </View>
            </View>
          </View>

          <View style={{margin: 10}}>
            <Text
              style={{
                fontSize: 15,
                color: COLORS.black_100,
                fontFamily: 'Poppins-SemiBold',
                marginTop: 40,
              }}>
              How SOS Tier Works?
            </Text>

            <View style={{flexDirection: 'row', marginTop: 20}}>
              <View style={styles.logoSos40_black}>
                <Image
                  style={{
                    width: 20,
                    height: 20,
                    alignSelf: 'center',
                    resizeMode: 'contain',
                  }}
                  source={require('../../../Images/wallet_white.png')}
                />
              </View>

              <View style={{alignSelf: 'center', width: '85%', marginLeft: 10}}>
                <Text
                  numberOfLines={1}
                  ellipsizeMode="tail"
                  style={{
                    color: COLORS.black_100,
                    fontSize: 15,
                    fontFamily: 'Poppins-Medium',
                  }}>
                  Every RM 1 spent earns you 1 pts
                </Text>
                <Text
                  numberOfLines={5}
                  ellipsizeMode="tail"
                  style={{
                    color: COLORS.grey_500,
                    fontSize: 12,
                    marginTop: 5,
                    fontFamily: 'Poppins-Regular',
                  }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do elusmod tempor.
                </Text>
              </View>
            </View>

            <View
              style={{
                backgroundColor: COLORS.grey,
                height: 1,
                marginTop: 10,
                marginBottom: 10,
              }}
            />

            <View style={{flexDirection: 'row'}}>
              <View style={styles.logoSos40_black}>
                <Image
                  style={{
                    width: 20,
                    height: 20,
                    alignSelf: 'center',
                    resizeMode: 'contain',
                  }}
                  source={require('../../../Images/ticket_star_white.png')}
                />
              </View>

              <View style={{alignSelf: 'center', width: '85%', marginLeft: 10}}>
                <Text
                  numberOfLines={1}
                  ellipsizeMode="tail"
                  style={{
                    color: COLORS.black_100,
                    fontSize: 15,
                    fontFamily: 'Poppins-Medium',
                  }}>
                  Collect enough points
                </Text>
                <Text
                  numberOfLines={5}
                  ellipsizeMode="tail"
                  style={{
                    color: COLORS.grey_500,
                    fontSize: 12,
                    marginTop: 5,
                    fontFamily: 'Poppins-Regular',
                  }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do elusmod tempor.
                </Text>
              </View>
            </View>

            <View
              style={{
                backgroundColor: COLORS.grey,
                height: 1,
                marginTop: 10,
                marginBottom: 10,
              }}
            />

            <View style={{flexDirection: 'row'}}>
              <View style={styles.logoSos40_black}>
                <Image
                  style={{
                    width: 20,
                    height: 20,
                    alignSelf: 'center',
                    resizeMode: 'contain',
                  }}
                  source={require('../../../Images/spade_white.png')}
                />
              </View>

              <View style={{alignSelf: 'center', width: '85%', marginLeft: 10}}>
                <Text
                  numberOfLines={1}
                  ellipsizeMode="tail"
                  style={{
                    color: COLORS.black_100,
                    fontSize: 15,
                    fontFamily: 'Poppins-Medium',
                  }}>
                  Move up tiers to earn benefits
                </Text>
                <Text
                  numberOfLines={5}
                  ellipsizeMode="tail"
                  style={{
                    color: COLORS.grey_500,
                    fontSize: 12,
                    marginTop: 5,
                    fontFamily: 'Poppins-Regular',
                  }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do elusmod tempor.
                </Text>
              </View>
            </View>

            <View
              style={{
                backgroundColor: COLORS.grey,
                height: 1,
                marginTop: 10,
                marginBottom: 10,
              }}
            />

            <View style={{flexDirection: 'row'}}>
              <View style={styles.logoSos40_black}>
                <Image
                  style={{
                    width: 20,
                    height: 20,
                    alignSelf: 'center',
                    resizeMode: 'contain',
                  }}
                  source={require('../../../Images/timer_caution_white.png')}
                />
              </View>

              <View style={{alignSelf: 'center', width: '85%', marginLeft: 10}}>
                <Text
                  numberOfLines={1}
                  ellipsizeMode="tail"
                  style={{
                    color: COLORS.black_100,
                    fontSize: 15,
                    fontFamily: 'Poppins-Medium',
                  }}>
                  Points will expire yearly
                </Text>
                <Text
                  numberOfLines={5}
                  ellipsizeMode="tail"
                  style={{
                    color: COLORS.grey_500,
                    fontSize: 12,
                    marginTop: 5,
                    fontFamily: 'Poppins-Regular',
                  }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do elusmod tempor.
                </Text>
              </View>
            </View>

            <View
              style={{
                backgroundColor: COLORS.grey,
                height: 1,
                marginTop: 10,
                marginBottom: 10,
              }}
            />

            <View style={{flexDirection: 'row'}}>
              <View style={styles.logoSos40_black}>
                <Image
                  style={{
                    width: 20,
                    height: 20,
                    alignSelf: 'center',
                    resizeMode: 'contain',
                  }}
                  source={require('../../../Images/ticket_star_white.png')}
                />
              </View>

              <View style={{alignSelf: 'center', width: '85%', marginLeft: 10}}>
                <Text
                  numberOfLines={1}
                  ellipsizeMode="tail"
                  style={{
                    color: COLORS.black_100,
                    fontSize: 15,
                    fontFamily: 'Poppins-Medium',
                  }}>
                  Use Points to redeem vouchers
                </Text>
                <Text
                  numberOfLines={5}
                  ellipsizeMode="tail"
                  style={{
                    color: COLORS.grey_500,
                    fontSize: 12,
                    marginTop: 5,
                    fontFamily: 'Poppins-Regular',
                  }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do elusmod tempor.
                </Text>
              </View>
            </View>

            <View
              style={{
                backgroundColor: COLORS.grey,
                height: 1,
                marginTop: 10,
                marginBottom: 10,
              }}
            />
          </View>
        </View>
      </ScrollView>

      <View style={{backgroundColor: COLORS.white}}>
        <View style={{backgroundColor: COLORS.grey_100, height: 1}} />

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('TierBenefits');
          }}
          style={{
            width: '90%',
            backgroundColor: COLORS.black_100,
            alignSelf: 'center',
            borderRadius: 5,
            marginTop: 10,
            marginBottom: 10,
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 12,
              color: COLORS.white,
              padding: 15,
              fontFamily: 'Poppins-Regular',
            }}>
            TIER BENEFITS
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RewardBadge;
