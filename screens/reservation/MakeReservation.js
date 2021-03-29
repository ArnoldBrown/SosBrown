import React, {useState, useEffect} from 'react';
import {
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  StyleSheet,
} from 'react-native';
import {styles} from '../../utils/styles';
import {COLORS} from '../../utils/colors';
import RNPickerSelect, {defaultStyles} from 'react-native-picker-select';
import {APILINKS} from '../../utils/apilinks';
import moment from 'moment';
import ActivityLoader from '../Loader/ActivityLoader';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const sports = [
  {
    label: 'Football',
    value: 'football',
  },
  {
    label: 'Baseball',
    value: 'baseball',
  },
  {
    label: 'Hockey',
    value: 'hockey',
  },
];

const MakeReservation = ({navigation}) => {
  const [getOutletid, setOutletid] = useState('');

  const [getOutlets, setOutlets] = useState([]);

  const [gettempDataArray, settempDataArray] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [getdate, setdate] = useState('');

  const showDatePicker = () => {
    setDatePickerVisibility(!isDatePickerVisible);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(!isDatePickerVisible);
  };

  const handleConfirm = (pickeddate) => {
    let currentDate = pickeddate;
    let setCurrentdate = moment(currentDate).format('DD MMM YYYY');

    setdate(setCurrentdate);
    setDatePickerVisibility(!isDatePickerVisible);
  };

  //var tempDataArray = [];

  useEffect(() => {
    setModalVisible(true);
    fetch(APILINKS.BASE_URL + APILINKS.OUTLET_URL, {
      method: 'POST',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setOutlets(data.data);
        var tempDataArray = [];
        data.data.forEach((ele) => {
          tempDataArray.push({
            label: ele.outlet_name,
            value: ele.outlet_name,
            id: ele.id,
          });
        });
        settempDataArray(tempDataArray);
        console.log('opopopo', tempDataArray);
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
            source={require('../../Images/back_black.png')}
          />

          <Text
            style={{
              marginLeft: 10,
              fontFamily: 'Poppins-Bold',
              alignSelf: 'center',
              fontSize: 15,
            }}>
            Make Reservation
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{flex: 1}}>
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
          <View style={{margin: 20}}>
            <Text
              style={{
                fontSize: 12,
                color: COLORS.black_100,
                marginTop: 10,
                marginBottom: 10,
                fontFamily: 'Poppins-Regular',
              }}>
              Select Outlet
            </Text>

            <View
              style={{
                padding: 5,
                backgroundColor: COLORS.white,
                height: 50,
                borderRadius: 5,
                justifyContent: 'center',
                elevation: 3,
              }}>
              <RNPickerSelect
                placeholder={{
                  label: 'Select Outlet',
                  color: COLORS.grey,
                  value: null,
                }}
                items={gettempDataArray}
                onValueChange={(label) => setOutletid(label)}
                // value={getOutletid}
              >
                <Text>{getOutletid}</Text>
              </RNPickerSelect>
            </View>

            <Text
              style={{
                fontSize: 12,
                color: COLORS.black_100,
                marginTop: 10,
                fontFamily: 'Poppins-Regular',
              }}>
              Select Date & Time
            </Text>

            <TouchableOpacity onPress={() => showDatePicker()}>
              <View style={{flexDirection: 'row', marginTop: 10}}>
                <View
                  style={{
                    flex: 1,
                    backgroundColor: COLORS.white,
                    borderRadius: 5,
                    height: 50,
                    elevation: 3,
                  }}>
                  <Text
                    style={{
                      flex: 1,
                      color: COLORS.black,
                      width: '100%',
                      padding: 10,
                      fontFamily: 'Poppins-Regular',
                    }}>
                    {getdate}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>

            <Text
              style={{
                fontSize: 12,
                color: COLORS.black_100,
                marginTop: 10,
                fontFamily: 'Poppins-Regular',
              }}>
              Enter Number of Pax
            </Text>

            <View
              style={{
                flex: 1,
                backgroundColor: COLORS.white,
                borderRadius: 5,
                marginTop: 10,
                elevation: 3,
                height: 50,
              }}>
              <TextInput
                style={{
                  flex: 1,
                  color: COLORS.black,
                  padding: 10,
                  fontFamily: 'Poppins-Regular',
                }}
                placeholder=""
                underlineColorAndroid="#fff"
                placeholderTextColor={COLORS.grey_line}
                keyboardType="number-pad"
              />
            </View>

            <Text
              style={{
                fontSize: 12,
                color: COLORS.black_100,
                marginTop: 10,
                fontFamily: 'Poppins-Regular',
              }}>
              Enter Reservation Name
            </Text>

            <View
              style={{
                flex: 1,
                backgroundColor: COLORS.white,
                borderRadius: 5,
                marginTop: 10,
                elevation: 3,
                height: 50,
              }}>
              <TextInput
                style={{
                  flex: 1,
                  color: COLORS.black,
                  padding: 10,
                  fontFamily: 'Poppins-Regular',
                }}
                placeholder=""
                underlineColorAndroid="#fff"
                placeholderTextColor={COLORS.grey_line}
              />
            </View>

            <Text
              style={{
                fontSize: 12,
                color: COLORS.black_100,
                marginTop: 20,
                fontFamily: 'Poppins-Regular',
              }}>
              Enter Mobile Number
            </Text>

            <View style={{flexDirection: 'row', marginTop: 10}}>
              <View
                style={{
                  flex: 1,
                  backgroundColor: COLORS.white,
                  borderRadius: 5,
                  elevation: 3,
                  marginRight: 2,
                  height: 50,
                }}>
                <TextInput
                  style={{
                    flex: 1,
                    padding: 10,
                    textAlign: 'center',
                    fontFamily: 'Poppins-Regular',
                  }}
                  placeholder="+60"
                  underlineColorAndroid="#fff"
                  placeholderTextColor={COLORS.black_100}
                />
              </View>
              <View
                style={{
                  flex: 3,
                  backgroundColor: COLORS.white,
                  borderRadius: 5,
                  elevation: 3,
                  marginLeft: 2,
                  height: 50,
                }}>
                <TextInput
                  style={{
                    flex: 1,
                    color: COLORS.black,
                    padding: 10,
                    fontFamily: 'Poppins-Regular',
                  }}
                  placeholder="Phone Number"
                  underlineColorAndroid="#fff"
                  placeholderTextColor={COLORS.grey_line}
                  keyboardType="phone-pad"
                />
              </View>
            </View>

            <Text
              style={{
                fontSize: 12,
                color: COLORS.black_100,
                marginTop: 10,
                fontFamily: 'Poppins-Regular',
              }}>
              Enter Email Address
            </Text>

            <View
              style={{
                flex: 1,
                backgroundColor: COLORS.white,
                borderRadius: 5,
                marginTop: 10,
                elevation: 3,
                height: 50,
                marginBottom: 10,
              }}>
              <TextInput
                style={{
                  flex: 1,
                  color: COLORS.black,
                  padding: 10,
                  fontFamily: 'Poppins-Regular',
                }}
                placeholder=""
                underlineColorAndroid="#fff"
                placeholderTextColor={COLORS.grey_line}
                keyboardType="email-address"
              />
            </View>

            <Text
              style={{
                fontSize: 12,
                color: COLORS.black_100,
                marginTop: 10,
                fontFamily: 'Poppins-Regular',
              }}>
              Additional Notes
            </Text>

            <View
              style={{
                flex: 1,
                backgroundColor: COLORS.white,
                borderRadius: 5,
                marginTop: 10,
                elevation: 3,
                height: 100,
                marginBottom: 10,
              }}>
              <TextInput
                style={{
                  flex: 1,
                  color: COLORS.black,
                  padding: 10,
                  fontFamily: 'Poppins-Regular',
                  textAlignVertical: 'top',
                }}
                placeholder=""
                numberOfLines={3}
                underlineColorAndroid="#fff"
                placeholderTextColor={COLORS.grey_line}
              />
            </View>
          </View>
        </ScrollView>

        <View
          style={{
            justifyContent: 'flex-end',
            elevation: 5,
            backgroundColor: COLORS.white,
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: 10,
            paddingBottom: 10,
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Dashboard');
            }}
            style={{
              width: '100%',
              backgroundColor: COLORS.black_100,
              alignSelf: 'center',
              borderRadius: 5,
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 12,
                color: COLORS.white,
                padding: 10,
                fontFamily: 'Poppins-Regular',
              }}>
              PROCEED
            </Text>
          </TouchableOpacity>
        </View>

        <View>{modalVisible ? <ActivityLoader /> : null}</View>
      </View>

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
};

export default MakeReservation;
