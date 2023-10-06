import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import VoltarBtn from '../components/VoltarBtn'

function Config (){
  return(
    <View style={styles.container}>
      < VoltarBtn />
      <Text style={styles.title}>
        Configurações
      </Text>

      <TouchableOpacity style={styles.btn}>
        Email
      </TouchableOpacity>

      <TouchableOpacity style={styles.btn}>
        Telefone
      </TouchableOpacity>

      <TouchableOpacity style={styles.btn}>
        Nova Senha
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnSair}>
        Sair
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

    btnSair: {
      color: '#F00',
      padding: 30,
      alignItems: 'center',
      justifyContent:'center'
    }
  }
)
export default Config