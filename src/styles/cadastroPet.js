import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  
  containerAll:{
    backgroundColor:'#bcbcf9', 
    justifyContent:'center', 
    alignItems:'center'
  },

  viewCabecalho:{
    backgroundColor:'#cfcffb', 
    width:'100%', 
    alignItems:'center'
  },

  textCabecalho:{
    color:'#662d91', 
    fontSize:40
  },

  scrollContainer:{
    backgroundColor:'white',
    width:'97%', 
    height:'80%',
  },

  viewContainer:{
    flexDirection:'row', 
    alignItems:'baseline', 
    padding:5,
  },

  textRef:{
    fontSize:20, 
    color:'#662d91',
  },

  textOpt:{
    marginStart:3,
    fontSize:12, 
    color:'black'
  },

  textOpt2:{
    marginStart:5,
    fontSize:18, 
    color:'black'
  },

  input:{
    borderColor:'#662d91',
    borderWidth:0.5,
    borderRadius:10,
    flex:1,
    marginHorizontal:5,
    paddingHorizontal:3,
    color:'black', 
    textAlign:'center',
  },

  inputOutras:{
    borderColor:'#662d91',
    borderWidth:0.5,
    borderRadius:10,
    flex:1,
    marginHorizontal:5,
    paddingHorizontal:3,
    color:'black', 
    textAlign:'center',
  },

  pressableButton:{
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 15,
    borderColor:'#acacac',
    borderWidth: 3,
    marginVertical:10,
    marginHorizontal:20,
    backgroundColor: 'rgba(255,255,255,0.2)',
    width: 300
  },
  
  textButton:{
    fontSize: 18,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
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
      marginVertical:2,
      marginStart:10,
      backgroundColor: "#2196F3",
    },

    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
});