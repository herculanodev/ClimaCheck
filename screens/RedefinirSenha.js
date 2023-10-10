import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, TextInput } from 'react-native';
import VoltarBtn from '../components/VoltarBtn';

function RedefinirSenha() {
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  return (
    <View style={styles.container}>
      <VoltarBtn />
      <Text style={styles.title}>Redefinir Senha</Text>

      <TextInput
        style={styles.input}
        placeholder="Nova Senha"
        secureTextEntry={true}
        value={newPassword}
        onChangeText={(text) => setNewPassword(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Confirmar Nova Senha"
        secureTextEntry={true}
        value={confirmNewPassword}
        onChangeText={(text) => setConfirmNewPassword(text)}
      />

      <TouchableOpacity style={styles.btn}>
        Cancelar
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnConfirmar}>
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
    color: 'white',
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnConfirmar: {
    color: '#F00',
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default RedefinirSenha;
