import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Image,
  Text,
  FlatList,
  TouchableOpacity,
  Dimensions,
  StatusBar,
} from 'react-native';
import {styles} from '../../../utils/styles';
import {COLORS} from '../../../utils/colors';
import {APILINKS} from '../../../utils/apilinks';
import RBSheet from 'react-native-raw-bottom-sheet';
import ActivityLoader from '../../Loader/ActivityLoader';
import {useSelector} from 'react-redux';

const VoucherActive = ({navigation}) => {
  const refRBSheet = useRef();
  const screenHeight = Math.round(Dimensions.get('window').height);
  const screenWidth = Math.round(Dimensions.get('window').width);
  const [getVoucher, setVoucher] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  /get_value_from_redux/;
  const getToken = useSelector((state) => state.loginDetails);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setModalVisible(true);
      var form = new FormData();
      form.append('api_token', getToken.msg.token);

      fetch(APILINKS.BASE_URL + APILINKS.VOUCHER_URL, {
        method: 'POST',
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data',
        }),
        body: form,
      })
        .then((response) => response.json())
        .then((data) => {
          setVoucher(data.data);
          setTimeout(() => {
            setModalVisible(false);
          }, 200);
        });
    });

    return () => {
      unsubscribe;
    };
  }, []);

  const [vouchersList] = useState([
    {
      id: '1',
      img: require('../../../Images/item_one.png'),
      name: 'Nike',
      desc: 'RM100 off purchases on 2020 Air Max Series',
      color: '#6A6867',
      date: 'Valid until 31 Dec 2020',
    },
    {
      id: '2',
      img: require('../../../Images/item_two.png'),
      name: 'Adidas',
      desc: 'RM5 off purchases on 2020',
      color: '#596A55',
      date: 'Valid until 1 Jan 2021',
    },
    {
      id: '3',
      img: require('../../../Images/item_three.png'),
      name: 'Reebok',
      desc: 'RM15 off purchases on 2020 CR7 Model',
      color: '#596A55',
      date: 'Valid until 15 Jan 2021',
    },
  ]);

  return (
    <View style={[styles.mainContainer, {backgroundColor: COLORS.grey_300}]}>
      <StatusBar backgroundColor={COLORS.black_100}></StatusBar>
      <View style={{flex: 0.85, margin: 10, paddingBottom:40}}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          numColumns={1}
          data={getVoucher}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item, index}) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('VoucherDetail', {
                  name: item.title,
                  photo: item.photo,
                  voucherId: item.id,
                });
              }}>
              <View style={styles.listBoxReward}>
                <Image
                  style={{
                    width: 100,
                    height: 100,
                    borderTopLeftRadius: 10,
                    borderBottomLeftRadius: 10,
                  }}
                  source={{uri: `${APILINKS.IMG_URL}${item.photo}`}}
                />

                <View
                  style={{
                    flex: 1,
                    backgroundColor: COLORS.black_100,
                    borderBottomRightRadius: 10,
                    borderTopRightRadius: 10,
                  }}>
                  <View style={{flex: 1, margin: 10}}>
                    <Text
                      numberOfLines={1}
                      ellipsizeMode="tail"
                      style={{
                        flex: 0.2,
                        fontSize: 10,
                        width: 200,
                        color: '#B6B4B4',
                        marginTop: 5,
                      }}>
                      {item.title}
                    </Text>

                    <Text
                      numberOfLines={2}
                      ellipsizeMode="tail"
                      style={{
                        flex: 0.6,
                        fontSize: 12,
                        fontWeight: 'bold',
                        width: 200,
                        color: COLORS.white,
                      }}>
                      {item.description.replace(/<\/?[^>]+(>|$)/g, '')}
                    </Text>
                    <View
                      style={{
                        flex: 0.2,
                        marginTop: 5,
                        justifyContent: 'flex-end',
                      }}>
                      <Text
                        style={{
                          fontSize: 10,
                          color: COLORS.grey_100,
                          textAlignVertical: 'bottom',
                        }}>
                        {item.addDate}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>

     

      <TouchableOpacity
        onPress={() => refRBSheet.current.open()}
        style={{
          flex: 0.15,
          justifyContent: 'flex-end',
          backgroundColor: COLORS.white,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          elevation: 5,
        }}>
        <View
          style={{
            width: '80%',
            backgroundColor: COLORS.white,
            flexDirection: 'row',
            padding: 10,
            borderRadius: 5,
          }}>
          <View style={{width: 50, height: 50, marginLeft: 10}}>
            <Image
              style={{
                width: '100%',
                height: '100%',
                alignSelf: 'center',
                resizeMode: 'cover',
                borderRadius: 10,
              }}
              source={require('../../../Images/item_two.png')}
            />
          </View>

          <View style={{alignSelf: 'center', width: '100%', marginLeft: 10}}>
            <Text
              numberOfLines={1}
              style={{
                color: COLORS.black_100,
                fontSize: 15,
                fontFamily: 'Poppins-Regular',
              }}>
              Activated Vouchers
            </Text>
          </View>
        </View>
      </TouchableOpacity>

      <RBSheet
        ref={refRBSheet}
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
        <View>
          <Text
            style={{
              marginLeft: 20,
              fontSize: 15,
              fontWeight: 'bold',
              marginBottom: 10,
            }}>
            Activated Vouchers
          </Text>

          <FlatList
            contentContainerStyle={{
              alignSelf: 'center',
              marginLeft: 20,
              marginRight: 10,
              marginBottom: 10,
              marginTop: 10,
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={getVoucher}
            renderItem={({item}) => (
              <TouchableOpacity
                style={{
                  height: 200,
                  width: 150,
                  backgroundColor: COLORS.grey_line,
                  borderRadius: 10,
                  marginRight: 25,
                }}>
                <View style={{height: 150, width: 150}}>
                  <Image
                    style={{
                      height: '100%',
                      width: '100%',
                      borderTopLeftRadius: 10,
                      borderTopRightRadius: 10,
                    }}
                    source={{uri: `${APILINKS.IMG_URL}${item.photo}`}}
                  />
                </View>
                <View
                  style={{
                    height: 50,
                    backgroundColor: COLORS.black_100,
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                  }}>
                  <View style={{margin: 10}}>
                    <View style={{height: screenHeight / 12}}>
                      <Text style={{fontSize: 12, color: COLORS.white}}>
                        {item.description.replace(/<\/?[^>]+(>|$)/g, '')}
                      </Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </RBSheet>

      <View>{modalVisible ? <ActivityLoader /> : null}</View>
    </View>
  );
};

export default VoucherActive;
