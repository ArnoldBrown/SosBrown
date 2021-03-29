import React, {useState, useRef} from 'react';
import {
  View,
  TextInput,
  Text,
  StatusBar,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {styles} from '../../../utils/styles';
import {COLORS} from '../../../utils/colors';

const TopUpOnlineBank = ({navigation}) => {
  const [getAmt, setAmt] = useState('');

  return (
    <View style={[styles.mainContainer, {margin: 20}]}>
      <StatusBar backgroundColor={COLORS.black_100}></StatusBar>
      <Text
        style={{
          fontSize: 20,
          color: COLORS.black_100,
          fontFamily: 'Poppins-Medium',
        }}>
        Enter Amount
      </Text>
      <Text
        style={{
          fontSize: 12,
          color: COLORS.grey,
          fontFamily: 'Poppins-Medium',
        }}>
        Minimum Top Up Value MYR 10.00
      </Text>

      <View style={{flexDirection: 'row', marginTop: 20}}>
        <Text
          style={{
            fontSize: 12,
            color: COLORS.grey_200,
            marginRight: 5,
            marginTop: 10,
            fontFamily: 'Poppins-Medium',
          }}>
          RM
        </Text>
        <TextInput
          style={{
            fontSize: 20,
            color: COLORS.grey_200,
            fontFamily: 'Poppins-Regular',
          }}>
          {getAmt !== '' ? getAmt + '.00' : '00.00'}
        </TextInput>
      </View>

      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          margin: 10,
        }}>
        <TouchableOpacity
          onPress={() => setAmt(50)}
          style={{
            borderColor: COLORS.black,
            borderWidth: 1,
            width: '30%',
            borderRadius: 20,
          }}>
          <Text
            style={{
              color: COLORS.black_100,
              textAlign: 'center',
              padding: 10,
              fontSize: 12,
              fontFamily: 'Poppins-Medium',
            }}>
            RM 50.00
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setAmt(100)}
          style={{
            borderColor: COLORS.black,
            borderWidth: 1,
            width: '30%',
            borderRadius: 20,
          }}>
          <Text
            style={{
              color: COLORS.black_100,
              textAlign: 'center',
              padding: 10,
              fontSize: 12,
              fontFamily: 'Poppins-Medium',
            }}>
            RM 100.00
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setAmt(500)}
          style={{
            borderColor: COLORS.black,
            borderWidth: 1,
            width: '30%',
            borderRadius: 20,
          }}>
          <Text
            style={{
              color: COLORS.black_100,
              textAlign: 'center',
              padding: 10,
              fontSize: 12,
              fontFamily: 'Poppins-Medium',
            }}>
            RM 500.00
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        onPress={() => {
          getAmt !== '' ? navigation.navigate('PaymentAlert'): null;
        }}
        style={[
          getAmt !== '' ? styles.activeBtnBackGround : styles.nonactiveBtnBackGround,
        ]}>
        <Text
          style={[
            getAmt !== '' ? styles.activeWhiteText : styles.nonactiveGreyText,
          ]}>
          PROCEED
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default TopUpOnlineBank;
