import React from 'react';
import {View, StatusBar} from 'react-native';

const Screen: React.FC = () => (
  <View style={{flex: 1, backgroundColor: "#161924"}}>
    <StatusBar backgroundColor="#161924" barStyle="light-content"></StatusBar>
  </View>
);

export default Screen;