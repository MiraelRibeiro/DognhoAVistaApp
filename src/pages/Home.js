import * as React from 'react';
import { View } from 'react-native';
import styleHome from '../styles/home';
import HomeOptions from '../components/HomeComponents';

export default function HomeScreen() {
    return (
      <View style={styleHome.base}>
        <HomeOptions></HomeOptions>  
      </View>
    );
  }