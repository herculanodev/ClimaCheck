import { Text, SafeAreaView, StyleSheet } from 'react-native'
import Registrar from './screens/Registrar'
import ForgotPassword from './screens/ForgotPassword'
import Login from './screens/Login'
import Home from './screens/Home'
import Config from './screens/Config'
import RedefinirEmail from './screens/RedefinirEmail'
import RedefinirSenha from './screens/RedefinirSenha'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      < RedefinirSenha />
    </SafeAreaView>
  );
}

styles = StyleSheet.create({
  
})