import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    Input:{
        backgroundColor:'white', 
        borderRadius:15, 
        margin:3, 
        height:33, 
        paddingStart:5
    },

    criaContaView:{
        alignItems:'center', 
        marginBottom:20, 
        marginTop:10
    },

    criaContaText:{
        fontSize:30, 
        color:'white'
    },

    tipoConta:{
        flex:1, 
        marginHorizontal:5,
    },

    viewTipoConta:{
        flexDirection:'row', 
        marginBottom:10, 
        borderBottomWidth:1
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