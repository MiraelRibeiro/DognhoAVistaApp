import React, {useState} from 'react';
import { Text, Image, View, TouchableOpacity, Pressable, TextInput, ScrollView} from 'react-native';
import { RadioButton } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {TextInputMask} from 'react-native-masked-text';

import styleCadastro from '../styles/cadastroPet';

export default function PetCadastro(){

    const [date, setDate] = useState('');
    const [checkNome, setCheckNome] = useState(false);
    const [checkNascimento, setCheckNascimento] = useState(false);
    const [checkMacho, setCheckMacho] = useState(false);
    const [checkFemea, setCheckFemea] = useState(false);
    const [checkV10, setCheckV10] = useState(false);
    const [checkGripeC, setCheckGripeC] = useState(false);
    const [checkGiardiase, setCheckGiardiase] = useState(false);
    const [checkRabica, setCheckRabica] = useState(false);
    const [checkTriplice, setCheckTriplice] = useState(false);
    const [checkQuadrupla, setCheckQuadrupla] = useState(false);
    const [checkQuintupla, setCheckQuintupla] = useState(false);
    const [checkDoacao, setCheckDoacao] = useState(false);
    const [checkAjuda, setCheckAjuda] = useState(false);
    const [checkMeuContato, setCheckMeuContato] = useState(false);
    const [checkOutroContato, setCheckOutroContato] = useState(false);
    
    return(
        <View style={styleCadastro.containerAll}>
            <View style={styleCadastro.viewCabecalho}>
                <Text style={styleCadastro.textCabecalho}>Cadastre seu Pet</Text>
            </View>

            <ScrollView style={styleCadastro.scrollContainer}>
                <View style={styleCadastro.viewContainer}>
                    <Text style={styleCadastro.textRef}>Imagens:</Text>
                    <TouchableOpacity style={{marginStart:5}}><Ionicons name='images-outline' size={30} /></TouchableOpacity>
                </View>  

                <Text style={{...styleCadastro.textRef, paddingStart:5}} >Nome do Pet:</Text>

                <View style={styleCadastro.viewContainer} >
                        
                    <TextInput style={styleCadastro.input} />

                    <Text style={styleCadastro.textOpt} >Não Possui:</Text>
                    <RadioButton value={checkNome}
                        onValueChange={setCheckNome} />
                </View>

                <View style={styleCadastro.viewContainer} >
                    <Text style={styleCadastro.textRef} >Raça:</Text>
                    <TextInput style={{...styleCadastro.input, marginEnd:90}} />
                </View>

                <View style={styleCadastro.viewContainer} >
                    <Text style={styleCadastro.textRef} >Nascimento:</Text>
                    <TextInputMask 
                        type={'datetime'}
                        options={{
                            format:'DD/MM/YYYY'
                        }}
                        value={date}
                        onChangeText={ date => setDate(date)}
                        style={styleCadastro.input}
                        placeholder=' __ /__ /____  '
                        />
                    <Text style={styleCadastro.textOpt}>Desconhecido:</Text>
                    <RadioButton value={checkNascimento}
                        onValueChange={setCheckNascimento} />
                </View>

                <View style={styleCadastro.viewContainer}>
                    <Text style={styleCadastro.textRef} >Sexo:</Text> 
                    <Text style={styleCadastro.textOpt2} >Macho:</Text>                    
                    <RadioButton value={checkMacho}
                        onValueChange={setCheckMacho} />

                    <Text style={styleCadastro.textOpt2} >Fêmea:</Text>                    
                    <RadioButton value={checkFemea}
                        onValueChange={setCheckFemea} />
                </View>

                <View style={styleCadastro.viewContainer}>                    
                    <Text style={styleCadastro.textRef} >Castradodo(a):</Text> 
                    <Text style={styleCadastro.textOpt2} >Sim:</Text>                   
                    <RadioButton value={checkMacho}
                        onValueChange={setCheckMacho} />

                    <Text style={styleCadastro.textOpt2} >Não:</Text>                    
                    <RadioButton value={checkMacho}
                        onValueChange={setCheckMacho} />
                </View>
                
                <Text style={{...styleCadastro.textRef, paddingStart:5}} >Vacinas tomadas:</Text>
                <View style={styleCadastro.viewContainer}>                    
                    <View style={styleCadastro.viewContainer}>
                        <View style={{flex:1, margin:5}}>
                            <Text>V8/V10:</Text>
                            <RadioButton value={checkV10}
                                onValueChange={setCheckV10} />
                            
                            <Text>Gripe Canina:</Text>
                            <RadioButton value={checkGripeC}
                                onValueChange={setCheckGripeC} />

                            <Text>Giardíase:</Text>
                            <RadioButton value={checkGiardiase}
                                onValueChange={setCheckGiardiase} />     

                            <Text>Anti-rábica:</Text>
                            <RadioButton value={checkRabica}
                                onValueChange={setCheckRabica} />                       
                            
                        </View>

                        <View style={{flex:1, margin:5}} >
                            <Text>Triplice felina:</Text>
                            <RadioButton value={checkTriplice}
                                onValueChange={setCheckTriplice} />

                            <Text>Quadrupla felina:</Text>
                            <RadioButton value={checkQuadrupla}
                                onValueChange={setCheckQuadrupla} />  
                                
                            <Text>Quintupla felina:</Text>
                            <RadioButton value={checkQuintupla}
                                onValueChange={setCheckQuintupla} /> 

                                
                            <View>
                                <Text>Outras:</Text>
                                <TextInput style={styleCadastro.inputOutras} multiline={true} />
                            </View>                         
                            
                        </View>
                        
                    </View>
                </View>


                <Text style={{...styleCadastro.textRef, paddingStart:5}}>Objetivo:</Text>
                <View style={styleCadastro.viewContainer} >
                    <View style={styleCadastro.viewContainer} >
                        <Text style={styleCadastro.textOpt2} >Doação:</Text>
                        <RadioButton value={checkDoacao}
                            onValueChange={setCheckDoacao} />

                        <Text style={styleCadastro.textOpt2} >Ajuda para cuidados:</Text>
                        <RadioButton value={checkAjuda}
                            onValueChange={setCheckAjuda} />
                    </View>
                </View>


                <Text style={{...styleCadastro.textRef, paddingStart:5}}>Informações:</Text>
                <View style={styleCadastro.viewContainer}>
                    <TextInput style={{...styleCadastro.inputOutras, height:50}}/>
                </View>

                <Text style={{...styleCadastro.textRef, paddingStart:5}}>Contatos:</Text>
                <View style={{...styleCadastro.viewContainer, marginBottom:30}}>
                        <Text style={styleCadastro.textOpt2} >Meu contato:</Text>
                        <RadioButton value={checkMeuContato}
                            onValueChange={setCheckMeuContato} />

                        <Text style={styleCadastro.textOpt2} >Adicionar outro:</Text>
                        <RadioButton value={checkOutroContato}
                            onValueChange={setCheckOutroContato} />
                </View>
                
            </ScrollView>

            <View style={{marginBottom:100 }}>
                
                    <Pressable style={styleCadastro.pressableButton}>
                                <Text style={styleCadastro.textButton}>CADASTRAR</Text>
                    </Pressable>
            </View>

            
        </View>
    );
}