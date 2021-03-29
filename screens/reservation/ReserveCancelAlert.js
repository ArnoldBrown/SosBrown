import React, { useState, useRef } from 'react'
import { View, Image, Text, StatusBar, TouchableOpacity, Dimensions } from 'react-native'
import { styles } from '../../utils/styles'
import { COLORS } from '../../utils/colors'

const ReserveCancelAlert = ({ navigation }) => {

    return (
        <View style={[styles.mainContainer, { backgroundColor: COLORS.grey_300 }]}>
            <StatusBar backgroundColor={COLORS.black_100}></StatusBar>
            <View style={{ flex: 1, margin: 10 }}>

                <View style={{
                    width: 180, height: 180, borderRadius: 100, borderWidth: 10, borderColor: COLORS.white,
                    backgroundColor: COLORS.yellow, justifyContent: 'center', elevation: 5, alignSelf: 'center', marginTop: 50
                }}>

                    <Image style={{ height: 100, width: 100, resizeMode: 'contain', marginRight: 2, marginLeft: 5, alignSelf: 'center' }}
                        source={require('../../Images/tick.png')} />

                </View>

                <Text style={{ fontSize: 20, color: COLORS.black_100, marginTop: 20, fontFamily: "Poppins-SemiBold", textAlign: 'center' }}>Reservation Cancelled</Text>
                <Text style={{ fontSize: 12, color: COLORS.grey_100, marginTop: 5, textAlign: 'center', fontFamily: "Poppins-Regular" }}>Reservation Number : 1234567890</Text>

                <View style={{ backgroundColor: COLORS.white, marginTop: 40, borderRadius: 5, elevation: 5 }}>

                    <View style={{ padding: 20 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image style={{ height: 15, width: 15, resizeMode: 'contain', marginRight: 5, tintColor: COLORS.black_100 }}
                                source={require('../../Images/location.png')} />
                            <Text style={{ fontSize: 12, color: COLORS.black_100, fontFamily: "Poppins-Regular" }}>SOS Boulevard Kuching</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                            <Image style={{ height: 15, width: 15, resizeMode: 'contain', marginRight: 5, tintColor: COLORS.black_100 }}
                                source={require('../../Images/clock_light.png')} />
                            <Text style={{ fontSize: 12, color: COLORS.black_100, fontFamily: "Poppins-Regular" }}>4 Pax</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                            <Image style={{ height: 15, width: 15, resizeMode: 'contain', marginRight: 5, tintColor: COLORS.black_100 }}
                                source={require('../../Images/clock_light.png')} />
                            <Text style={{ fontSize: 12, color: COLORS.black_100, fontFamily: "Poppins-Regular" }}>20 June 2020, 14:07</Text>
                        </View>
                    </View>

                    <View style={{ height: 1, backgroundColor: COLORS.grey_line, marginTop: 10, marginBottom: 10 }} />

                    <Text style={{ fontSize: 15, color: COLORS.red, textAlign: 'center', fontFamily: "Poppins-Bold", padding: 10 }}>Cancelled</Text>
                </View>

            </View>


            <View style={{ flex: 0.5, justifyContent: 'flex-end' }}>

                <TouchableOpacity onPress={() => { navigation.navigate('MakeReservation') }} style={{ width: '90%', backgroundColor: COLORS.black_100, alignSelf: 'center', borderRadius: 5 }}>
                    <Text style={{ textAlign: 'center', fontSize: 12, color: COLORS.white, padding: 10, fontFamily: "Poppins-Regular" }}>HOME</Text>
                </TouchableOpacity>
            </View>


        </View>
    )
}

export default ReserveCancelAlert