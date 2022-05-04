import React, {useState} from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import stylePesquisa from '../styles/searchBar';


export default function SearchBar(){

    const [textPesquisa, setTextPesquisa] = useState('');

    return(

        <View style={stylePesquisa.containerSearch}>
            <TextInput 
            style={stylePesquisa.input} 
            placeholder='Pesquisar' 
            autoCapitalize='none' 
            autoCorrect={false}
            value={textPesquisa} 
            onChangeText={(value) => setTextPesquisa(value)}
            />
            <TouchableOpacity style={{width:'10%', height:'100%'}}>
                <Ionicons name='search' size={30} color='#662d91' onPress={() => {}} />
            </TouchableOpacity>
        </View>
    );
}