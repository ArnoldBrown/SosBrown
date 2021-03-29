import React, {useState} from 'react';
import {
  View,
  ImageBackground,
  Dimensions,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  StatusBar,
} from 'react-native';
import {COLORS} from '../../utils/colors';
import {styles} from '../../utils/styles';
import * as Animatable from 'react-native-animatable';
import SnackBar from 'react-native-snackbar-component';
import {APILINKS} from '../../utils/apilinks';
import ActivityLoader from '../Loader/ActivityLoader';
import {useSelector, useDispatch} from 'react-redux';
import {setUseraction} from '../../redux/actions/loginActions';
//import { forFadeFromBottomAndroid } from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/CardStyleInterpolators';

const UserName = ({navigation, route}) => {
  const screenHeight = Math.round(Dimensions.get('window').height);
  const screenWidth = Math.round(Dimensions.get('window').width);
  const [getName, setName] = useState('');
  const [snackIsVisible, setSnackVisiblity] = useState(false);
  const [getSnackMsg, setSnackMsg] = useState('Enter UserName');
  const [modalVisible, setModalVisible] = useState(false);

  const dispatch = useDispatch(); /// ======>>>Redux Hook <<<=====//

  const ff = useSelector((state) => state.loginDetails);
  const {extractName} = ff;

  /check_username/;

  const updateUserName = (token) => {
    if (getName.length > 0) {
      setModalVisible(true);
      callupdateUserName(token, getName);
    } else {
      setSnackMsg('Enter UserName');
      setSnackVisiblity(true);
    }
  };

  /update username/;
  const callupdateUserName = async (token, getName) => {
    await dispatch(setUseraction(token, getName)).then(() => {
      setModalVisible(false);
    });
  };

  return (
    <View style={[styles.mainContainer, {backgroundColor: COLORS.bg_white}]}>
      {snackIsVisible ? (
        <SnackBar
          visible={snackIsVisible}
          textMessage={getSnackMsg}
          actionHandler={() => {
            console.log('snackbar button clicked!');
          }}
          backgroundColor={COLORS.red}
          position="top"
          actionHandler={() => setSnackVisiblity(false)}
          actionText="OK"
        />
      ) : null}
      <Animatable.View animation="fadeInDown" style={{flex: 1}}>
        <StatusBar backgroundColor={COLORS.black_100}></StatusBar>
        <ScrollView
          contentContainerStyle={{flexGrow: 1}}
          showsVerticalScrollIndicator={false}>
          <View style={{flex: 0.95}}>
            <ImageBackground
              style={{height: 200, width: screenWidth}}
              imageStyle={{
                borderBottomRightRadius: 25,
                borderBottomLeftRadius: 25,
              }}
              source={require('../../Images/bg.png')}>
              <TouchableOpacity
                onPress={() => {
                  navigation.goBack();
                }}>
                <View style={[styles.backBtn]}>
                  <Image
                    style={{height: 15, width: 15}}
                    source={require('../../Images/back.png')}
                  />
                </View>
              </TouchableOpacity>
            </ImageBackground>

            <View>
              <View
                style={{
                  position: 'absolute',
                  alignItems: 'center',
                  top: -50,
                  width: '100%',
                }}>
                <Image
                  style={{
                    width: 100,
                    height: 100,
                    alignSelf: 'center',
                    resizeMode: 'contain',
                  }}
                  source={require('../../Images/app_logo_large_x.png')}
                />
              </View>

              <Text
                style={{
                  fontSize: 20,
                  color: COLORS.black,
                  textAlign: 'center',
                  marginTop: 80,
                  fontFamily: 'Poppins-Regular',
                }}>
                How should we address you?
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  color: COLORS.grey,
                  textAlign: 'center',
                  marginTop: 10,
                  fontFamily: 'Poppins-Regular',
                }}>
                Enter your display name.
              </Text>

              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 50,
                  marginLeft: 20,
                  marginRight: 20,
                }}>
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
                      color: COLORS.black,
                      padding: 10,
                      fontFamily: 'Poppins-Regular',
                    }}
                    placeholder="E.g. Jimmy Lim"
                    underlineColorAndroid="#fff"
                    placeholderTextColor="#000"
                    onChangeText={(text) => setName(text)}
                  />
                </View>
              </View>
            </View>
          </View>

          <View style={{flex: 0.05, justifyContent: 'flex-end'}}>
            <View
              style={{
                backgroundColor: COLORS.grey,
                height: 1,
                marginBottom: 10,
              }}></View>

            <TouchableOpacity
              onPress={() => updateUserName(route.params.apitoken)}
              style={{
                width: '90%',
                backgroundColor: COLORS.black_100,
                alignSelf: 'center',
                borderRadius: 5,
                marginBottom: 5,
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 15,
                  color: COLORS.white,
                  padding: 10,
                  fontFamily: 'Poppins-Regular',
                }}>
                CONTINUE
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <View>{modalVisible ? <ActivityLoader /> : null}</View>
      </Animatable.View>
    </View>
  );
};
export default UserName;
