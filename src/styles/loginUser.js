import React from 'react';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({

    input:{
        borderRadius:15, 
        width:'100%', 
        height:40,
        backgroundColor:'white',
        paddingStart:5, 
        marginBottom:15
    },

    button:{
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 15,
        borderColor:'#acacac',
        borderWidth: 3,
        marginVertical:20,
        marginHorizontal:20,
        backgroundColor: 'rgba(255,255,255,0.2)',
      },
      
    textButton:{
        fontSize: 18,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
});