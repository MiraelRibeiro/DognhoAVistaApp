import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    
    containerScroll:{
        paddingTop:2,
        backgroundColor:'#bcbcf9'
    },

    imgPet:{
        width:'100%', //ajustar tamanho para porcentagem
        height: 200,
        marginBottom: 5
    },

    namePet:{
        fontSize:30, 
        textAlign:'center', 
        color:'#662d91'
    },

    dadosPet:{
        flexDirection:'column',
        alignItems:'baseline', 
        marginLeft:15,
        width:'50%'
    },

    petRef:{
        textAlign: 'auto',
        color: 'black',
        fontSize:18, 
    },

    petInfo:{
        textAlign: 'right',
        color: '#662d91',
        fontSize:16, 
    },

    iconeCoracao:{
        width:'40%', 
        alignItems:'flex-start', 
        paddingStart:20, 
        alignSelf:'center'
    }

});