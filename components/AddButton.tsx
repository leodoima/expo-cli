import React from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';
import {FontAwesome5, Feather } from '@expo/vector-icons';

const AddButton: React.FC = () => (
      <View style={{position: "absolute", alignItems: "center"}}>
        <View style={styles.button}>
          <TouchableHighlight underlayColor="#7F58FF">
            <View>
              <FontAwesome5 name="plus" size={24} color="#FFF"></FontAwesome5>
            </View>
          </TouchableHighlight>
        </View>
      </View>
);



const styles = StyleSheet.create({
  button: {
    backgroundColor: "#7F58FF",
    alignItems: "center",
    justifyContent: "center",
    width: 52,
    height: 52,
    borderRadius: 36,
    position: "absolute",
    top: -50,
    shadowColor: "#7F58FF",
    shadowRadius: 5,
    shadowOffset:{width: 10, height: 10},
    shadowOpacity: 0.3,
    borderWidth: 3,
    borderColor: "#fff"
  }
});

export default AddButton;