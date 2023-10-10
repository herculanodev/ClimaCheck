import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';
import VoltarBtn from '../components/VoltarBtn'; // Importe o componente VoltarBtn

function ForgotPassword({ navigation }) {
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');

  const handleConfirm = () => {
    // Adicione aqui a lógica para confirmar o email
    // Por exemplo, enviar um email de redefinição de senha
    // ou mostrar uma mensagem de confirmação
  };

  return (
    <View style={styles.container}>
      {/* Substitua a Appbar padrão pelo componente VoltarBtn */}
      <VoltarBtn navigation={navigation} />

      <Appbar.Header style={styles.header}>
        <Appbar.Content title="Esqueci Minha Senha" />
      </Appbar.Header>

      <TextInput
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
        style={styles.input}
      />

      <TextInput
        placeholder="Confirmar Email"
        onChangeText={(text) => setConfirmEmail(text)}
        value={confirmEmail}
        style={styles.input}
      />

      <Button
        title="Cancelar"
        onPress={handleConfirm}
        style={{ ...styles.confirmButton, backgroundColor: 'black' }}
        color="black"
      />

      <Button
        title="Confirmar"
        onPress={handleConfirm}
        style={{ ...styles.confirmButton, backgroundColor: 'black' }}
        color="black"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'black', // Fundo laranja
  },
  header: {
    backgroundColor: 'black', // Cabeçalho preto
  },
  input: {
    backgroundColor: '#FDBF75',
    marginBottom: 30,
    padding: 10,
    borderRadius: 10,
    width: '100%',
  },
  confirmButton: {
    backgroundColor: '', // Fundo preto para o botão de confirmar
  },
});

export default ForgotPassword;

