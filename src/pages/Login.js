import React, {useState} from 'react';
import { Text, Image, View, TouchableOpacity, Pressable, TextInput} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styleLogin from '../styles/loginUser'


export default function Login(){
    return(
        <View style={{flex:1, width:'100%', justifyContent:'center', alignItems:'center'}}>
            <LinearGradient
                style={{height:'100%', width:'100%'}}

                start={{x:1,y:1}}
                
                end={{x:0,y:0}}              
                colors={['#1385a8','#511ea2']}
            >
                <Image source={require('../Img/login.png')} style={{width:125, height:125, alignSelf:'center', marginTop:30}}  />              

                <View style={{marginTop:30, marginHorizontal:20, flexDirection:'column'}}>
                    <TextInput placeholder='E-mail:' style={styleLogin.input} />

                    <TextInput placeholder='Senha:' style={styleLogin.input} />
                </View>

                <View style={{flexDirection:'row', alignSelf:'center', margin:5}}>
                    <TouchableOpacity>
                        <Text style={{color:'black', fontSize:15}}>Criar uma conta</Text>
                    </TouchableOpacity>

                    <Text style={{color:'gray', fontSize:15}}> | </Text>

                    <TouchableOpacity>
                        <Text style={{color:'white', fontSize:15}}>Recuperar senha</Text>
                    </TouchableOpacity>
                </View>

                <Pressable style={styleLogin.button}>
                    <Text style={styleLogin.textButton}>ENTRAR</Text>
                </Pressable>

            </LinearGradient>
        </View>
        
    );
}