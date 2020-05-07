import React from 'react'
import {StyleSheet, Text} from 'react-native'

const whiteBold = {
    fontFamily: 'Gilroy-ExtraBold',
    fontSize: 15,
    color: '#FFFFFF'
}

const yellowBold = {
    fontFamily: 'Gilroy-ExtraBold',
    fontSize: 15,
    color: '#FCF12D'
}

export default {
    mission1: [
        {
            id: 1,
            name: 'Fontaine Daurade',
            author: 'unknown',
            coordinates:{
                latitude: 44.8419444,
                longitude: -0.5736111111111111
            },
            instructions: [
                <Text>
                    <Text style={whiteBold}>Une jolie inscription</Text> t'attend sur un mur à l'allure d'antan.
                </Text>,
                <Text>
                    Pour en faire la découverte, <Text style={yellowBold}>tous tes sens</Text> devront être <Text style={yellowBold}>en alerte.</Text>
                </Text>,
                <Text>
                    Promène-toi <Text style={whiteBold}>rue Fondaudège</Text> et agis <Text style={yellowBold}>tel un stratège.</Text>
                </Text>,
                <Text>
                    <Text style={whiteBold}>Au coin d'une ruelle</Text> dissimulée tu trouveras <Text style={whiteBold}>l'objet</Text> de ton <Text style={whiteBold}>odyssée.</Text>
                </Text>
            ]
        },
        {
            id: 2,
            name: 'Fontaine de la Grave',
            author: 'Richard-François Bonfin',
            coordinates:{
                latitude: 44.8352778,
                longitude: -0.5641666666666667
            }
        },
        {
            id: 3,
            name: 'Fontaine du Parlement',
            author: 'Louis Garros',
            coordinates:{
                latitude: 44.8405556,
                longitude: -0.5719444444444445
            }
        },
        {
            id: 4,
            name: 'Fontaine Amédée-Larrieu',
            author: 'Edouard Bauhain',
            coordinates:{
                latitude: 44.8302778,
                longitude: -0.5813888888888888
            }
        },
        {
            id: 5,
            name: "Miroir d'eau",
            author: 'Michel Corajoud',
            coordinates:{
                latitude: 44.8416667,
                longitude: -0.5691666666666666
            }
        }
        
    ]
}