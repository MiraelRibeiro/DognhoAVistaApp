import React, {useState} from 'react';
import { ScrollView, Text, View, TouchableOpacity, Pressable} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import Pessoa from '../components/CadastroPessoa';
import Instituicao from '../components/CadastroInst';
import styleCadastro from '../styles/cadastroUser';

export default function Cadastro(){

    const [cadastroPessoa, setCadastroPessoa] = useState(true);

    // acrescentar as "consts" que receberão os dados para serem salvos

    return(
        <View style={{height:'100%', width:'100%'}}>

            <LinearGradient 
                style={{height:'100%', width:'100%', flex:1}}

                    start={{x:1,y:1}}
                    
                    end={{x:0,y:0}}              
                    colors={['#1385a8','#511ea2']}
            >
                    

                <ScrollView >
                    
                    <View style={styleCadastro.criaContaView}>
                        <Text style={styleCadastro.criaContaText}>Criar Conta</Text>
                    </View>

                    <View style={{width:'100%', paddingHorizontal:10}}>
                        {
                                (cadastroPessoa)?
                                <View style={styleCadastro.viewTipoConta}>
                                    <TouchableOpacity style={{...styleCadastro.tipoConta, alignItems:'center', backgroundColor:'rgba(255,255,255,0.7)'}} onPress={()=> setCadastroPessoa(true)} >                        
                                        <Text style={{color:'#5c0ca1', fontSize:20}}>Pessoa</Text>  
                                    </TouchableOpacity>

                                    <TouchableOpacity style={{...styleCadastro.tipoConta, alignItems:'flex-start'}} onPress={()=> setCadastroPessoa(false)} >
                                        <Text style={{color:'white', fontSize:20}}>Instituição</Text>
                                    </TouchableOpacity> 
                                </View> 
                                :
                                <View style={styleCadastro.viewTipoConta}>
                                    <TouchableOpacity style={{...styleCadastro.tipoConta, alignItems:'center'}} onPress={()=> setCadastroPessoa(true)} >                        
                                        <Text style={{color:'white', fontSize:20}}>Pessoa</Text>  
                                    </TouchableOpacity>

                                    <TouchableOpacity style={{...styleCadastro.tipoConta, alignItems:'flex-start', backgroundColor:'rgba(255,255,255,0.7)'}} onPress={()=> setCadastroPessoa(false)} >
                                        <Text style={{color:'#5c0ca1', fontSize:20, paddingStart:10}}>Instituição</Text>
                                    </TouchableOpacity> 
                                </View>

                        }
                                    
                    </View>

                    {
                        (cadastroPessoa)
                        ?
                            <Pessoa />
                        :
                            <Instituicao />
                    }

                    <Pressable style={styleCadastro.button}>
                        <Text style={styleCadastro.textButton}>CADASTRAR</Text>
                    </Pressable>
                            
    
                </ScrollView>
            </LinearGradient> 
            
        </View>
        
    );
}