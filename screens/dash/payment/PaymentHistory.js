import React, {useRef, useState} from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  Dimensions,
  FlatList,
  StatusBar,
  TextInput,
} from 'react-native';
import {COLORS} from '../../../utils/colors';
import {styles} from '../../../utils/styles';
import * as Animatable from 'react-native-animatable';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

import RBSheet from 'react-native-raw-bottom-sheet';

import moment from 'moment';

const PaymentHistory = ({navigation}) => {
  const refRBSheetFilter = useRef();
  const refRBSheetSort = useRef();
  const refRBSheetDate = useRef();
  const screenWidth = Math.round(Dimensions.get('window').width);
  const screenHeight = Math.round(Dimensions.get('window').height);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const [dateClick, setdateClick] = useState('');
  const [dateStart, setdateStart] = useState('DD MMM YYYY');
  const [dateEnd, setdateEnd] = useState('DD MMM YYYY');

  const showDatePicker = (num) => {
    setdateClick(num);
    setDatePickerVisibility(!isDatePickerVisible);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(!isDatePickerVisible);
  };

  const handleConfirm = (pickeddate) => {
    let currentDate = pickeddate;
    let setCurrentdate = moment(currentDate).format('DD MMM YYYY');

    if (dateClick === 1) {
      setdateStart(setCurrentdate);
    } else {
      setdateEnd(setCurrentdate);
    }
    setDatePickerVisibility(!isDatePickerVisible);
  };

  const [dateRangeList] = useState([
    {id: '1', name: 'Today'},
    {id: '2', name: 'Last 7 Days'},
    {id: '3', name: 'Last 30 Days'},
    {id: '4', name: 'Last 180 Days'},
    {id: '5', name: 'Custom Date Range'},
  ]);

  const [getDateid, setDateid] = useState('1');

  const selectedDateID = (id) => {
    console.log(id);
    setDateid(id);

    '5' === id ? refRBSheetDate.current.open() : '';
    '5' === id ? refRBSheetSort.current.close() : '';
  };

  const [filterList] = useState([
    {id: '1', name: 'Payment'},
    {id: '2', name: 'Top Up'},
    {id: '3', name: 'Oldest to Most Recent'},
    {id: '4', name: 'Most Recent to Oldest'},
  ]);

  const [getFilterid, setFilterid] = useState('1');

  const selectedFilterID = (id) => {
    console.log(id);
    setFilterid(id);
  };

  return (
    <View style={styles.mainContainer}>
      <Animatable.View animation="fadeInDown" style={{flex: 1}}>
        <StatusBar backgroundColor={COLORS.black_100}></StatusBar>
        <View style={{backgroundColor: COLORS.white, elevation: 2}}>
          <View style={{height: 50, flexDirection: 'row', elevation: 1}}>
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
                Payment History
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
            }}>
            JANUARY 2021
          </Text>

          <View style={{backgroundColor: COLORS.white, marginTop: 10}}>
            <View
              style={{
                backgroundColor: COLORS.white,
                padding: 10,
                marginTop: 10,
              }}>
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
                  fontFamily: 'Poppins-Regular',
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
              style={{
                backgroundColor: COLORS.white,
                padding: 10,
                marginTop: 10,
              }}>
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
            <Text style={{fontSize: 15, fontWeight: 'bold', marginTop: 10}}>
              Date Range
            </Text>

            <View style={{justifyContent: 'space-between', marginTop: 10}}>
              <FlatList
                showsVerticalScrollIndicator={false}
                data={dateRangeList}
                renderItem={({item}) => (
                  <TouchableOpacity
                    onPress={() => selectedDateID(item.id)}
                    style={[
                      getDateid === item.id
                        ? {backgroundColor: COLORS.black_100}
                        : {backgroundColor: COLORS.white},
                      {width: '100%', borderRadius: 5},
                    ]}>
                    <Text
                      style={[
                        getDateid === item.id
                          ? {color: COLORS.white}
                          : {color: COLORS.black},
                        {padding: 10, fontSize: 12},
                      ]}>
                      {item.name}
                    </Text>
                  </TouchableOpacity>

                  // onPress={() => refRBSheetSort.current.close()}
                )}
              />
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
              <FlatList
                showsVerticalScrollIndicator={false}
                data={filterList}
                renderItem={({item}) => (
                  <TouchableOpacity
                    onPress={() => selectedFilterID(item.id)}
                    style={[
                      getFilterid === item.id
                        ? {backgroundColor: COLORS.black_100}
                        : {backgroundColor: COLORS.white},
                      {width: '100%', borderRadius: 5},
                    ]}>
                    <Text
                      style={[
                        getFilterid === item.id
                          ? {color: COLORS.white}
                          : {color: COLORS.black},
                        {padding: 10, fontSize: 12},
                      ]}>
                      {item.name}
                    </Text>
                  </TouchableOpacity>
                  // onPress={() => refRBSheetSort.current.close()}
                )}
              />
            </View>
          </View>
        </RBSheet>

        {/* //date_picker// */}
        <RBSheet
          ref={refRBSheetDate}
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
              style={{fontSize: 15, fontFamily: 'Poppins-Bold', marginTop: 10}}>
              Custom Date Range
            </Text>

            <Text
              style={{
                fontSize: 12,
                fontFamily: 'Poppins-Regular',
                marginTop: 10,
              }}>
              Start Date
            </Text>

            <TouchableOpacity onPress={() => showDatePicker(1)}>
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: 'Poppins-Regular',
                  marginTop: 10,
                  backgroundColor: COLORS.white,
                  padding: 10,
                  elevation: 3,
                  color: COLORS.black,
                  borderRadius: 5,
                }}>
                {dateStart}
              </Text>
            </TouchableOpacity>

            <Text
              style={{
                fontSize: 12,
                fontFamily: 'Poppins-Regular',
                marginTop: 10,
              }}>
              End Date
            </Text>

            <TouchableOpacity onPress={() => showDatePicker(2)}>
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: 'Poppins-Regular',
                  marginTop: 10,
                  backgroundColor: COLORS.white,
                  padding: 10,
                  elevation: 3,
                  color: COLORS.black,
                  borderRadius: 5,
                }}>
                {dateEnd}
              </Text>
            </TouchableOpacity>
          </View>
        </RBSheet>
      </Animatable.View>

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
};

export default PaymentHistory;
