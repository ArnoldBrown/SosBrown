import React, { useState } from 'react'
import { View, FlatList, Text, Image, StatusBar, ScrollView } from 'react-native'
import { styles } from '../../../utils/styles'
import { COLORS } from '../../../utils/colors'

const TierBenefitsPoints = ({ route }) => {

    const [bronzeList] = useState([
        { id: '1', img: require('../../../Images/bronze_point.png'), desc: 'SOS Bolevard Kuching' },
        { id: '2', img: require('../../../Images/bronze_point.png'), desc: '5% Discount' },
        { id: '3', img: require('../../../Images/bronze_point.png'), desc: '1.5x Earn Rates' },
    ]);


    return (
        <View style={[styles.mainContainer, { margin: 10 }]}>
            <StatusBar backgroundColor={COLORS.black_100}></StatusBar>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={bronzeList}
                renderItem={({ item }) => (
                    <View>
                        <View style={{ flexDirection: 'row', marginTop: 10 }}>

                            <Image style={{ width: 60, height: 60, resizeMode: 'contain' }}
                                source={item.img} />

                            <View style={{ alignSelf: 'center', width: '85%', marginLeft: 10 }}>
                                <Text numberOfLines={1} ellipsizeMode='tail' style={{ color: COLORS.black_100, fontSize: 15, fontFamily: "Poppins-Medium" }}>{item.desc}</Text>
                                <Text numberOfLines={5} ellipsizeMode='tail' style={{ color: COLORS.grey_500, fontSize: 12, marginTop: 5, fontFamily: "Poppins-Regular" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do elusmod tempor.</Text>
                            </View>

                        </View>
                        <View style={{ backgroundColor: COLORS.grey, height: 1, marginTop: 10, marginBottom: 10, fontFamily: "Poppins-Regular" }} />
                    </View>
                )}
            />



        </View>
    )
}

export default TierBenefitsPoints