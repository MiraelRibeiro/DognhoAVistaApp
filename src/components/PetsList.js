import React, {useState} from 'react';
import { ScrollView, Text, Image, View, TouchableOpacity, Pressable, Alert } from 'react-native';
import stylePet from "../styles/pets";
import Postagem from '../pages/Postagem';
import { Modal } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

// function AbrirModal(props) {

//     var visible = props?.visible;
//     //var item = props?.item;
    
//     return(
//         <View style={stylePet.centeredView}>
//             <Modal
//                 animationType="slide"
//                 transparent={true}
//                 visible={visible}
//                 onRequestClose={() => { !visible }}
//             >
//                 <View style={stylePet.centeredView}>
//                 <View style={stylePet.modalView}>
//                     <Pressable
//                     style={[stylePet.button, stylePet.buttonClose]}
//                     onPress={() => visible=false}
//                     >
//                         <Text style={stylePet.textStyle}>Voltar</Text>
//                     </Pressable>
//                     {/* <Postagem listaPets={item} ></Postagem> */}
//                 </View>
//                 </View>
                
//             </Modal>                                        
//         </View>
//     );
    
// }

export default function PetsOptionList(props) {

    var lista = props.listaPets;
    
    const [visible, setVisible] = useState(false);  

    const abrirModal = () => {
        setVisible(!visible)        
    }

    return(  
              
        <ScrollView contentContainerStyle={{padding:5}} style={stylePet.containerScroll}>        
            
            {
                lista.map((val) => {
                    return(
                        <View style={{paddingBottom:15, alignContent:'center'}}> 
                            <Image style={stylePet.imgPet} source={val.imagens}/>
                            
                            <TouchableOpacity style={{backgroundColor:'white',padding:5}} onPress={() => abrirModal()}>
                                {
                                    (visible)?
                                    <View style={stylePet.centeredView}>
                                        <Modal
                                            animationType="slide"
                                            transparent={true}
                                            visible={visible}
                                            onRequestClose={() => { !visible }}
                                        >
                                            <View style={stylePet.centeredView}>
                                            <View style={stylePet.modalView}>
                                                <Pressable
                                                style={[stylePet.button, stylePet.buttonClose]}
                                                onPress={() => abrirModal()}
                                                >
                                                    <Text style={stylePet.textStyle}>Voltar</Text>
                                                </Pressable>
                                                <Postagem listaPets={lista} ></Postagem>
                                            </View>
                                            </View>
                                            
                                        </Modal>                                        
                                    </View>
                                    : <View></View>
                                }
                                <Text style={stylePet.namePet}>{val.nome}</Text>
                                
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
                            </TouchableOpacity>
                        
                        </View>
                    );                    
                })
            }                
        </ScrollView>
    )   
}