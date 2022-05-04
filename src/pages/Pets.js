import React, {useState} from 'react';
import { View } from 'react-native';

import Pesquisa from '../components/Search';
import styleHome from '../styles/home';
import PetsList from '../components/PetsList';


export default function PetsScreen() {

    const [listadePets, setListaPets] = useState([
    {
        nome: 'Mabel',
        raca: 'Pastor Alemão',
        sexo: 'Fêmea',
        idade: '1 ano',
        castrado: 'Sim',
        Vacinas:'V10, Antirabica, Gripe Canina',
        Motivo:'Donos se mudaram e não puderam levar.',
        Informacoes:'Manço, carinhosa, bricalhona.',
        Contatos: 'algumcanil@exemplo.com / (19) 99091-9090',
        dataPostagem: '20/11/21',
        imagens: require('../img/dog3.jpg')
    },

    // {
    // id: '2',
    // nome: 'Elvis',
    // raca: 'Beagle',
    // sexo: 'Macho',
    // idade: '1 ano',
    // castrado: 'Sim',
    // Vacinas:'V10, Antirabica, Gripe Canina',
    // Motivo:'Donos se mudaram e não puderam levar.',
    // Informacoes:'Manço, carinhosa, bricalhona.',
    // Contatos: 'algumcanil@exemplo.com / (19) 99091-9090',
    // dataPostagem: '20/11/21',
    // imagens: require('../img/dog1.jpg')
    // },

    // {
    // id: '3',
    // nome: 'Dora',
    // raca: 'Vira-lata',
    // sexo: 'Fêmea',
    // idade: '2 ano',
    // castrado: 'Sim',
    // Vacinas:'V10, Antirabica, Gripe Canina',
    // Motivo:'Donos se mudaram e não puderam levar.',
    // Informacoes:'Manço, carinhosa, bricalhona.',
    // Contatos: 'algumcanil@exemplo.com / (19) 99091-9090',
    // dataPostagem: '20/11/21',
    // imagens: require('../img/dog5.jpeg')
    // },

    ]);

    return (
        <View style={{...styleHome.baseLists, marginTop:25}}>
        <Pesquisa></Pesquisa>
        <PetsList listaPets={listadePets}></PetsList>
        </View>
    );
}