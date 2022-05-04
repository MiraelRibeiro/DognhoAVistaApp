import React, {useState} from 'react';
import { View } from 'react-native';

import Pesquisa from '../components/Search';
import styleHome from '../styles/home';
import FavoriteList from '../components/Favorite';

export default function FavoriteScreen() {

    const [listadePets, setListaPets] = useState([
      {
          nome: 'Mabel',
          raca: 'Pastor Alemão',
          sexo: 'Fêmea',
          idade: '1 ano',
          dataPostagem: '20/11/21',
          imagens: require('../img/dog3.jpg')
      },
  
    ]);
    
    return (
      <View style={{...styleHome.baseLists, marginTop:25}}>
        <Pesquisa></Pesquisa>
        <FavoriteList favoritos={listadePets}></FavoriteList>
      </View>
    );
  }