import React, { useState } from 'react';

import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

import { Appbar } from 'react-native-paper';

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
      <Appbar.Header style={styles.header}>
        <Appbar.Action
          icon="arrow-left"
          onPress={() => navigation.goBack()}
          accessibilityLabel="Voltar"
          accessibilityRole="button"
          accessibilityHint="Voltar para a tela anterior">
          <Text style={{ color: 'white', marginLeft: 4 }}>Voltar</Text>
        </Appbar.Action>

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
    borderBottomWidth: 10,

    marginBottom: 16,

    backgroundColor: '#FDBF75', // Fundo dos campos de entrada branco
  },

  confirmButton: {
    backgroundColor: '', // Fundo preto para o botão de confirmar
  },
});

export default ForgotPassword;
