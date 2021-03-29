import React, { useState, useRef } from 'react'
import { View, Image, Text, StatusBar, TouchableOpacity, Dimensions } from 'react-native'
import { styles } from '../../../utils/styles'
import { COLORS } from '../../../utils/colors'

const TopUpAlert = ({ navigation }) => {

    return (
        <View style={[styles.mainContainer, { backgroundColor: COLORS.grey_300 }]}>
            <StatusBar backgroundColor={COLORS.black_100}></StatusBar>
            <View style={{ flex: 1, margin: 10 }}>

                <View style={{
                    width: 150, height: 150, borderRadius: 100, borderWidth: 10, borderColor: COLORS.white,
                    backgroundColor: COLORS.yellow, justifyContent: 'center', elevation: 5, alignSelf: 'center', marginTop: 50
                }}>

                    <Image style={{ height: 100, width: 100, resizeMode: 'contain', marginRight: 2, marginLeft: 5, alignSelf: 'center' }}
                        source={require('../../../Images/tick.png')} />

                </View>

                <Text style={{ fontSize: 20, color: COLORS.black_100, marginTop: 20, fontFamily: "Poppins-SemiBold", textAlign: 'center' }}>+ 88 PTS</Text>
                <Text style={{ fontSize: 15, color: COLORS.black_100, marginTop: 10, fontFamily: "Poppins-SemiBold", textAlign: 'center' }}>Top-up Successful</Text>
                <Text style={{ fontSize: 12, color: COLORS.grey_100, marginTop: 5, textAlign: 'center' }}>Transaction Number : 1234567890</Text>

                <View style={{ backgroundColor: COLORS.white, marginTop: 40, borderRadius: 5, elevation: 5 }}>

                    <View style={{ padding: 20 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: 12, color: COLORS.black_100, fontFamily: "Poppins-SemiBold" }}>SOS Sarawak Outlet</Text>
                            <Text style={{ fontSize: 12, color: COLORS.black_100, fontFamily: "Poppins-SemiBold" }}>RM 88.00</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }}>
                            <Text style={{ fontSize: 10, color: COLORS.grey, fontFamily: "Poppins-SemiBold" }}>Top-up</Text>
                            <Text style={{ fontSize: 10, color: COLORS.grey, fontFamily: "Poppins-SemiBold" }}>24 Nov, 19:07</Text>
                        </View>
                    </View>

                    <View style={{ height: 1, backgroundColor: COLORS.grey_line, marginBottom: 10 }} />

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 20 }}>
                        <Text style={{ fontSize: 12, color: COLORS.black_100, fontFamily: "Poppins-SemiBold" }}>Current Balance</Text>
                        <Text style={{ fontSize: 12, color: COLORS.black_100, fontFamily: "Poppins-SemiBold" }}>RM 1,800.00</Text>
                    </View>
                </View>

            </View>


            <View style={{ flex: 0.1, justifyContent: 'flex-end', padding: 10 }}>

                <View style={{
                    flexDirection: 'row', justifyContent: 'space-between', marginTop: 20,
                    backgroundColor: COLORS.white
                }}>
                    <TouchableOpacity onPress={('')} style={{
                        backgroundColor: COLORS.white, borderColor: COLORS.black, borderWidth: 1,
                        width: '48%', borderRadius: 5
                    }}>
                        <Text style={{ color: COLORS.black_100, textAlign: 'center', padding: 10, fontSize: 12 }}>HOME</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { navigation.navigate('Pay') }} style={{ backgroundColor: COLORS.black, width: '48%', borderRadius: 5 }}>
                        <Text style={{ color: COLORS.white, textAlign: 'center', padding: 10, fontSize: 12, fontFamily: "Poppins-Regular" }}>PAY</Text>
                    </TouchableOpacity>

                </View>
            </View>




        </View>
    )
}

export default TopUpAlert