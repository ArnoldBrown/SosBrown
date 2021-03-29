import React, {useState} from 'react';
import {
  View,
  Image,
  Text,
  TextInput,
  Switch,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import Toast from 'react-native-simple-toast';

import {COLORS} from '../../../utils/colors';
import {styles} from '../../../utils/styles';
import {APILINKS} from '../../../utils/apilinks';
import {useDispatch, useSelector} from 'react-redux';
import ActivityLoader from '../../Loader/ActivityLoader';

const EditProfile = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const [isEnabledFb, setIsEnabledFb] = useState(false);
  const toggleSwitchFb = () =>
    setIsEnabledFb((previousStateFb) => !previousStateFb);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  /get_value_from_redux/;
  const getToken = useSelector((state) => state.loginDetails);

  const [getName, setName] = useState('');
  const [getEmail, setEmail] = useState('');

  /check input validation/;
  const callUpdateProfile = () => {
    if (getName.length > 0) {
      if (getEmail.length > 0) {
        setModalVisible(true);
        callUpdateProfileApi();
      } else {
        Toast.showWithGravity('Enter valid Email', Toast.LONG, Toast.TOP);
      }
    } else {
      Toast.showWithGravity('Enter Name', Toast.LONG, Toast.TOP);
    }
  };
  /call_update_profile/;
  const callUpdateProfileApi = () => {
    try {
      var form = new FormData();
      form.append('api_token', getToken.msg.token);
      form.append('name', getName);
      form.append('email', getEmail);
      form.append('referral_code', '');

      fetch(APILINKS.BASE_URL + APILINKS.UPDATE_PROFILE_URL, {
        method: 'POST',
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data',
        }),
        body: form,
      })
        .then((response) => response.json())
        .then((data) => {
          setModalVisible(false);

          if (data.statuscode === '1') {
            Toast.showWithGravity(data.msg, Toast.LONG, Toast.TOP);
          } else {
            Toast.showWithGravity(data.data, Toast.LONG, Toast.TOP);
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

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
            source={require('../../../Images/back_black.png')}
          />
          <Text
            style={{
              marginLeft: 10,
              fontFamily: 'Poppins-Bold',
              alignSelf: 'center',
              fontSize: 15,
            }}>
            Edit Profile
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={{margin: 20}}>
          <Text
            style={{
              fontSize: 12,
              color: COLORS.black_100,
              marginTop: 10,
              fontFamily: 'Poppins-Regular',
            }}>
            Display Name
          </Text>

          <View style={{flexDirection: 'row', marginTop: 10}}>
            <View
              style={{
                flex: 1,
                backgroundColor: COLORS.white,
                borderRadius: 5,
                elevation: 1,
                height: 50,
              }}>
              <TextInput
                style={{
                  flex: 1,
                  color: COLORS.black,
                  padding: 10,
                  fontFamily: 'Poppins-Regular',
                }}
                placeholder="Enter name"
                underlineColorAndroid="#fff"
                placeholderTextColor={COLORS.grey_line}
                // value = {getToken.msg.name}
                onChangeText={(text) => setName(text)}
              />
            </View>
          </View>

          <Text
            style={{
              fontSize: 12,
              color: COLORS.black_100,
              marginTop: 20,
              fontFamily: 'Poppins-Regular',
            }}>
            Mobile Number
          </Text>

          <View style={{flexDirection: 'row', marginTop: 10}}>
            <View
              style={{
                flex: 1,
                backgroundColor: COLORS.white,
                borderRadius: 5,
                elevation: 1,
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
                elevation: 1,
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
                value={getToken.msg.phone}
              />
            </View>
          </View>

          <Text
            style={{
              fontSize: 12,
              color: COLORS.black_100,
              marginTop: 20,
              fontFamily: 'Poppins-Regular',
            }}>
            Email Address
          </Text>

          <View style={{flexDirection: 'row', marginTop: 10}}>
            <View
              style={{
                flex: 1,
                backgroundColor: COLORS.white,
                borderRadius: 5,
                elevation: 1,
                height: 50,
              }}>
              <TextInput
                style={{
                  flex: 1,
                  color: COLORS.black,
                  padding: 10,
                  fontFamily: 'Poppins-Regular',
                }}
                placeholder="Enter email"
                underlineColorAndroid="#fff"
                placeholderTextColor={COLORS.grey_line}
                value={getToken.msg.email}
                onChangeText={(text) => setEmail(text)}
              />
            </View>
          </View>

          <Text
            style={{
              fontSize: 12,
              color: COLORS.black_100,
              marginTop: 20,
              fontFamily: 'Poppins-Regular',
            }}>
            Date of Birth
          </Text>

          <View style={{flexDirection: 'row', marginTop: 10}}>
            <View
              style={{
                flex: 1,
                backgroundColor: COLORS.white,
                borderRadius: 5,
                elevation: 1,
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
                placeholder="DD"
                underlineColorAndroid="#fff"
                placeholderTextColor={COLORS.grey_line}
              />
            </View>
            <View
              style={{
                flex: 2,
                backgroundColor: COLORS.white,
                borderRadius: 5,
                elevation: 1,
                marginLeft: 2,
                marginRight: 2,
                height: 50,
              }}>
              <TextInput
                style={{
                  flex: 1,
                  color: COLORS.black,
                  padding: 10,
                  fontFamily: 'Poppins-Regular',
                }}
                placeholder="MM"
                underlineColorAndroid="#fff"
                placeholderTextColor={COLORS.grey_line}
              />
            </View>

            <View
              style={{
                flex: 1,
                backgroundColor: COLORS.white,
                borderRadius: 5,
                elevation: 1,
                marginLeft: 2,
                height: 50,
              }}>
              <TextInput
                style={{
                  flex: 1,
                  padding: 10,
                  textAlign: 'center',
                  fontFamily: 'Poppins-Regular',
                }}
                placeholder="YYYY"
                underlineColorAndroid="#fff"
                placeholderTextColor={COLORS.grey_line}
              />
            </View>
          </View>

          <Text
            style={{
              fontSize: 12,
              color: COLORS.black_100,
              marginTop: 20,
              fontFamily: 'Poppins-Regular',
            }}>
            Linked Accounts
          </Text>

          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              backgroundColor: COLORS.white,
              borderRadius: 5,
              elevation: 1,
              height: 50,
              marginTop: 10,
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{height: 30, width: 30, margin: 10, alignSelf: 'center'}}
                source={require('../../../Images/fb.png')}
              />
              <Text
                style={{
                  fontSize: 12,
                  color: COLORS.black_100,
                  alignSelf: 'center',
                  fontFamily: 'Poppins-Regular',
                }}>
                Facebook
              </Text>
            </View>

            <Switch
              style={{marginRight: 10}}
              trackColor={{false: COLORS.grey_line, true: COLORS.green}}
              thumbColor={isEnabledFb ? COLORS.white : COLORS.grey}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitchFb}
              value={isEnabledFb}
            />
          </View>

          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              backgroundColor: COLORS.white,
              borderRadius: 5,
              elevation: 1,
              height: 50,
              marginTop: 10,
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{height: 30, width: 30, margin: 10, alignSelf: 'center'}}
                source={require('../../../Images/google.png')}
              />
              <Text
                style={{
                  fontSize: 12,
                  color: COLORS.black_100,
                  alignSelf: 'center',
                  fontFamily: 'Poppins-Regular',
                }}>
                Google
              </Text>
            </View>

            <Switch
              style={{marginRight: 10}}
              trackColor={{false: COLORS.grey_line, true: COLORS.green}}
              thumbColor={isEnabled ? COLORS.white : COLORS.grey}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>

          <TouchableOpacity
            onPress={() => callUpdateProfile()}
            style={{
              width: '100%',
              backgroundColor: COLORS.black_100,
              alignSelf: 'center',
              borderRadius: 5,
              marginTop: 20,
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 12,
                color: COLORS.white,
                padding: 15,
                fontFamily: 'Poppins-Regular',
              }}>
              UPDATE
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View>{modalVisible ? <ActivityLoader /> : null}</View>
    </View>
  );
};

export default EditProfile;
