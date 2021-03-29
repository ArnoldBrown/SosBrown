import React, { useState, useRef } from 'react'
import { View, Image, Text, StatusBar, TouchableOpacity, Dimensions } from 'react-native'
import { styles } from '../../../utils/styles'
import { COLORS } from '../../../utils/colors'

const PaymentAlertFailure = () => {

    return (
        <View style={[styles.mainContainer, { backgroundColor: COLORS.grey_300 }]}>
            <StatusBar backgroundColor={COLORS.black_100}></StatusBar>
            <View style={{ flex: 1, margin: 10 }}>

                <View style={{ width: 200, height: 200, justifyContent: 'center', alignSelf: 'center', marginTop: 20 }}>

                    <Image style={{ height: '100%', width: '100%', resizeMode: 'contain', alignSelf: 'center' }}
                        source={require('../../../Images/failure.png')} />

                </View>

                <Text style={{ fontSize: 15, color: COLORS.black_100, marginTop: 10, fontFamily: "Poppins-SemiBold", textAlign: 'center' }}>Payment Unsuccessful</Text>

                <View style={{ backgroundColor: COLORS.white, marginTop: 40, borderRadius: 5, elevation: 5 }}>

                    <View style={{ padding: 20 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: 12, color: COLORS.black_100, fontFamily: "Poppins-SemiBold" }}>SOS Sarawak Outlet</Text>
                            <Text style={{ fontSize: 12, color: COLORS.black_100, fontFamily: "Poppins-SemiBold" }}>RM 88.00</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }}>
                            <Text style={{ fontSize: 10, color: COLORS.grey, fontFamily: "Poppins-SemiBold" }}>Payment</Text>
                            <Text style={{ fontSize: 10, color: COLORS.grey, fontFamily: "Poppins-SemiBold" }}>24 Nov, 19:07</Text>
                        </View>
                    </View>

                    <View style={{ height: 1, backgroundColor: COLORS.grey_line, marginBottom: 10 }} />

                    <Text style={{ fontSize: 15, color: COLORS.red, textAlign: 'center', fontFamily: "Poppins-Medium", padding: 10 }}>Insufficient Funds</Text>
                </View>

            </View>

            <View style={{ flex: 0.5, justifyContent: 'flex-end' }}>

                <View style={{ justifyContent: 'space-between', flexDirection: 'row', margin: 10 }}>
                    <TouchableOpacity onPress={('')} style={{
                        backgroundColor: COLORS.white, borderColor: COLORS.black, borderWidth: 1,
                        width: '48%', borderRadius: 5
                    }}>
                        <Text style={{ color: COLORS.black_100, textAlign: 'center', padding: 10, fontSize: 12, }}>HOME</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={('')} style={{ backgroundColor: COLORS.black, width: '48%', borderRadius: 5 }}>
                        <Text style={{ color: COLORS.white, textAlign: 'center', padding: 10, fontSize: 12, fontFamily: "Poppins-Regular" }}>TOP-UP</Text>
                    </TouchableOpacity>
                </View>

            </View>


        </View>
    )
}

export default PaymentAlertFailure