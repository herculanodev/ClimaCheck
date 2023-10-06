import { View, TouchableOpacity, Text, StyleSheet, TextInput } from 'react-native'
import VoltarBtn from '../components/VoltarBtn'

function RedefinirEmail(){
  return(
    <View style={styles.container}>
      < VoltarBtn />
      <Text style={styles.title}>
        Alterar Email
      </Text>

      

      <TouchableOpacity style={styles.btn}>
        Cancelar
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnConfirmar}>
        Confirmar
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      backgroundColor: '#0D0D0D', 
      padding: 20
    },

    title: {
      color: 'orange',
      fontSize: 36,
      marginTop: 20,
      marginBottom: 40,
      textAlign: 'center',
    },

    btn: {
      color: 'white',
      padding: 30,
      alignItems: 'center',
      justifyContent: 'center',
    },

    btnConfirmar: {
      color: '#F00',
      padding: 30,
      alignItems: 'center',
      justifyContent:'center'
    }
  }
)
export default RedefinirEmail