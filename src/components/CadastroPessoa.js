import React from 'react';
import { View, TextInput } from 'react-native';
import styleCadastro from '../styles/cadastroUser'

export default function Pessoa(){
    return(

        <View style={{flexDirection:'column', padding:10}}> 
            <TextInput style={styleCadastro.Input} placeholder='Nome Completo:' />

            <View style={{flexDirection:'row'}}>
                <TextInput style={{...styleCadastro.Input, flex:1}} placeholder='CPF:' />
                <TextInput style={{...styleCadastro.Input, flex:1}} placeholder='Nascimento:' />
            </View>

            <TextInput style={styleCadastro.Input} placeholder='E-mail:' />

            <View style={{flexDirection:'row'}}>
                <TextInput style={{...styleCadastro.Input, flex:1}} placeholder='Senha:' />
                <TextInput style={{...styleCadastro.Input, flex:1}} placeholder='Conf. Senha:' />
            </View>

            <TextInput style={styleCadastro.Input} placeholder='Rua:' />
            <TextInput style={styleCadastro.Input} placeholder='Bairro:' />
            <TextInput style={styleCadastro.Input} placeholder='Cidade:' />

            <View style={{flexDirection:'row'}}>
                <TextInput style={{...styleCadastro.Input, flex:1}} placeholder='UF' />
                <TextInput style={{...styleCadastro.Input, flex:1}} placeholder='País' />
                <TextInput style={{...styleCadastro.Input, flex:1}} placeholder='Cep:' />
            </View>
        </View>
    );
}