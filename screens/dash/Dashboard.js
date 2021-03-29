import React, {useRef, useState} from 'react';
import {
  Image,
  View,
  Text,
  Dimensions,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import {COLORS} from '../../utils/colors';
import {styles} from '../../utils/styles';

import Home from '../dash/home/Home';
import Payment from '../dash/payment/Payment';
import Rewards from '../dash/rewards/Rewards';
import Inbox from '../dash/inbox/Inbox';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import RBSheet from 'react-native-raw-bottom-sheet';

const Dashboard = ({navigation}) => {
  const Tab = createBottomTabNavigator();
  const refRBSheet = useRef();
  const screenHeight = Math.round(Dimensions.get('window').height);
  const screenWidth = Math.round(Dimensions.get('window').width);

  const [optionList] = useState([
    {id: '1', img: require('../../Images/sos_one.png'), name: 'Outlets'},
    {id: '2', img: require('../../Images/sos_two.png'), name: 'Reservation'},
    {
      id: '3',
      img: require('../../Images/sos_three.png'),
      name: 'Scan to Order',
    },
    {id: '4', img: require('../../Images/sos_four.png'), name: 'Catalog'},
    {
      id: '5',
      img: require('../../Images/ticket_star_black.png'),
      name: 'Collect Points',
    },
    {id: '6', img: require('../../Images/sos_six.png'), name: 'More'},
  ]);

  const selectedOption = (id) => {
    console.log('character', id);
    switch (id) {
      case '1':
        navigation.navigate('OutletsMain');
        break;
      case '2':
        navigation.navigate('MyReservation');
        break;
      case '3':
        navigation.navigate('QrScan');
        break;
      case '4':
        navigation.navigate('Catalog');
        break;
      case '5':
        navigation.navigate('Rewards');
        break;
      case '6':
        navigation.navigate('SosMore');
        break;

      default:
        break;
    }
  };

  return (
    <View style={styles.mainContainer}>
      <Tab.Navigator
        initialRouteName="Home"
        tabBarOptions={{
          activeTintColor: COLORS.yellow,
          inactiveTintColor: COLORS.grey_100,
          showLabel: true,
          style: {
            backgroundColor: COLORS.black_100,
          },
          labelStyle: {
            fontFamily: 'Poppins-Bold',
          },
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            //tabBarLabel: 'Home',
            tabBarIcon: ({color}) => (
              <Image
                source={require('../../Images/Home.png')}
                style={{height: 18, width: 18, resizeMode: 'contain'}}
                tintColor={color}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Payment"
          component={Payment}
          options={{
            //tabBarLabel: 'Home',
            tabBarIcon: ({color}) => (
              <Image
                source={require('../../Images/Wallet.png')}
                style={{height: 18, width: 18, resizeMode: 'contain'}}
                tintColor={color}
              />
            ),
          }}
        />

        <Tab.Screen
          name="Dashboard"
          component={Home}
          onPress={() => refRBSheet.current.open()}
          // onPress={() => {
          //     alert('instagram');
          //   }}

          options={{
            tabBarLabel: '',
            tabBarIcon: () => (
              <View
                style={{
                  position: 'absolute',
                  bottom: 0, // space from bottombar
                  height: 65,
                  width: 65,
                  borderRadius: 55,
                  backgroundColor: COLORS.white,
                  justifyContent: 'center',
                  alignItems: 'center',
                  elevation: 1,
                }}>
                <TouchableOpacity onPress={() => refRBSheet.current.open()}>
                  <View style={styles.logoSosDash}>
                    <Image
                      style={{
                        width: 60,
                        height: 60,
                        alignSelf: 'center',
                        resizeMode: 'contain',
                      }}
                      source={require('../../Images/app_logo_large_x.png')}
                    />
                  </View>
                </TouchableOpacity>
              </View>
            ),
          }}
        />

        <Tab.Screen
          name="Rewards"
          component={Rewards}
          options={{
            //tabBarLabel: 'Home',
            tabBarIcon: ({color}) => (
              <Image
                source={require('../../Images/Ticket_Star.png')}
                style={{height: 18, width: 18, resizeMode: 'contain'}}
                tintColor={color}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Inbox"
          component={Inbox}
          options={{
            //tabBarLabel: 'Home',
            tabBarIcon: ({color}) => (
              <Image
                source={require('../../Images/Message.png')}
                style={{height: 18, width: 18, resizeMode: 'contain'}}
                tintColor={color}
              />
            ),
          }}
        />
      </Tab.Navigator>

      {/* //sort_by// */}
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}
        height={screenHeight / 2.5}
        customStyles={{
          wrapper: {
            backgroundColor: 'rgba(52, 52, 52, 0.7)',
          },
          container: {
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            elevation: 20,
            backgroundColor: COLORS.black,
          },
        }}>
        <View style={{padding: 10, backgroundColor: COLORS.black}}>
          <View style={{justifyContent: 'space-between'}}>
            <View>
              <Text
                style={{
                  fontSize: 15,
                  fontFamily: 'Poppins-SemiBold',
                  color: COLORS.white,
                  padding: 10,
                }}>
                Experience SOS
              </Text>

              <View>
                <FlatList
                  contentContainerStyle={{alignSelf: 'center'}}
                  showsVerticalScrollIndicator={false}
                  numColumns={4}
                  data={optionList}
                  renderItem={({item}) => (
                    <TouchableOpacity
                      onPress={() => {
                        selectedOption(item.id), refRBSheet.current.close();
                      }}
                      style={{
                        alignItems: 'center',
                        width: screenWidth / 4,
                        padding: 10,
                      }}>
                      <View style={styles.bgSos40}>
                        <Image
                          style={{
                            width: 30,
                            height: 30,
                            alignSelf: 'center',
                            resizeMode: 'contain',
                          }}
                          source={item.img}
                        />
                      </View>
                      <Text
                        style={{
                          color: COLORS.white,
                          fontSize: 10,
                          fontFamily: 'Poppins-Bold',
                          marginTop: 5,
                          textAlign: 'center',
                        }}>
                        {item.name}
                      </Text>
                    </TouchableOpacity>
                  )}
                />
              </View>

              {/* <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20 }}>

                                <TouchableOpacity onPress={() => { navigation.navigate('OutletsMain'), refRBSheet.current.close() }} style={{ alignItems: 'center', width: screenWidth / 4 }}>
                                    <View style={styles.bgSos40}>
                                        <Image style={{ width: 30, height: 30, alignSelf: 'center', resizeMode: 'contain' }}
                                            source={require('../../Images/sos_one.png')} />

                                    </View>
                                    <Text style={{ color: COLORS.white, fontSize: 10, fontFamily: "Poppins-Bold", marginTop: 5, textAlign: 'center' }}>Outlets</Text>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => { navigation.navigate('MyReservation'), refRBSheet.current.close() }} style={{ alignItems: 'center', width: screenWidth / 4 }}>
                                    <View style={styles.bgSos40}>
                                        <Image style={{ width: 30, height: 30, alignSelf: 'center', resizeMode: 'contain' }}
                                            source={require('../../Images/sos_two.png')} />

                                    </View>
                                    <Text style={{ color: COLORS.white, fontSize: 10, fontFamily: "Poppins-Bold", marginTop: 5, textAlign: 'center' }}>Reservation</Text>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => { navigation.navigate('QrScan'), refRBSheet.current.close() }} style={{ alignItems: 'center', width: screenWidth / 4 }}>
                                    <View style={styles.bgSos40}>
                                        <Image style={{ width: 30, height: 30, alignSelf: 'center', resizeMode: 'contain' }}
                                            source={require('../../Images/sos_three.png')} />

                                    </View>
                                    <Text style={{ color: COLORS.white, fontSize: 10, fontFamily: "Poppins-Bold", marginTop: 5, textAlign: 'center' }}>Scan to Order</Text>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => { navigation.navigate('Catalog'), refRBSheet.current.close() }} style={{ alignItems: 'center', width: screenWidth / 4 }}>
                                    <View style={styles.bgSos40}>
                                        <Image style={{ width: 30, height: 30, alignSelf: 'center', resizeMode: 'contain' }}
                                            source={require('../../Images/sos_four.png')} />

                                    </View>
                                    <Text style={{ color: COLORS.white, fontSize: 10, fontFamily: "Poppins-Bold", marginTop: 5, textAlign: 'center' }}>Catalog</Text>
                                </TouchableOpacity>

                            </View>

                            <View style={{ flexDirection: 'row', marginTop: 20 }}>

                                <TouchableOpacity onPress={() => { navigation.navigate('Rewards'), refRBSheet.current.close() }} style={{ alignItems: 'center', width: screenWidth / 4 }}>
                                    <View style={styles.bgSos40}>
                                        <Image style={{ width: 30, height: 30, alignSelf: 'center', resizeMode: 'contain' }}
                                            source={require('../../Images/ticket_star_black.png')} />

                                    </View>
                                    <Text style={{ color: COLORS.white, fontSize: 10, fontFamily: "Poppins-Bold", marginTop: 5, textAlign: 'center' }}>Collect Points</Text>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => { navigation.navigate('SosMore'), refRBSheet.current.close() }} style={{ alignItems: 'center', width: screenWidth / 4 }}>
                                    <View style={styles.bgSos40}>
                                        <Image style={{ width: 30, height: 30, alignSelf: 'center', resizeMode: 'contain' }}
                                            source={require('../../Images/sos_six.png')} />

                                    </View>
                                    <Text style={{ color: COLORS.white, fontSize: 10, fontFamily: "Poppins-Bold", marginTop: 5, textAlign: 'center' }}>More</Text>
                                </TouchableOpacity>

                            </View>
 */}
            </View>
          </View>
        </View>
      </RBSheet>
    </View>
  );
};
export default Dashboard;
