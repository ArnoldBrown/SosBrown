import React, {useState} from 'react';
import {
  View,
  Dimensions,
  Text,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {styles} from '../../../utils/styles';
import {COLORS} from '../../../utils/colors';

import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';

const QrScan = ({navigation}) => {
  const screenWidth = Math.round(Dimensions.get('window').width);
  const screenHeight = Math.round(Dimensions.get('window').height);
  const [isTorchOn, setIsTorchOn] = useState(false);

  const handlePress = () => {
    if (Platform.OS === 'ios') {
      setIsTorchOn(!isTorchOn);
    } else {
      setIsTorchOn(!isTorchOn);
    }
  };

  return (
    <View style={[styles.mainContainer, {backgroundColor: COLORS.grey_200}]}>
      <StatusBar backgroundColor={COLORS.black_100}></StatusBar>
      <View style={{height: 50, flexDirection: 'row'}}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={{alignSelf: 'center'}}>
          <Image
            style={{
              tintColor: COLORS.white,
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
            color: COLORS.white,
          }}>
          Scan to Order
        </Text>
      </View>

      <View style={{flex: 1, justifyContent: 'center'}}>
        <View style={{alignItems: 'center'}}>
          <View style={{height: screenHeight / 2, width: screenWidth / 2}}>
            <QRCodeScanner
              showMarker={true}
              markerStyle={{borderColor: COLORS.yellow}}
              flashMode={
                isTorchOn
                  ? RNCamera.Constants.FlashMode.torch
                  : RNCamera.Constants.FlashMode.off
              }
              cameraStyle={{
                height: 280,
                width: 280,
                alignSelf: 'center',
                justifyContent: 'center',
              }}></QRCodeScanner>
          </View>

          <Text
            style={{
              textAlign: 'center',
              fontSize: 12,
              color: COLORS.white,
              fontFamily: 'Poppins-Regular',
            }}>
            Position the QR code within the frame
          </Text>
        </View>
      </View>

      <View
        style={{flex: 0.3, justifyContent: 'flex-end', alignItems: 'center'}}>
        <View
          style={{
            height: 50,
            width: 50,
            borderRadius: 30,
            backgroundColor: COLORS.black_100,
            justifyContent: 'center',
            marginBottom: 10,
          }}>
          <Image
            style={{
              height: 30,
              width: 30,
              resizeMode: 'contain',
              alignSelf: 'center',  
            }}
            source={
              isTorchOn
                ? require('../../../Images/tourch_on.png')
                : require('../../../Images/flash_off.png')
            }
          />
        </View>

        <TouchableOpacity
          onPress={handlePress}
          style={{
            width: '30%',
            backgroundColor: COLORS.grey_100,
            alignSelf: 'center',
            borderRadius: 20,
            marginBottom: 20,
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 12,
              color: COLORS.white,
              padding: 10,
              fontFamily: 'Poppins-Regular',
            }}>
            {isTorchOn ? 'Turn off Flash' : 'Turn on Flash'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default QrScan;
