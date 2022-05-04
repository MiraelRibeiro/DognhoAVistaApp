import React, {useState} from 'react';
import { Modal, Pressable, View, Text } from 'react-native';
import Cadastro from '../pages/CadastroPet'
import stylePet from '../styles/cadastroPet';

export default function ModalCadastro(props){

    return(
        <View style={stylePet.centeredView}>
            <Modal
                animationType="slide"
                transparent={false}
                visible={props.visible}
                onRequestClose={() => {
                props.setVisible(!props.visible);
                }}
            >    
                <Pressable 
                    style={stylePet.button}
                    onPress={() => props.setVisible(!props.visible)}>
                        <Text style={stylePet.textStyle}>Voltar</Text>
                </Pressable>     
                <Cadastro />
            </Modal>
        </View>
        
    );
}