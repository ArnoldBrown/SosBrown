import React, { useEffect } from 'react'
import { View, ImageBackground, Dimensions, Image, TouchableOpacity, StatusBar } from 'react-native'
import { styles } from '../../utils/styles'
import { COLORS } from '../../utils/colors'


const Splash = ({ navigation }) => {
    const screenHeight = Math.round(Dimensions.get('window').height);
    const screenWidth = Math.round(Dimensions.get('window').width);

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Welcome')
        }, 3000);
    }, []);

    return (
        <View style={styles.mainContainer}>

            <StatusBar backgroundColor={COLORS.black_100}></StatusBar>
            <ImageBackground style={{ height: '100%', width: '100%', justifyContent: 'center' }}
                source={require('../../Images/bg.png')}>

                <TouchableOpacity onPress={() => navigation.navigate('Welcome')}>
                    <View style={{ backgroundColor: 'transparent', alignItems: 'center' }}>

                        <Image style={{ width: 100, height: 100, alignSelf: 'center', resizeMode: 'contain' }}
                            source={require('../../Images/app_logo_large_x.png')} />

                    </View>
                </TouchableOpacity>

            </ImageBackground>

        </View>
    )
}
export default Splash