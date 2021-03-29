import React, { useState, useRef } from 'react'
import { View, Text, Image, TouchableOpacity, FlatList, Dimensions, StatusBar } from 'react-native'
import { COLORS } from '../../../utils/colors'
import { styles } from '../../../utils/styles'

import RBSheet from 'react-native-raw-bottom-sheet'

const CatalogProductList = ({navigation}) => {

    const refRBSheetSort = useRef();
    const refRBSheetFilter = useRef();
    const screenWidth = Math.round(Dimensions.get('window').width);
    const screenHeight = Math.round(Dimensions.get('window').height);

    const [productList] = useState([
        { id: '1', img: require('../../../Images/shoe_one.png'), name: 'Running Shoe', color: COLORS.black_100, bgColor: COLORS.white, model: 'Run', price: 'RM 359.00' },
        { id: '2', img: require('../../../Images/shoe_two.png'), name: 'Sport Shoe', color: COLORS.black_100, bgColor: COLORS.white, model: 'Sport', price: 'RM 359.00' },
        { id: '3', img: require('../../../Images/shoe_two.png'), name: 'Sports', color: COLORS.yellow, bgColor: COLORS.black_100, model: 'Sport', price: 'RM 359.00' },
        { id: '4', img: require('../../../Images/shoe_one.png'), name: 'Running Shoe', color: COLORS.black_100, bgColor: COLORS.white, model: 'Run', price: 'RM 359.00' },
        { id: '5', img: require('../../../Images/shoe_one.png'), name: 'Running Shoe', color: COLORS.black_100, bgColor: COLORS.white, model: 'Run', price: 'RM 359.00' },
    ]);

    const [sortList] = useState([
        { id: '1', name: 'Newest Arrival' },
        { id: '2', name: 'Featured' },
        { id: '3', name: 'Price - Highest to Lowest' },
        { id: '4', name: 'Price - Lowest to Highest' },
    ]);

    const [getSortid, setSortid] = useState('1')

    const selectedSortID = (id) => {
        console.log(id)
        setSortid(id)
    }


    const [FilterList] = useState([
        { id: '1', name: 'Men' },
        { id: '2', name: 'Women' },
        { id: '3', name: 'Teen' },
        { id: '4', name: 'Kids' },
    ]);

    const [getFilterid, setFilterid] = useState('1')

    const selectedFilterID = (id) => {
        console.log(id)
        setFilterid(id)
    }

    return (
        <View style={[styles.mainContainer, { margin: 20 }]}>
            <StatusBar backgroundColor={COLORS.black_100}></StatusBar>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
                <TouchableOpacity onPress={() => refRBSheetSort.current.open()} style={{ flexDirection: 'row' }}>
                    <Text style={{ fontSize: 12, color: COLORS.black_100, fontFamily: "Poppins-Regular" }}>Sort By</Text>
                    <Image style={{ height: 10, width: 10, resizeMode: 'contain', marginRight: 2, marginLeft: 5, alignSelf: 'center' }}
                        source={require('../../../Images/down_arrow.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => refRBSheetFilter.current.open()} style={{ flexDirection: 'row' }}>
                    <Text style={{ fontSize: 12, color: COLORS.black_100, fontFamily: "Poppins-Regular" }}>Filter By</Text>
                    <Image style={{ height: 10, width: 10, resizeMode: 'contain', marginRight: 2, marginLeft: 5, alignSelf: 'center' }}
                        source={require('../../../Images/down_arrow.png')} />
                </TouchableOpacity>
            </View>

            <FlatList
                contentContainerStyle={{ alignSelf: 'center' }}
                showsVerticalScrollIndicator={false}
                data={productList}
                numColumns={2}
                renderItem={({ item }) => (
                    <TouchableOpacity  onPress={() => { navigation.navigate('CatProdDetail') }}
                        style={{
                            height: 220, width: screenWidth / 2.3, backgroundColor: COLORS.white,
                            borderRadius: 15, margin: 5, elevation: 3
                        }}>
                        <View style={{ height: 140, width: 100, alignSelf: 'center' }}>
                            <Image style={{ height: "100%", width: '100%', resizeMode: 'contain' }}
                                source={item.img} />
                        </View>
                        <View style={{ margin: 10 }}>
                            <Text style={{ fontSize: 12, color: COLORS.black_100, fontFamily: "Poppins-SemiBold" }}>{item.name}</Text>
                            <Text style={{ fontSize: 12, color: COLORS.grey, fontFamily: "Poppins-Medium" }}>{item.model}</Text>
                            <Text style={{ fontSize: 12, color: COLORS.black_100, fontFamily: "Poppins-SemiBold" }}>{item.price}</Text>
                        </View>

                    </TouchableOpacity>

                )}
            />

            {/* //sort_by// */}
            <RBSheet
                ref={refRBSheetSort}
                closeOnDragDown={true}
                closeOnPressMask={true}
                height={screenHeight / 3}

                customStyles={{
                    wrapper: {
                        backgroundColor: 'rgba(52, 52, 52, 0.2)'
                    },
                    container: {
                        borderTopLeftRadius: 20, borderTopRightRadius: 20,
                        elevation: 20,
                        backgroundColor: COLORS.white
                    }
                }}>

                <View style={{ padding: 10 }}>

                    <Text style={{ fontSize: 15, fontFamily: "Poppins-BOld", marginTop: 10 }}>Sort By</Text>

                    <View style={{ justifyContent: 'space-between', marginTop: 10 }}>
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            data={sortList}
                            renderItem={({ item }) => (
                                <TouchableOpacity onPress={() => selectedSortID(item.id)} style={[getSortid === item.id ? { backgroundColor: COLORS.black_100 } : { backgroundColor: COLORS.white }, { width: '100%', borderRadius: 5 }]}>
                                    <Text style={[getSortid === item.id ? { color: COLORS.white } : { color: COLORS.black }, { padding: 10, fontSize: 12 }]}>{item.name}</Text>
                                </TouchableOpacity>

                                // onPress={() => refRBSheetSort.current.close()}
                            )}

                        />
                    </View>

                </View>

            </RBSheet>

            {/* //sort_by// */}
            <RBSheet
                ref={refRBSheetFilter}
                closeOnDragDown={true}
                closeOnPressMask={true}
                height={screenHeight / 3}

                customStyles={{
                    wrapper: {
                        backgroundColor: 'rgba(52, 52, 52, 0.2)'
                    },
                    container: {
                        borderTopLeftRadius: 20, borderTopRightRadius: 20,
                        elevation: 20,
                        backgroundColor: COLORS.white
                    }
                }}>

                <View style={{ padding: 10 }}>

                    <Text style={{ fontSize: 15, fontFamily: "Poppins-BOld", marginTop: 10 }}>Filter By</Text>

                    <View style={{ justifyContent: 'space-between', marginTop: 10 }}>
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            data={FilterList}
                            renderItem={({ item }) => (
                                <TouchableOpacity onPress={() => selectedFilterID(item.id)} style={[getFilterid === item.id ? { backgroundColor: COLORS.black_100 } : { backgroundColor: COLORS.white }, { width: '100%', borderRadius: 5 }]}>
                                    <Text style={[getFilterid === item.id ? { color: COLORS.white } : { color: COLORS.black }, { padding: 10, fontSize: 12 }]}>{item.name}</Text>
                                </TouchableOpacity>

                                // onPress={() => refRBSheetSort.current.close()}
                            )}
                        />
                    </View>

                </View>

            </RBSheet>


        </View>
    )

}


export default CatalogProductList