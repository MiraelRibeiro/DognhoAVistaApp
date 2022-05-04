import React from 'react';
import { ScrollView, Text, Image, View, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import stylePostagem from "../styles/postagem"

export default function PetsOptionList(props) {

    var lista = props.listaPets;    
    
    return(              
            <ScrollView contentContainerStyle={{padding:1}} style={{width:'100%'}} >                      
                {
                    lista.map((val) => {
                        return(
                            <View style={{paddingBottom:15, alignContent:'center'}}> 
                                <View style={stylePostagem.modalContainer}>    
                    
                                    <View style={{height:"100%"}}>
                                        <Image style={stylePostagem.imagem} source={val.imagens}/>
                                        
                                        <View style={stylePostagem.iconesView}>
                                            <Ionicons size={35} color='#662d91' style={stylePostagem.icone} name='chatbubble-ellipses-outline' />
                                            <Ionicons size={35} color='#662d91' name='share-social' style={stylePostagem.icone} />
                                            <Ionicons size={35} color='#662d91' name='star-outline' style={stylePostagem.icone} />                
                                        </View>

                                        <View style={stylePostagem.informacoes}>
                                            <Text>{val.nome}</Text>
                                            <Text>{val.raca}</Text>
                                            <Text>{val.sexo}</Text>
                                            <Text>{val.idade}</Text>
                                            <Text>{val.castrado}</Text>
                                            <Text>{val.Vacinas}</Text>
                                            <Text>{val.Motivo}</Text>
                                            <Text>{val.Informacoes}</Text>
                                            <Text>{val.Contatos}</Text>
                                            <Text>{val.dataPostagem}</Text>
                                        </View>
                                    </View>    
                                        
                                
                                </View>

                                <TouchableOpacity 
                                    style={{
                                        alignSelf:'center',
                                        borderColor:'#003471', 
                                        borderRadius:10, 
                                        borderWidth:3,
                                        width:'90%',
                                        marginTop:10,
                                        marginBottom:20,
                                        alignItems:'center',
                                        height:40,
                                        }}>
                                    <View style={{flexDirection:'row', alignItems:'baseline'}}>
                                        <Text style={{color:'#003471', fontSize:25, textAlign:'center', fontWeight:'bold', marginEnd:10}}>ADOTE</Text>
                                        <Ionicons size={30} name='md-paw' color='#003471'/>
                                    </View>
                                </TouchableOpacity>
                            
                            </View>
                        );                    
                    })
                }                
            </ScrollView>
        
    )   
}