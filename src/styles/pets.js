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

    btnVoltar:{backgroundColor:'rgba(0,0,0,0.3)', width:'11%', height:'5%', marginStart:5, marginBottom:5},

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
        fontSize:16, 
    },

    petInfo:{
        textAlign: 'right',
        color: '#662d91',
        fontSize:14,
    },
    
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 10, 
      backgroundColor: "rgba(165,165,165,0.2)",
      width:'100%'
    },
    
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 15,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
      width:'90%'
    },

    button: {
      borderRadius: 20,
      alignSelf:'flex-start',
      padding: 10,
      elevation: 2,
      marginBottom:2,
      marginStart:10
    },

    buttonClose: {
      backgroundColor: "#2196F3",
    },

    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
});