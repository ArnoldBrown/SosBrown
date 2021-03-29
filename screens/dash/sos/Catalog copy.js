import React, {useState, useEffect} from 'react';
import {
  View,
  ScrollView,
  Image,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  StatusBar,
  ActivityIndicator,
  Modal,
  Dimensions,
} from 'react-native';
import {styles} from '../../../utils/styles';
import {COLORS} from '../../../utils/colors';
import {APILINKS} from '../../../utils/apilinks';
import {useSelector} from 'react-redux';

import CatalogProductList from '../sos/CatalogProductList';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();

const Catalog = ({navigation}) => {
  const screenWidth = Math.round(Dimensions.get('window').width);
  const screenHeight = Math.round(Dimensions.get('window').height);
  /get_value_from_redux/;
  const getToken = useSelector((state) => state.loginDetails);
  const [getCategory, setCategory] = useState([]);
  const [getProduct, setProduct] = useState([]);
  const [getProductArray, setProductArray] = useState([]);
  let productArray = [];
  const [getid, setid] = useState('1');
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    setModalVisible(true);
    var form = new FormData();
    form.append('api_token', getToken.msg.token);

    fetch(APILINKS.BASE_URL + APILINKS.GET_CATEGORY_URL, {
      method: 'POST',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
      }),
      body: form,
    })
      .then((response) => response.json())
      .then((data) => {
        setCategory(data.data);
        setid(data.data[0].id);
        callGetProduct(getid, getToken.msg.token);
      });
  }, []);

  const callGetProduct = (catId, tokenn) => {
    setModalVisible(true);
    try {
      var form = new FormData();
      form.append('api_token', tokenn);
      form.append('cateid', catId);
      fetch(APILINKS.BASE_URL + APILINKS.GET_PRODUCT_URL, {
        method: 'POST',
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data',
        }),
        body: form,
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.statuscode === '1') {
            setProduct(data.data);
            createProductArray(data.data);
          }
        });
    } catch (error) {}
  };

  const createProductArray = (data) => {
    productArray = [];
    data.forEach((element) => {
      element.product.forEach((element2) => {
        productArray.push(element2);
      });
    });
    console.log('ppppp', productArray);
    setModalVisible(false);
  };

  const [catList] = useState([
    {
      id: '1',
      img: require('../../../Images/cat_item_one.png'),
      name: 'Run',
      color: COLORS.black_100,
      bgColor: COLORS.white,
    },
    {
      id: '2',
      img: require('../../../Images/cat_item_two.png'),
      name: 'Lifestyle',
      color: COLORS.black_100,
      bgColor: COLORS.white,
    },
    {
      id: '3',
      img: require('../../../Images/cat_item_three.png'),
      name: 'Sports',
      color: COLORS.yellow,
      bgColor: COLORS.black_100,
    },
    {
      id: '4',
      img: require('../../../Images/cat_item_four.png'),
      name: 'Business',
      color: COLORS.black_100,
      bgColor: COLORS.white,
    },
    {
      id: '5',
      img: require('../../../Images/cat_item_five.png'),
      name: 'School',
      color: COLORS.black_100,
      bgColor: COLORS.white,
    },
  ]);

  return (
    <View style={[styles.mainContainer, {backgroundColor: COLORS.white}]}>
      <StatusBar backgroundColor={COLORS.black_100}></StatusBar>
      <View style={{elevation: 1, backgroundColor: COLORS.white, flex: 1}}>
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
            style={{alignSelf: 'center'}}>
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
          </TouchableOpacity>

          <Text
            style={{
              marginLeft: 10,
              fontFamily: 'Poppins-Bold',
              alignSelf: 'center',
              fontSize: 15,
            }}>
            Catalog
          </Text>
        </View>

        <View
          style={{
            backgroundColor: COLORS.grey_300,
            borderRadius: 30,
            elevation: 1,
            height: 40,
            marginBottom: 20,
            marginLeft: 10,
            marginRight: 10,
          }}>
          <TextInput
            style={{color: COLORS.black, padding: 10}}
            placeholder="Search Products"
            underlineColorAndroid={COLORS.grey_300}
            placeholderTextColor={COLORS.grey_100}
          />
        </View>

        <View>
          <FlatList
            contentContainerStyle={{alignSelf: 'center'}}
            horizontal
            showsHorizontalScrollIndicator={false}
            //  keyExtractor={(item) => item.id.toString()}
            keyExtractor={(item) => item.id}
            data={getCategory}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() => [
                  setid(item.id),
                  callGetProduct(item.id, getToken.msg.token),
                ]}>
                <View
                  style={[
                    getid === item.id
                      ? styles.catalogCatActive
                      : styles.catalogCatInActive,
                    styles.catalogCatCommon,
                  ]}>
                  {/* <Image style={[getid === item.id ? { tintColor: COLORS.yellow } : { tintColor: COLORS.black }, { width: 30, height: 30, alignSelf: 'center', resizeMode: 'contain' }]}
                                        source={{ uri: `${APILINKS.IMG_URL}${item.image}` }} /> */}

                  <Image
                    style={{
                      width: 30,
                      height: 30,
                      alignSelf: 'center',
                      resizeMode: 'contain',
                    }}
                    source={{uri: `${APILINKS.IMG_URL}${item.image}`}}
                  />

                  <Text
                    style={[
                      getid === item.id
                        ? {color: COLORS.yellow}
                        : {color: COLORS.black},
                      {
                        fontSize: 10,
                        fontFamily: 'Poppins-BOld',
                        marginTop: 5,
                        textAlign: 'center',
                      },
                    ]}>
                    {item.name}
                  </Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>

        <View style={{flexDirection: 'column'}}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id.toString()}
            data={getCategory}
            renderItem={({item}) => (
              <TouchableOpacity onPress={() => setid(item.id)}>
                <View>
                  <Text
                    style={[
                      getid === item.id
                        ? {color: COLORS.black_100}
                        : {color: COLORS.grey},
                      {
                        padding: 10,
                        fontSize: 12,
                        fontFamily: 'Poppins-SemiBold',
                        marginTop: 5,
                        textAlign: 'center',
                      },
                    ]}>
                    {item.name}
                  </Text>

                  <View
                    style={[
                      getid === item.id
                        ? {backgroundColor: COLORS.black_100}
                        : {backgroundColor: COLORS.white},
                      {
                        height: 3,
                        marginTop: 2,
                        marginLeft: 10,
                        marginRight: 10,
                      },
                    ]}
                  />
                </View>
              </TouchableOpacity>
            )}
          />

          <View
            style={{
              height: 1,
              elevation: 1,
              backgroundColor: COLORS.grey_line,
              marginTop: 0.5,
            }}
          />
        </View>
        <View style={{marginTop: 20, width: '100%'}}></View>

        <FlatList
          contentContainerStyle={{alignSelf: 'center'}}
          showsVerticalScrollIndicator={false}
          horizontal={false}
          data={productArray}
          numColumns={2}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          renderItem={({item, index}) => (
            <View key={item.id}>
              <View style={{padding: 10}}>
                <Text>{item.productName}</Text>
              </View>
            </View>

            // <View key={item.id} style={{backgroundColor: COLORS.white}}>
            //   {item.image.map((im, k) => (
            //     <TouchableOpacity
            //       onPress={() => {
            //         navigation.navigate('CatProdDetail', {
            //           prodname: item.productName,
            //           catname: item.subcateName,
            //           price: item.sellingPrice,

            //         });
            //       }}
            //       style={{
            //         height: 220,
            //         width: screenWidth / 2.3,
            //         backgroundColor: COLORS.white,
            //         borderRadius: 15,
            //         margin: 5,
            //         elevation: 3,
            //       }}>
            //       <View key={im.id}>
            //         <View
            //           style={{
            //             height: 120,
            //             width: 100,
            //             alignSelf: 'center',
            //             justifyContent: 'center',
            //           }}>
            //           <Image
            //             style={{
            //               height: '100%',
            //               width: '100%',
            //               resizeMode: 'contain',
            //             }}
            //             source={{uri: `${APILINKS.IMG_URL}${im.image}`}}
            //           />
            //         </View>
            //         <View style={{margin: 10}}>
            //           <Text
            //             numberOfLines={3}
            //             style={{
            //               fontSize: 11,
            //               color: COLORS.black_100,
            //               fontFamily: 'Poppins-SemiBold',
            //             }}>
            //             {item.productName}
            //           </Text>
            //           <Text
            //             style={{
            //               fontSize: 10,
            //               color: COLORS.grey,
            //               fontFamily: 'Poppins-Medium',
            //             }}>
            //             {item.subcateName}
            //           </Text>
            //           <Text
            //             style={{
            //               fontSize: 12,
            //               color: COLORS.black_100,
            //               fontFamily: 'Poppins-SemiBold',
            //             }}>
            //             RM {item.sellingPrice}
            //           </Text>
            //         </View>
            //       </View>
            //     </TouchableOpacity>
            //   ))}
            // </View>

            // <View>
            //   {item.map((v, i) => (
            //     <View key={v.id} style={{backgroundColor: COLORS.white}}>
            //       {v.image.map((im, k) => (
            //         <TouchableOpacity
            //           onPress={() => {
            //             navigation.navigate('CatProdDetail', {
            //               prodname: v.productName,
            //               catname: v.subcateName,
            //               price: v.sellingPrice,
            //               img: im.image,
            //             });
            //           }}
            //           style={{
            //             height: 220,
            //             width: screenWidth / 2.3,
            //             backgroundColor: COLORS.white,
            //             borderRadius: 15,
            //             margin: 5,
            //             elevation: 3,
            //           }}>
            //           <View key={im.id}>
            //             <View
            //               style={{
            //                 height: 120,
            //                 width: 100,
            //                 alignSelf: 'center',
            //                 justifyContent: 'center',
            //               }}>
            //               <Image
            //                 style={{
            //                   height: '100%',
            //                   width: '100%',
            //                   resizeMode: 'contain',
            //                 }}
            //                 source={{uri: `${APILINKS.IMG_URL}${im.image}`}}
            //               />
            //             </View>
            //             <View style={{margin: 10}}>
            //               <Text
            //                 numberOfLines={3}
            //                 style={{
            //                   fontSize: 11,
            //                   color: COLORS.black_100,
            //                   fontFamily: 'Poppins-SemiBold',
            //                 }}>
            //                 {v.productName}
            //               </Text>
            //               <Text
            //                 style={{
            //                   fontSize: 10,
            //                   color: COLORS.grey,
            //                   fontFamily: 'Poppins-Medium',
            //                 }}>
            //                 {v.subcateName}
            //               </Text>
            //               <Text
            //                 style={{
            //                   fontSize: 12,
            //                   color: COLORS.black_100,
            //                   fontFamily: 'Poppins-SemiBold',
            //                 }}>
            //                 RM {v.sellingPrice}
            //               </Text>
            //             </View>
            //           </View>
            //         </TouchableOpacity>
            //       ))}
            //     </View>
            //   ))}
            // </View>
          )}
        />

        {/* <ScrollView
          contentContainerStyle={{flexDirection: 'row', flexWrap: 'wrap'}}>
          <View>
            {getProduct.map((e) => {
              return (
                <View>
                  {e.product.map((eee) => {
                    return (
                      <TouchableOpacity
                        onPress={() => {
                          navigation.navigate('CatProdDetail', {
                            prodname: eee.productName,
                            catname: eee.subcateName,
                            price: eee.sellingPrice,
                          });
                        }}
                        style={{
                          height: 220,
                          width: screenWidth / 2.3,
                          backgroundColor: COLORS.white,
                          borderRadius: 15,
                          margin: 5,
                          elevation: 3,
                        }}>
                        <View>
                          <View
                            style={{
                              height: 120,
                              justifyContent: 'center',
                              alignItems: 'center',
                            }}>
                            {eee.image.map((ee) => {
                              return (
                                <Image
                                  source={{
                                    uri: `${APILINKS.IMG_URL}${ee.image}`,
                                  }}
                                  style={{width: '100%', height: 100}}
                                  resizeMode="contain"
                                />
                              );
                            })}
                          </View>
                          <View style={{flex: 1}}>
                            <View style={{flex: 1, margin: 10}}>
                              <Text
                                numberOfLines={2}
                                style={{
                                  fontSize: 12,
                                  color: COLORS.black_100,
                                  fontFamily: 'Poppins-SemiBold',
                                }}>
                                {eee.productName}
                              </Text>
                              <Text
                                style={{
                                  fontSize: 12,
                                  color: COLORS.grey,
                                  fontFamily: 'Poppins-Medium',
                                }}>
                                {eee.subcateName}
                              </Text>

                              <Text>RM{eee.sellingPrice}</Text>
                            </View>
                          </View>
                        </View>
                      </TouchableOpacity>
                    );
                  })}
                </View>
              );
            })}
          </View>
        </ScrollView> */}

        {/* <ScrollView
          contentContainerStyle={{flexDirection: 'row', flexWrap: 'wrap'}}
          style={{marginTop: 20}}>
          {getProduct.map((e) => {
            return (
              <View key={e.id}>
                {e.product.map((be) => {
                  return (
                    <View>
                      {be.image.map((img) => {
                        return (
                          <TouchableOpacity
                            onPress={() => {
                              navigation.navigate('CatProdDetail');
                            }}
                            style={{
                              height: 220,
                              width: screenWidth / 2.3,
                              backgroundColor: COLORS.white,
                              borderRadius: 15,
                              margin: 5,
                              elevation: 3,
                            }}>
                            <View
                              style={{
                                margin: 10,
                              }}>
                              <View
                                style={{
                                  height: 120,
                                  width: 100,
                                  justifyContent: 'center',
                                  alignSelf: 'center',
                                }}>
                                <Image
                                  style={{
                                    height: '100%',
                                    width: '100%',
                                    resizeMode: 'contain',
                                  }}
                                  source={{
                                    uri: `${APILINKS.IMG_URL}${img.image}`,
                                  }}
                                />
                              </View>

                              <View style={{margin: 1}}>
                                <Text
                                  numberOfLines={2}
                                  style={{
                                    fontSize: 12,
                                    color: COLORS.black_100,
                                    fontFamily: 'Poppins-SemiBold',
                                  }}>
                                  {be.productName}
                                </Text>
                                <Text
                                  style={{
                                    fontSize: 12,
                                    color: COLORS.grey,
                                    fontFamily: 'Poppins-Medium',
                                  }}>
                                  {be.subcateName}
                                </Text>
                                <Text
                                  style={{
                                    fontSize: 12,
                                    color: COLORS.black_100,
                                    fontFamily: 'Poppins-SemiBold',
                                  }}>
                                  {be.sellingPrice}
                                </Text>
                              </View>
                            </View>
                          </TouchableOpacity>
                        );
                      })}
                    </View>
                  );
                })}
              </View>
            );
          })}
        </ScrollView> */}

        <Modal transparent={true} visible={modalVisible}>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <View
              style={{
                backgroundColor: 'rgba(52, 52, 52, 0.8)',
                width: 100,
                height: 100,
                borderRadius: 20,
                justifyContent: 'center',
              }}>
              <ActivityIndicator size="large" color={COLORS.yellow} />
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
};

export default Catalog;
