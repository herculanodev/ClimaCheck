import React from 'react';
import { View, TouchableOpacity, StyleSheet} from 'react-native';
import Colors from '../assets/Colors'

function VoltarBtn(){
  return(
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn}>
        Voltar
      </ TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'start',
  },

  btn:{
    color: '#EEEEEE',
    backgroundColor: '#262626',
    borderRadius: 50,
    width: 90,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  }
})

export default VoltarBtn;