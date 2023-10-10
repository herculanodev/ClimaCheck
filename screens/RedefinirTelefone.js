import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, TextInput } from 'react-native';
import VoltarBtn from '../components/VoltarBtn';

function RedefinirTelefone() {
  const [newPhoneNumber, setNewPhoneNumber] = useState('');

  const handleConfirm = () => {
    // Adicione aqui a lógica para confirmar o novo número de telefone
    // Por exemplo, enviar um código de verificação para o novo número
    // e redirecionar para a próxima etapa.
  };

  return (
    <View style={styles.container}>
      <VoltarBtn />
      <Text style={styles.title}>Redefinir Telefone</Text>

      <TextInput
        style={styles.input}
        placeholder="Novo Número de Telefone"
        keyboardType="phone-pad"
        value={newPhoneNumber}
        onChangeText={(text) => setNewPhoneNumber(text)}
      />

      <TouchableOpacity style={styles.btn} onPress={handleConfirm}>
        Confirmar
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0D0D',
    padding: 20,
  },
  title: {
    color: 'orange',
    fontSize: 36,
    marginTop: 20,
    marginBottom: 40,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#FDBF75',
    marginBottom: 30,
    padding: 10,
    borderRadius: 10,
    width: '100%',
  },
  btn: {
    backgroundColor: '#759EFF', // Cor do botão de confirmação
    color: 'white',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
});

export default RedefinirTelefone;
