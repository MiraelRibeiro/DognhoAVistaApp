import React from 'react';
import { ScrollView, Text, Image, View, TouchableOpacity } from 'react-native';
import stylePet from "../styles/favorite";
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function FavoriteOptionList(props) {

    var lista = props.favoritos;

    return(  
              
        <ScrollView contentContainerStyle={{padding:5}} style={stylePet.containerScroll}>        
            
            {
                lista.map((val) => {
                    return(
                        <View style={{paddingBottom:15, alignContent:'center'}}> 
                            <Image style={stylePet.imgPet} source={val.imagens}/>
                            
                            <View style={{backgroundColor:'white',padding:5}}>
                                
                                <View style={{flexDirection:'row', alignContent:'center'}}>
                                    <View style={{width:'60%', alignItems:'flex-end'}}>
                                        <Text style={stylePet.namePet}>{val.nome}</Text>
                                    </View>

                                    <View style={stylePet.iconeEstrela}>
                                        <TouchableOpacity>
                                            <Ionicons name='star-sharp' size={30} color='gold'/>
                                        </TouchableOpacity>
                                    </View>    
                                </View>
                                
                                <View style={{flexDirection:'row', alignContent:'center'}}>
                                    <View  style={stylePet.dadosPet}>
                                        <View style={{flexDirection:'row', alignItems:'baseline'}}>
                                            <Text style={stylePet.petRef}>Raça: </Text> 
                                            <Text style={stylePet.petInfo}>{val.raca}</Text>                                            
                                        </View>

                                        <View style={{flexDirection:'row', alignItems:'baseline'}}>
                                            <Text style={stylePet.petRef}>Sexo: </Text> 
                                            <Text style={stylePet.petInfo}>{val.sexo}</Text>
                                        </View>
                                    
                                    </View>

                                    <View  style={stylePet.dadosPet}>
                                        
                                        <View style={{flexDirection:'row', alignItems:'baseline', alignContent:'flex-end'}}>
                                            <Text style={stylePet.petRef}>Idade: </Text> 
                                            <Text style={stylePet.petInfo}>{val.idade}</Text>
                                        </View>

                                        <View style={{flexDirection:'row', alignItems:'baseline'}}>
                                            <Text style={stylePet.petRef}>{val.dataPostagem}</Text>
                                        </View>
                                        
                                    </View>
                                </View>
                            </View>
                        
                        </View>
                    );                    
                })
            }                
        </ScrollView>
    )   
}