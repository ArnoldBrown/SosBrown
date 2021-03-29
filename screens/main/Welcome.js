import React, {useState, useEffect} from 'react';
import {
  View,
  ImageBackground,
  Dimensions,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StatusBar,
  ScrollView,
  Platform,
  Modal,
  ActivityIndicator,
} from 'react-native';

import {
  LoginManager,
  LoginButton,
  AccessToken,
  ShareDialog,
  GraphRequest,
  GraphRequestManager,
} from 'react-native-fbsdk';

import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-community/google-signin';


import auth from '@react-native-firebase/auth';

import {COLORS} from '../../utils/colors';
import {styles} from '../../utils/styles';
import * as Animatable from 'react-native-animatable';

import {Formik} from 'formik';
import * as yup from 'yup';

import {useSelector, useDispatch} from 'react-redux';
import {setFbLogin} from '../../redux/actions/loginActions';
import {APILINKS} from '../../utils/apilinks';

const SignupSchema = yup.object({
  mobilenumber: yup.string().required('Required'),
  countrycode: yup.string().required('Required'),
});

const Welcome = ({navigation}) => {
  const screenHeight = Math.round(Dimensions.get('window').height);
  const screenWidth = Math.round(Dimensions.get('window').width);

  const [modalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch(); /// ======>>>Redux Hook <<<=====//

  // const dispatch = useDispatch(); /// ======>>>Redux Hook <<<=====//
  // const LoginStatus = useSelector((state) => state.loginDetails);
  // const { status, statusCode, msg } = LoginStatus;

  const [user, setUser] = useState([]);
  const [getAccessToken, setAccessToken] = useState('');

 
  /FB_Login/;
  const callFbLogOut = (accessToken) => {
    setModalVisible(true);
    fetch(
      'https://graph.facebook.com/v2.5/me?fields=email,first_name,last_name,friends&access_token=' +
        accessToken,
    )
      .then((response) => {
        response.json().then((json) => {
          const ID = json.id;
          console.log('ID ' + ID);

          const EM = json.email;
          console.log('Email ' + EM);

          const FN = json.first_name;
          console.log('First Name ' + FN);

          callFBLogin(ID, EM, FN);
        });
      })
      .catch(() => {
        console.log('ERROR GETTING DATA FROM FACEBOOK');
      });

    let logout = new GraphRequest(
      'me/permissions/',
      {
        accessToken: accessToken,
        httpMethod: 'DELETE',
      },
      (error, result) => {
        if (error) {
          console.log('Error fetching data: ' + error.toString());
        } else {
          LoginManager.logOut();
          console.log('Logout Successful');
        }
      },
    );
    new GraphRequestManager().addRequest(logout).start();
  };

  const callFBLogin = async (fID, fEM, fFN) => {
    await dispatch(setFbLogin(fID, fEM, fFN)).then(() => {
      setModalVisible(false);
    });
  };

  const loginWithFacebook = () => {
    LoginManager.logInWithPermissions(['public_profile', 'email']).then(
      function (result) {
        if (result.isCancelled) {
          console.log('==> Login cancelled');
        } else {
          AccessToken.getCurrentAccessToken().then((data) => {
            setAccessToken(data.accessToken.toString());
            console.log(data.accessToken.toString());
            // initFbValue(data.accessToken.toString())
            callFbLogOut(data.accessToken.toString());
          });

          console.log(
            '==> Login success with permissions: ' +
              result.grantedPermissions.toString(),
          );
        }
      },
      function (error) {
        console.log('==> Login fail with error: ' + error);
      },
    );
  };

  /google/;
  useEffect(() => {
    console.log('useEffect');

    GoogleSignin.configure({
    //  scopes: ['email'], // what API you want to access on behalf of the user, default is email and profile
      webClientId:
        '1098403733689-k2pb9tarigrd8gvc119lkur71n7mmds7.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
     // offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
    });
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  const callGoogleLogin = async () => {
    console.log('gsign in');

    try {
      await GoogleSignin.hasPlayServices();
      const userInfo  = await GoogleSignin.signIn();

      console.log('idTokenidToken', userInfo);

      // const credential = auth.GoogleAuthProvider.credential(
      //   idToken,
      //   accessToken,
      // );
      // const data = await auth().signInWithCredential(credential);

      // console.log('datadatadata', data);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
        alert('Cancel');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        alert('Signin in progress');
        // operation (f.e. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        alert('PLAY_SERVICES_NOT_AVAILABLE');
        // play services not available or outdated
      } else {
        // some other error happened
        alert('OTHER_ISSUE');
        console.log('datadatadata', error.code);
      }
    }
  };

  function onAuthStateChanged(user) {
    setUser(user);
    console.log(user);
    if (user) setloggedIn(true);
  }

  const [countryCode] = useState([
    {
      code: '+60',
    },
    {
      code: '+91',
    },
  ]);

  const callGetOtp = (token, phone) => {
    console.log('lllllTok', token + '---' + phone);
    try {
      var form = new FormData();
      form.append('api_token', token);
      form.append('phone', phone);
      fetch(APILINKS.BASE_URL + APILINKS.GET_OTP_URL, {
        method: 'POST',
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data',
        }),
        body: form,
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('lllll', data);
          if (data.statuscode === '1') {
            setModalVisible(false);
            console.log('oooooo', phone);
            navigation.navigate('Otp', {
              apitoken: token,
              phoneno: phone,
              from: 'NEW',
            });
          }
        });
    } catch (error) {}
  };

  return (
    <View style={[styles.mainContainer, {backgroundColor: COLORS.bg_white}]}>
      <Animatable.View animation="fadeInDown">
        <StatusBar backgroundColor={COLORS.black_100}></StatusBar>

        <Formik
          initialValues={{
            mobilenumber: '',
            countrycode: '+60',
          }}
          validationSchema={SignupSchema}
          onSubmit={async (values) => {
            setModalVisible(true);
            var form = new FormData();
            let phoneNo = values.countrycode + values.mobilenumber;
            form.append('phone', phoneNo);

            await fetch(APILINKS.BASE_URL + APILINKS.LOGIN_POHONE_URL, {
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
                console.log('xxxxx', data);
                if (data.status === 'failure') {
                  //  callGetOtp(data.data.api_token, data.data.phone);
                  //call_OTP_Valid
                  navigation.navigate('Otp', {
                    apitoken: data.data.api_token,
                    phoneno: data.data.phone,
                    from: 'NEW',
                  });
                } else {
                  //call_OTP_Valid
                  navigation.navigate('Otp', {
                    apitoken: data.data.api_token,
                    phoneno: data.data.phone,
                    from: 'OLD',
                  });
                }
              });
          }}>
          {(props) => (
            <ScrollView
              contentContainerStyle={{flexGrow: 1}}
              showsVerticalScrollIndicator={false}>
              <View style={{flex: 1}}>
                <ImageBackground
                  style={{height: 200, width: screenWidth}}
                  imageStyle={{
                    borderBottomRightRadius: 25,
                    borderBottomLeftRadius: 25,
                  }}
                  source={require('../../Images/bg.png')}>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('Dashboard');
                    }}>
                    <Text
                      style={{
                        color: COLORS.white,
                        fontSize: 12,
                        textAlign: 'right',
                        margin: 20,
                        fontFamily: 'Poppins-Regular',
                      }}>
                      Skip
                    </Text>
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
                    Welcome!
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      color: COLORS.grey,
                      textAlign: 'center',
                      marginTop: 10,
                      fontFamily: 'Poppins-Regular',
                    }}>
                    Please Log in to continue.
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
                        keyboardType="phone-pad"
                        placeholderTextColor="#000"
                        onChangeText={props.handleChange('countrycode')}
                        value={props.values.countrycode}
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
                        keyboardType="phone-pad"
                        placeholderTextColor="#000"
                        onChangeText={props.handleChange('mobilenumber')}
                        value={props.values.mobilenumber}
                      />
                    </View>
                  </View>

                  <Text style={{color: 'red', marginLeft: 105}}>
                    {props.touched.mobilenumber && props.errors.mobilenumber}
                  </Text>

                  <TouchableOpacity
                    onPress={props.handleSubmit}
                    style={{
                      width: 200,
                      backgroundColor: COLORS.black_100,
                      alignSelf: 'center',
                      marginTop: 30,
                      borderRadius: 5,
                    }}>
                    <Text
                      style={{
                        textAlign: 'center',
                        fontSize: 15,
                        color: COLORS.white,
                        padding: 10,
                        fontFamily: 'Poppins-Regular',
                      }}>
                      SUBMIT
                    </Text>
                  </TouchableOpacity>

                  <Text
                    style={{
                      textAlign: 'center',
                      color: COLORS.black_100,
                      fontSize: 12,
                      marginTop: 40,
                      fontFamily: 'Poppins-Regular',
                    }}>
                    Or Sign up with
                  </Text>

                  <View
                    style={{
                      flexDirection: 'row',
                      alignSelf: 'center',
                      marginTop: 10,
                      marginBottom: 5,
                    }}>
                    <TouchableOpacity
                      onPress={() => {
                        loginWithFacebook();
                      }}>
                      <Image
                        style={{height: 40, width: 40, marginRight: 5}}
                        source={require('../../Images/fb.png')}
                      />
                    </TouchableOpacity>

                    <TouchableOpacity
                      onPress={() => {
                        callGoogleLogin();
                      }}>
                      <Image
                        style={{
                          height: 40,
                          width: 40,
                          marginLeft: 5,
                          marginRight: 5,
                        }}
                        source={require('../../Images/google.png')}
                      />
                    </TouchableOpacity>

                    {/* hide_apple_signup_button_for_android */}
                    {Platform.OS === 'ios' ? (
                      <Image
                        style={{height: 40, width: 40, marginLeft: 5}}
                        source={require('../../Images/apple.png')}
                      />
                    ) : null}
                  </View>
                </View>

                <Modal transparent={true} visible={modalVisible}>
                  <View
                    style={{
                      flex: 1,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
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
            </ScrollView>
          )}
        </Formik>
      </Animatable.View>
    </View>
  );
};
export default Welcome;
