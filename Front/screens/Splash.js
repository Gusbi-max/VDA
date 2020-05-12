import React from 'react'
import { View, Image, StyleSheet } from 'react-native'

export default function Splash() {
    return (
        <View style={style.container}>
            <Image
                source={require('../images/start/splash.png')}
            />
        </View>
    ) 
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000000",
        justifyContent: "center",
        alignItems: "center"
    }
})