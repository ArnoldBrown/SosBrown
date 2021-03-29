import React, {useState} from 'react';
import {
  View,
  Image,
  Text,
  FlatList,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

import {styles} from '../../../utils/styles';
import {COLORS} from '../../../utils/colors';

const VoucherPast = () => {
  const [vouchersList] = useState([
    {
      id: '2',
      img: require('../../../Images/item_two.png'),
      name: 'Adidas',
      desc: 'RM5 off purchases on 2020',
      color: '#596A55',
      date: 'Valid until 1 Jan 2021',
    },
  ]);

  return (
    <View style={[styles.mainContainer, {backgroundColor: COLORS.grey_300}]}>
      <StatusBar backgroundColor={COLORS.black_100}></StatusBar>
      <View style={{margin: 20}}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={vouchersList}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={''}
              style={{
                flexDirection: 'row',
                backgroundColor: COLORS.grey_300,
                margin: 5,
              }}>
              <View style={{backgroundColor: COLORS.grey_300}}>
                <Image
                  style={{
                    width: 100,
                    height: 100,
                    borderTopLeftRadius: 10,
                    borderBottomLeftRadius: 10,
                  }}
                  source={item.img}
                />
                <View style={styles.overlay_Grey}></View>
              </View>

              <View
                style={{
                  flex: 1,
                  backgroundColor: COLORS.grey_line,
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
                      color: COLORS.grey_100,
                      marginTop: 5,
                      fontFamily: 'Poppins-Regular',
                    }}>
                    {item.name}
                  </Text>
                  <Text
                    numberOfLines={2}
                    ellipsizeMode="tail"
                    style={{
                      flex: 0.6,
                      fontSize: 12,
                      fontWeight: 'bold',
                      width: 200,
                      color: COLORS.grey,
                      fontFamily: 'Poppins-Regular',
                    }}>
                    {item.desc}
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
                        fontFamily: 'Poppins-Regular',
                      }}>
                      {item.date}
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default VoucherPast;
