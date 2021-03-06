import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';

/**
 * PROPS : {
 *      title: (string),
 *      action: function,
 *      disabled: bool
 * }
 * 
 * STYLE : {
 *      flex: 2,
 *      justifyContent: 'center',
 *      alignItems: 'center
 * }
 *  
 */

export default function CustomButton(props){
    return(
        <View>
            <TouchableOpacity 
                disabled={props.disabled}
                style={props.disabled ? disabled.container : style.container}
                onPress={props.action}
            > 
                <View style={props.disabled ? disabled.borderTopButton : style.borderTopButton}></View>
                
                <LinearGradient 
                    colors={props.disabled ? ['transparent', '#FFFFFF'] : ['transparent', '#F0D214']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 7, y: 7 }}
                    style={{flexDirection: 'row', alignItems:'center'}}
                >   
                    <Image 
                        source={props.disabled ? (
                            require('../images/icons/arrow-disabled.png')
                        ) : (
                            require('../images/icons/arrow-back.png')
                        )}
                    />
                    <Text
                        style={props.disabled ? disabled.text : style.text}
                    >
                        {props.title}
                    </Text>
                </LinearGradient>
                <View style={props.disabled ? disabled.borderBottomButton : style.borderBottomButton}></View>
            </TouchableOpacity>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        width: 215, 
        borderColor: '#FCF12D',
        borderRightWidth: 1,
        alignItems: 'flex-end',
    },
    borderTopButton:{
        backgroundColor: '#FCF12D',
        height: 1,
        width: '37%',
    },
    text:{
        padding: 10, 
        fontFamily: 'Gilroy-ExtraBold', 
        fontSize: 14, color:'#FFFFFF', 
        textTransform: 'uppercase', 
        textAlign: 'center', 
        flex: 9
    },
    borderBottomButton:{
        backgroundColor: '#FCF12D',
        height: 1,
        width: '53%',
    }
})

const disabled = StyleSheet.create({
    container: {
        width: 215, 
        borderColor: '#898989',
        borderLeftWidth: 1,
    },
    borderTopButton: {
        backgroundColor: '#898989',
        height: 1,
        width: '37%',
    },
    text:{
        padding: 10, 
        fontFamily: 'Gilroy-ExtraBold', 
        fontSize: 14, color:'#898989', 
        textTransform: 'uppercase', 
        textAlign: 'center', 
        flex: 9
    },
    borderBottomButton: {
        backgroundColor: '#898989',
        height: 1,
        width: '53%',
    }
})