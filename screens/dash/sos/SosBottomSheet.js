import React, { useEffect } from 'react'
import { View, Text, Image, Dimensions, TouchableOpacity, StatusBar } from 'react-native'

import { styles } from '../../../utils/styles'
import { COLORS } from '../../../utils/colors'

const SosBottomSheet = ({ navigation }) => {

    const screenWidth = Math.round(Dimensions.get('window').width);
    const screenHeight = Math.round(Dimensions.get('window').height);


    return (

        <View style={[styles.mainContainer, {backgroundColor: 'rgba(52, 52, 52, 0.7)'}]}>
            <StatusBar backgroundColor={COLORS.black_100}></StatusBar>
            <View style={{ flex: 1 }}></View>

            <View style={{ flex: 1, backgroundColor: COLORS.black, borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>

                <View style={{ padding: 20 }}>

                    <Text style={{ fontSize: 15, fontFamily: "Poppins-SemiBold", color: COLORS.white, marginTop: 20 }}>Experience SOS</Text>

                    <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20 }}>

                        <TouchableOpacity onPress={() => { navigation.navigate('OutletsMain') }} style={{ alignItems: 'center', width: screenWidth / 4 }}>
                            <View style={styles.bgSos40}>
                                <Image style={{ width: 30, height: 30, alignSelf: 'center', resizeMode: 'contain' }}
                                    source={require('../../../Images/sos_one.png')} />

                            </View>
                            <Text style={{ color: COLORS.white, fontSize: 10, fontFamily: "Poppins-Bold", marginTop: 5, textAlign: 'center' }}>Outlets</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => { navigation.navigate('MyReservation') }} style={{ alignItems: 'center', width: screenWidth / 4 }}>
                            <View style={styles.bgSos40}>
                                <Image style={{ width: 30, height: 30, alignSelf: 'center', resizeMode: 'contain' }}
                                    source={require('../../../Images/sos_two.png')} />

                            </View>
                            <Text style={{ color: COLORS.white, fontSize: 10, fontFamily: "Poppins-Bold", marginTop: 5, textAlign: 'center' }}>Reservation</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => { navigation.navigate('QrScan') }} style={{ alignItems: 'center', width: screenWidth / 4 }}>
                            <View style={styles.bgSos40}>
                                <Image style={{ width: 30, height: 30, alignSelf: 'center', resizeMode: 'contain' }}
                                    source={require('../../../Images/sos_three.png')} />

                            </View>
                            <Text style={{ color: COLORS.white, fontSize: 10, fontFamily: "Poppins-Bold", marginTop: 5, textAlign: 'center' }}>Scan to Order</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => { navigation.navigate('Catalog') }} style={{ alignItems: 'center', width: screenWidth / 4 }}>
                            <View style={styles.bgSos40}>
                                <Image style={{ width: 30, height: 30, alignSelf: 'center', resizeMode: 'contain' }}
                                    source={require('../../../Images/sos_four.png')} />

                            </View>
                            <Text style={{ color: COLORS.white, fontSize: 10, fontFamily: "Poppins-Bold", marginTop: 5, textAlign: 'center' }}>Catalog</Text>
                        </TouchableOpacity>

                    </View>

                    <View style={{ flexDirection: 'row', marginTop: 20 }}>

                        <TouchableOpacity onPress={() => { navigation.navigate('Rewards') }} style={{ alignItems: 'center', width: screenWidth / 4 }}>
                            <View style={styles.bgSos40}>
                                <Image style={{ width: 30, height: 30, alignSelf: 'center', resizeMode: 'contain' }}
                                    source={require('../../../Images/ticket_star_black.png')} />

                            </View>
                            <Text style={{ color: COLORS.white, fontSize: 10, fontFamily: "Poppins-Bold", marginTop: 5, textAlign: 'center' }}>Collect Points</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => { navigation.navigate('SosMore') }} style={{ alignItems: 'center', width: screenWidth / 4 }}>
                            <View style={styles.bgSos40}>
                                <Image style={{ width: 30, height: 30, alignSelf: 'center', resizeMode: 'contain' }}
                                    source={require('../../../Images/sos_six.png')} />

                            </View>
                            <Text style={{ color: COLORS.white, fontSize: 10, fontFamily: "Poppins-Bold", marginTop: 5, textAlign: 'center' }}>More</Text>
                        </TouchableOpacity>

                    </View>

                </View>

            </View>

        </View>

    )
}

export default SosBottomSheet