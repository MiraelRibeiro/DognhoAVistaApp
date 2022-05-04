import React, {useState} from 'react';
import { View } from 'react-native';

import Pesquisa from '../components/Search';
import HelpList from '../components/HelpList';
import styleHome from '../styles/home';

export default function HelpScreen() {

    const [listadePets, setListaPets] = useState([
      {
          nome: 'Mingal',
          raca: 'Vira-lata',
          sexo: 'Macho',
          idade: '4 anos',
          dataPostagem: '02/11/21',
          imagens: require('../img/01dog.jpeg')
      },
  
      {
        nome: 'Pipoca',
        raca: 'Vira-lata',
        sexo: 'Macho',
        idade: '2 anos',
        dataPostagem: '02/08/21',
        imagens: require('../img/gato01.jpg')
      },
  
      {
        nome: 'Brankinha',
        raca: 'Labrador',
        sexo: 'Fêmea',
        idade: '3 anos',
        dataPostagem: '20/06/21',
        imagens: require('../img/02dog.jpg')
      },
  
    ]);
  
    return (
      <View style={{...styleHome.baseLists, marginTop:25}}>
        <Pesquisa></Pesquisa>
        <HelpList listaAjuda={listadePets}></HelpList>
      </View>
    );
  }