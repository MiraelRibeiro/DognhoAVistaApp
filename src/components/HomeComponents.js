import React, {useState} from 'react';
import { TouchableOpacity, ScrollView, Text, Modal, Pressable, Alert, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styleHome from "../styles/home";
import Cadastro from '../pages/CadastroPet'
import stylePet from '../styles/cadastroPet';
import ModalCadastro from './ModalCadastro';


export default function HomeOptions(){
    
    const [visible, setVisible] = useState(false);

    const PetCadastro =() => {
        setVisible(!visible);
    }
    
    return(
        <ScrollView contentContainerStyle={{padding:20}} style={styleHome.containerScroll}>

            <TouchableOpacity style={styleHome.btnNavigation}>
                <Ionicons name='home-outline' size={29} color='white' />
                <Text style={styleHome.textBtnNavigation}>Minhas Postagens</Text>                
            </TouchableOpacity>
            
            <TouchableOpacity style={styleHome.btnNavigation}>
                <Ionicons name='home-outline' size={29} color='white' />
                <Text style={styleHome.textBtnNavigation}>Meus Pets</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styleHome.btnNavigation} onPress={() => PetCadastro()}>
                <Ionicons name='home-outline' size={29} color='white' />
                <Text style={styleHome.textBtnNavigation}>Cadastrar Pets</Text>                
            </TouchableOpacity> 

            {
                (visible)?
                <ModalCadastro visible={visible} setVisible={setVisible} />
                : 
                <View></View>
            }
        </ScrollView>
        
    );
    
}

