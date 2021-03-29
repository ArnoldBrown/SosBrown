import React, {useState, useEffect} from 'react';
import {
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import {styles} from '../../utils/styles';
import {COLORS} from '../../utils/colors';
import * as Animatable from 'react-native-animatable';

import {APILINKS} from '../../utils/apilinks';
import ActivityLoader from '../Loader/ActivityLoader';

const OutletsMain = ({navigation}) => {
  const [getOutlets, setOutlets] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

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
        setModalVisible(false);
      });
  }, []);

  const [outletsList] = useState([
    {
      id: '1',
      img: require('../../Images/outlet_one.png'),
      pax: '4 Pax',
      desc: 'SOS Bolevard Kuching',
      address:
        'Lot F-1-2, 1st FLoor, Boulevard Shopping Mall, Jalan Datuk Tawi Sli, 93250, Kuching Sarawak ',
    },
    {
      id: '2',
      img: require('../../Images/outlet_one.png'),
      pax: '4 Pax',
      desc: 'SOS Bolevard Kuching',
      address:
        'Lot F-1-2, 1st FLoor, Boulevard Shopping Mall, Jalan Datuk Tawi Sli, 93250, Kuching Sarawak ',
    },
    {
      id: '3',
      img: require('../../Images/outlet_one.png'),
      pax: '4 Pax',
      desc: 'SOS Bolevard Kuching',
      address:
        'Lot F-1-2, 1st FLoor, Boulevard Shopping Mall, Jalan Datuk Tawi Sli, 93250, Kuching Sarawak ',
    },
    {
      id: '4',
      img: require('../../Images/outlet_one.png'),
      pax: '4 Pax',
      desc: 'SOS Bolevard Kuching',
      address:
        'Lot F-1-2, 1st FLoor, Boulevard Shopping Mall, Jalan Datuk Tawi Sli, 93250, Kuching Sarawak ',
    },
    {
      id: '5',
      img: require('../../Images/outlet_one.png'),
      pax: '4 Pax',
      desc: 'SOS Bolevard Kuching',
      address:
        'Lot F-1-2, 1st FLoor, Boulevard Shopping Mall, Jalan Datuk Tawi Sli, 93250, Kuching Sarawak ',
    },
  ]);

  return (
    <View style={styles.mainContainer}>
      <Animatable.View animation="fadeInDown" style={{flex: 1}}>
        <StatusBar backgroundColor={COLORS.black_100}></StatusBar>
        <View style={{elevation: 3, backgroundColor: COLORS.white}}>
          <View
            style={{
              backgroundColor: COLORS.white,
              height: 50,
              flexDirection: 'row',
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
                Outlets
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.input}>
            <TextInput
              style={{marginLeft: 10}}
              placeholder="Search Outlets"
              underlineColorAndroid={COLORS.grey_300}
              placeholderTextColor={COLORS.grey_100}
            />
          </View>
        </View>

        <SafeAreaView style={[styles.commonWrapper,{flex: 1, flexDirection: 'column'}]}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            numColumns={1}
            data={getOutlets}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item, index}) => (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('OutletsDetail', {
                    image: item.out_image,
                    name: item.outlet_name,
                    phone: item.phone,
                    email: item.email,
                    address: item.address,
                    latlog: item.coordinates,
                    workhour: item.work_hour,
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
                      <Text
                        numberOfLines={3}
                        style={{
                          color: COLORS.grey,
                          fontFamily: 'Poppins-Medium',
                          fontSize: 10,
                          marginTop: 5,
                        }}>
                        {item.address}
                      </Text>
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
      </Animatable.View>
    </View>
  );
};

export default OutletsMain;
