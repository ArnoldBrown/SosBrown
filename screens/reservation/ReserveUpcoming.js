import React, {useState, useEffect} from 'react';
import {
  View,
  Image,
  Text,
  FlatList,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
  ActivityIndicator,
  Modal,
} from 'react-native';
import {styles} from '../../utils/styles';
import {COLORS} from '../../utils/colors';
import {APILINKS} from '../../utils/apilinks';

import ActivityLoader from '../Loader/ActivityLoader';

import {useSelector} from 'react-redux';

const ReserveUpcoming = ({route, navigation}) => {
  const [getReservation, setReservation] = useState([]);
  const [emptyViewVisible, setemptyViewVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  /get_value_from_redux/;
  const getToken = useSelector((state) => state.loginDetails);

  useEffect(() => {
    setModalVisible(true);
    var form = new FormData();
    form.append('api_token', getToken.msg.token);
    fetch(APILINKS.BASE_URL + APILINKS.RESERVATION_URL, {
      method: 'POST',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
      }),
      body: form,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.data === null) {
          setemptyViewVisible(true);
        }
        setReservation(data.data);
        setTimeout(() => {
          setModalVisible(false);
        }, 200);
      });
  }, []);

  const [reserveList] = useState([
    {
      id: '1',
      img: require('../../Images/outlet_one.png'),
      pax: '4 Pax',
      desc: 'SOS Bolevard Kuching',
      date: '20 June 2020 14:00',
      status: 'CONFIRMED',
    },
    {
      id: '2',
      img: require('../../Images/outlet_one.png'),
      pax: '2 Pax',
      desc: 'SOS Bolevard Kuching',
      date: '12 Oct 2020 10:00',
      status: 'PENDING',
    },
  ]);

  return (
    <View style={[styles.commonWrapper]}>
      <StatusBar backgroundColor={COLORS.black_100}></StatusBar>

      <SafeAreaView style={{flex: 1, flexDirection: 'column'}}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          numColumns={1}
          data={getReservation}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item, index}) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('ReserveDetails', {
                  paramKeyTitle: 'UpComing Reservation',
                  paramKeyBtn: 'CANCEL RESERVATION',
                  paramKey: 'UPCOMING',
                  outname: item.outlet_name,
                  date: item.date,
                  time: item.time,
                  usrName: item.name,
                  mobile: item.phone,
                  desc: item.description,
                  pax: item.pax1 + item.pax2,
                  id: item.id,
                });
              }}>
              <View style={styles.listBox}>
                <Image
                  source={{uri: `${APILINKS.IMG_URL}${item.out_image}`}}
                  style={{width: 70, height: 70, borderRadius: 8}}
                />

                <View style={{flex: 1, marginLeft: 10, flexDirection: 'row'}}>
                  <View
                    style={{
                      flex: 0.9,
                      alignSelf: 'center',
                      width: '100%',
                      marginLeft: 10,
                    }}>
                    <Text
                      numberOfLines={1}
                      style={{
                        color: COLORS.black_100,
                        fontFamily: 'Poppins-Medium',
                        fontSize: 12,
                      }}>
                      {item.outlet_name}
                    </Text>
                    <View style={{flexDirection: 'row', marginTop: 5}}>
                      <Text
                        numberOfLines={1}
                        style={{
                          color: COLORS.grey,
                          fontFamily: 'Poppins-Bold',
                          fontSize: 12,
                        }}>
                        {item.pax1 + item.pax2} Pax
                      </Text>
                      <Text
                        numberOfLines={1}
                        style={{
                          color: COLORS.grey,
                          fontFamily: 'Poppins-Bold',
                          fontSize: 12,
                          marginLeft: 10,
                        }}>
                        {item.date} {item.time}
                      </Text>
                    </View>
                    <View
                      style={{
                        width: 100,
                        marginTop: 5,
                        padding: 3,
                        backgroundColor: COLORS.grey_line,
                        borderRadius: 20,
                        borderRadius: 20,
                        alignItems: 'center',
                      }}>
                      <Text
                        numberOfLines={1}
                        style={[
                          item.status === '1'
                            ? styles.textConfirmed
                            : styles.textPending,
                          {fontFamily: 'Poppins-Regular'},
                        ]}>
                        {item.status}
                      </Text>
                    </View>
                  </View>

                  <View style={{flex: 0.1, alignSelf: 'center'}}>
                    <Image
                      style={{
                        width: 10,
                        height: 10,
                        alignSelf: 'center',
                        resizeMode: 'contain',
                        tintColor: COLORS.grey,
                      }}
                      source={require('../../Images/next.png')}
                    />
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      </SafeAreaView>

      <View>{modalVisible ? <ActivityLoader /> : null}</View>

      {emptyViewVisible ? (
        <Text
          style={{
            fontSize: 12,
            color: COLORS.grey,
            padding: 30,
            backgroundColor: COLORS.white,
            elevation: 1,
            textAlign: 'center',
            marginTop: 10,
          }}>
          No upcoming reservation
        </Text>
      ) : null}
    </View>
  );
};

export default ReserveUpcoming;
