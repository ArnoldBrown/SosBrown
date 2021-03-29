import React from 'react';
import {
  View,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {COLORS} from '../../../utils/colors';
import {styles} from '../../../utils/styles';

const Receipt = ({navigation}) => {
  return (
    <View style={[styles.mainContainer, {backgroundColor: COLORS.grey_300}]}>
      <StatusBar backgroundColor={COLORS.black_100}></StatusBar>
      <View
        style={{
          height: 50,
          flexDirection: 'row',
          elevation: 1,
          backgroundColor: COLORS.white,
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
              fontFamily: 'Poppins-Regular',
            }}>
            Receipt
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={{margin: 20}}>
          <Text
            style={{
              fontSize: 12,
              color: COLORS.grey_200,
              fontFamily: 'Poppins-Medium',
              marginTop: 20,
            }}>
            PAYMENT DETAILS
          </Text>
          <Text
            style={{
              fontSize: 15,
              color: COLORS.black_100,
              fontFamily: 'Poppins-SemiBold',
            }}>
            - RM 150.00
          </Text>
          <Text
            style={{
              fontSize: 12,
              color: COLORS.grey,
              fontFamily: 'Poppins-Normal',
            }}>
            7 Jan 2021, 17:55:49
          </Text>

          <View style={{marginTop: 20}}>
            <View style={{height: 1, backgroundColor: COLORS.grey_line}}></View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: 10,
              }}>
              <Text
                style={{
                  fontSize: 12,
                  color: COLORS.grey,
                  fontFamily: 'Poppins-Medium',
                }}>
                Transacction Type
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  color: COLORS.black_100,
                  fontFamily: 'Poppins-Medium',
                }}>
                Payment
              </Text>
            </View>

            <View style={{height: 1, backgroundColor: COLORS.grey_line}}></View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: 10,
              }}>
              <Text
                style={{
                  fontSize: 12,
                  color: COLORS.grey,
                  fontFamily: 'Poppins-Medium',
                }}>
                Outlet
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  color: COLORS.black_100,
                  fontFamily: 'Poppins-Medium',
                }}>
                SOS Boulevard, Kuching
              </Text>
            </View>

            <View style={{height: 1, backgroundColor: COLORS.grey_line}}></View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: 10,
              }}>
              <Text
                style={{
                  fontSize: 12,
                  color: COLORS.grey,
                  fontFamily: 'Poppins-Medium',
                }}>
                Merchant
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  color: COLORS.black_100,
                  fontFamily: 'Poppins-Medium',
                }}>
                07
              </Text>
            </View>

            <View style={{height: 1, backgroundColor: COLORS.grey_line}}></View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: 10,
              }}>
              <Text
                style={{
                  fontSize: 12,
                  color: COLORS.grey,
                  fontFamily: 'Poppins-Medium',
                }}>
                Payment Method
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  color: COLORS.black_100,
                  fontFamily: 'Poppins-Medium',
                }}>
                SOS E-wallet
              </Text>
            </View>

            <View style={{height: 1, backgroundColor: COLORS.grey_line}}></View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: 10,
              }}>
              <Text
                style={{
                  fontSize: 12,
                  color: COLORS.grey,
                  fontFamily: 'Poppins-Medium',
                }}>
                Status
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  color: COLORS.black_100,
                  fontFamily: 'Poppins-Medium',
                }}>
                Successful
              </Text>
            </View>

            <View style={{height: 1, backgroundColor: COLORS.grey_line}}></View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: 10,
              }}>
              <Text
                style={{
                  fontSize: 12,
                  color: COLORS.grey,
                  fontFamily: 'Poppins-Medium',
                }}>
                Transaction No.
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  color: COLORS.black_100,
                  fontFamily: 'Poppins-Medium',
                }}>
                1234567890
              </Text>
            </View>

            <View style={{height: 1, backgroundColor: COLORS.grey_line}}></View>
          </View>

          <View
            style={{
              backgroundColor: COLORS.white,
              borderRadius: 10,
              height: 160,
              marginTop: 20,
              elevation: 2,
            }}>
            <View style={{padding: 10}}>
              <Text
                style={{
                  color: COLORS.grey,
                  fontSize: 15,
                  fontFamily: 'Poppins-Medium',
                }}>
                POINTS COLLECTED
              </Text>
              <Text
                style={{
                  color: COLORS.black_100,
                  fontSize: 12,
                  fontFamily: 'Poppins-Medium',
                }}>
                + 100 PTS
              </Text>
              <Text
                style={{
                  color: COLORS.grey,
                  fontSize: 12,
                  fontFamily: 'Poppins-Medium',
                }}>
                71,717 Points in Balance
              </Text>
            </View>
            <View style={{backgroundColor: COLORS.grey_line, height: 1}} />
            <View style={{padding: 10, flexDirection: 'row'}}>
              <View style={{backgroundColor: 'red', width: 100, height: 50}}>
                <Image
                  style={{height: '100%', width: '100%', resizeMode: 'cover'}}
                  source={require('../../../Images/item_three.png')}
                />
              </View>

              <View style={{marginLeft: 10}}>
                <Text
                  style={{
                    color: COLORS.black_100,
                    fontSize: 12,
                    fontFamily: 'Poppins-Medium',
                  }}>
                  Membership Card
                </Text>
                <Text
                  style={{
                    color: COLORS.grey,
                    fontSize: 10,
                    fontFamily: 'Poppins-Medium',
                  }}>
                  ID 77117711
                </Text>
              </View>
            </View>
          </View>

          <View
            style={{
              backgroundColor: COLORS.white,
              borderRadius: 10,
              height: 90,
              marginTop: 20,
              elevation: 2,
              justifyContent: 'center',
              padding: 10,
            }}>
            <Text
              style={{
                color: COLORS.grey,
                fontSize: 15,
                fontFamily: 'Poppins-Medium',
              }}>
              PAYMENT DETAILS
            </Text>
            <Text
              style={{
                color: COLORS.black_100,
                fontSize: 12,
                fontFamily: 'Poppins-Medium',
              }}>
              SOS WALLET
            </Text>
          </View>

          <TouchableOpacity
            //onPress={}
            style={{
              width: '100%',
              backgroundColor: COLORS.black_100,
              alignSelf: 'center',
              borderRadius: 5,
              marginTop: 30,
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 12,
                color: COLORS.white,
                padding: 10,
                fontFamily: 'Poppins-Regular',
              }}>
              DOWNLOAD PDF
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Receipt;
