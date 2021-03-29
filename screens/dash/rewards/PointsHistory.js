import React, {useRef} from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  Dimensions,
  StatusBar,
} from 'react-native';
import {COLORS} from '../../../utils/colors';
import {styles} from '../../../utils/styles';

import RBSheet from 'react-native-raw-bottom-sheet';

const PointsHistory = ({navigation}) => {
  const refRBSheetFilter = useRef();
  const refRBSheetSort = useRef();
  const screenWidth = Math.round(Dimensions.get('window').width);
  const screenHeight = Math.round(Dimensions.get('window').height);

  return (
    <View style={styles.mainContainer}>
      <StatusBar backgroundColor={COLORS.black_100}></StatusBar>
      <View style={{backgroundColor: COLORS.white, elevation: 2}}>
        <View style={{height: 50, flexDirection: 'row', elevation: 1}}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
            style={{alignSelf: 'center', flexDirection:'row'}}>
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
            Point History
          </Text>
          </TouchableOpacity>

         
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 10,
            marginTop: 10,
          }}>
          <TouchableOpacity
            onPress={() => refRBSheetSort.current.open()}
            style={{flexDirection: 'row'}}>
            <Text
              style={{
                fontSize: 12,
                color: COLORS.black_100,
                fontFamily: 'Poppins-Regular',
              }}>
              Date Range
            </Text>
            <Image
              style={{
                height: 10,
                width: 10,
                resizeMode: 'contain',
                marginRight: 2,
                marginLeft: 5,
                alignSelf: 'center',
              }}
              source={require('../../../Images/down_arrow.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => refRBSheetFilter.current.open()}
            style={{flexDirection: 'row'}}>
            <Text
              style={{
                fontSize: 12,
                color: COLORS.black_100,
                fontFamily: 'Poppins-Regular',
              }}>
              Filter By
            </Text>
            <Image
              style={{
                height: 10,
                width: 10,
                resizeMode: 'contain',
                marginRight: 2,
                marginLeft: 5,
                alignSelf: 'center',
              }}
              source={require('../../../Images/down_arrow.png')}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View>
        <Text
          style={{
            color: COLORS.black_100,
            fontSize: 12,
            marginTop: 20,
            marginLeft: 20,
            fontFamily: 'Poppins-Regular',
          }}>
          JANUARY 2021
        </Text>

        <View style={{backgroundColor: COLORS.white, marginTop: 10}}>
          <View
            style={{backgroundColor: COLORS.white, padding: 10, marginTop: 10}}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text
                style={{
                  color: COLORS.black_100,
                  fontSize: 12,
                  marginLeft: 10,
                  fontFamily: 'Poppins-Regular',
                }}>
                Purchase - SOS Sarawak
              </Text>
              <Text
                style={{
                  color: COLORS.black_100,
                  fontSize: 12,
                  marginLeft: 20,
                  marginRight: 10,
                  fontFamily: 'Poppins-Regular',
                }}>
                - RM 250.00
              </Text>
            </View>
            <Text
              style={{
                color: COLORS.grey,
                fontSize: 12,
                marginLeft: 10,
                marginTop: 5,
              }}>
              5 Jan
            </Text>
          </View>

          <View
            style={{
              height: 1,
              backgroundColor: COLORS.grey_line,
              marginLeft: 20,
              marginRight: 20,
            }}
          />

          <View
            style={{backgroundColor: COLORS.white, padding: 10, marginTop: 10}}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text
                style={{
                  color: COLORS.black_100,
                  fontSize: 12,
                  marginLeft: 10,
                  fontFamily: 'Poppins-Regular',
                }}>
                Top-up
              </Text>
              <Text
                style={{
                  color: COLORS.blue,
                  fontSize: 12,
                  marginLeft: 20,
                  marginRight: 10,
                  fontFamily: 'Poppins-Regular',
                }}>
                RM 550.00
              </Text>
            </View>
            <Text
              style={{
                color: COLORS.grey,
                fontSize: 12,
                marginLeft: 10,
                marginTop: 5,
                fontFamily: 'Poppins-Regular',
              }}>
              3 Jan
            </Text>
          </View>
        </View>
      </View>

      {/* //sort_by// */}
      <RBSheet
        ref={refRBSheetSort}
        closeOnDragDown={true}
        closeOnPressMask={true}
        height={screenHeight / 2.5}
        customStyles={{
          wrapper: {
            backgroundColor: 'rgba(52, 52, 52, 0.2)',
          },
          container: {
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            elevation: 20,
            backgroundColor: COLORS.white,
          },
        }}>
        <View style={{padding: 10}}>
          <Text
            style={{
              fontSize: 15,
              fontWeight: 'bold',
              marginTop: 10,
              fontFamily: 'Poppins-Regular',
            }}>
            Date Range
          </Text>

          <View style={{justifyContent: 'space-between', marginTop: 10}}>
            <TouchableOpacity
              onPress={() => refRBSheetSort.current.close()}
              style={{width: '100%', borderRadius: 5}}>
              <Text
                style={{
                  color: COLORS.black_100,
                  padding: 10,
                  fontSize: 12,
                  fontFamily: 'Poppins-Regular',
                }}>
                Today
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => refRBSheetSort.current.close()}
              style={{width: '100%', borderRadius: 5}}>
              <Text
                style={{
                  color: COLORS.black_100,
                  padding: 10,
                  fontSize: 12,
                  fontFamily: 'Poppins-Regular',
                }}>
                Last 7 Days
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => refRBSheetSort.current.close()}
              style={{width: '100%', borderRadius: 5}}>
              <Text
                style={{
                  color: COLORS.black_100,
                  padding: 10,
                  fontSize: 12,
                  fontFamily: 'Poppins-Regular',
                }}>
                Last 30 Days
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => refRBSheetSort.current.close()}
              style={{width: '100%', borderRadius: 5}}>
              <Text
                style={{
                  color: COLORS.black_100,
                  padding: 10,
                  fontSize: 12,
                  fontFamily: 'Poppins-Regular',
                }}>
                Last 180 Days
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => refRBSheetSort.current.close()}
              style={{
                backgroundColor: COLORS.black,
                width: '100%',
                borderRadius: 5,
              }}>
              <Text
                style={{
                  color: COLORS.white,
                  padding: 10,
                  fontSize: 12,
                  fontFamily: 'Poppins-Regular',
                }}>
                Custom Date Range
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </RBSheet>

      {/* //sort_by// */}
      <RBSheet
        ref={refRBSheetFilter}
        closeOnDragDown={true}
        closeOnPressMask={true}
        height={screenHeight / 3}
        customStyles={{
          wrapper: {
            backgroundColor: 'rgba(52, 52, 52, 0.2)',
          },
          container: {
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            elevation: 20,
            backgroundColor: COLORS.white,
          },
        }}>
        <View style={{padding: 10}}>
          <Text style={{fontSize: 15, fontWeight: 'bold', marginTop: 10}}>
            Filter By
          </Text>

          <View style={{justifyContent: 'space-between', marginTop: 10}}>
            <TouchableOpacity
              onPress={() => refRBSheetSort.current.close()}
              style={{width: '100%', borderRadius: 5}}>
              <Text
                style={{
                  color: COLORS.black_100,
                  padding: 10,
                  fontSize: 12,
                  fontFamily: 'Poppins-Regular',
                }}>
                Payments
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => refRBSheetSort.current.close()}
              style={{width: '100%', borderRadius: 5}}>
              <Text
                style={{
                  color: COLORS.black_100,
                  padding: 10,
                  fontSize: 12,
                  fontFamily: 'Poppins-Regular',
                }}>
                Top Up
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => refRBSheetSort.current.close()}
              style={{width: '100%', borderRadius: 5}}>
              <Text
                style={{
                  color: COLORS.black_100,
                  padding: 10,
                  fontSize: 12,
                  fontFamily: 'Poppins-Regular',
                }}>
                Oldest to Most Recent
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => refRBSheetSort.current.close()}
              style={{
                backgroundColor: COLORS.black,
                width: '100%',
                borderRadius: 5,
              }}>
              <Text
                style={{
                  color: COLORS.white,
                  padding: 10,
                  fontSize: 12,
                  fontFamily: 'Poppins-Regular',
                }}>
                Most Recent to Oldest
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </RBSheet>
    </View>
  );
};

export default PointsHistory;
