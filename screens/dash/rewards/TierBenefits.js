import React from 'react'
import { View, StatusBar, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import { styles } from '../../../utils/styles'
import { COLORS } from '../../../utils/colors'

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import TierBenefitsPoints from '../../dash/rewards/TierBenefitsPoints'

const Tab = createMaterialTopTabNavigator();

const TierBenefits = ({ navigation }) => {

    return (
        <View style={styles.mainContainer}>
            <StatusBar backgroundColor={COLORS.black_100}></StatusBar>
            <View style={{ elevation: 1, backgroundColor: COLORS.white }}>
                <View style={{ backgroundColor: COLORS.white, height: 50, flexDirection: 'row' }}>
                    <TouchableOpacity onPress={() => { navigation.goBack() }} style={{ alignSelf: 'center' }}>
                        <Image style={{ height: 15, width: 15, resizeMode: 'contain', marginRight: 2, marginLeft: 5, alignSelf: 'center' }}
                            source={require('../../../Images/back_black.png')} />
                    </TouchableOpacity>

                    <Text style={{ marginLeft: 10, fontWeight: 'bold', alignSelf: 'center', fontSize: 15 }}>Tier Benefits</Text>
                </View>
            </View>

            <View style={{ flex: 1, backgroundColor: COLORS.white }}>

                <View style={{ margin: 20 }}>
                    <Text style={{ fontSize: 15, color: COLORS.black_100, fontFamily: "Poppins-Medium" }}>Bronze Tier</Text>
                    <Text style={{ fontSize: 12, color: COLORS.grey, fontFamily: "Poppins-Medium" }}>Unlocked at 10,000 Points</Text>
                </View>

                <Tab.Navigator
                    tabBarOptions={{
                        tabStyle: { width: 90 },
                        labelStyle: { fontSize: 13, fontWeight: 'bold', textTransform: 'none' },
                        style: { backgroundColor: COLORS.white },
                        indicatorStyle: { backgroundColor: COLORS.black, position: 'absolute' }
                    }}
                >

                    <Tab.Screen name="Bronze" component={TierBenefitsPoints} />
                    <Tab.Screen name="Silver" component={TierBenefitsPoints} />
                    <Tab.Screen name="Gold" component={TierBenefitsPoints} />
                    <Tab.Screen name="Platinum" component={TierBenefitsPoints} />
                </Tab.Navigator>
            </View>

        </View>
    )

}

export default TierBenefits