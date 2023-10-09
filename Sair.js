import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const LogoutScreen = ({ navigation }) => {
  const handleLogout = () => {
    // Adicione aqui a lógica para sair da conta, se necessário.
    // Neste exemplo, estamos apenas navegando de volta para a tela anterior.
    navigation.goBack();
  };

  const handleCancel = () => {
    // Adicione aqui a lógica para cancelar a operação e voltar para a tela anterior, se necessário.
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Deseja mesmo sair da sua conta?</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.cancelButton]}
          onPress={handleCancel}>
          <Text style={[styles.buttonText, styles.whiteText]}>Cancelar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.logoutButton]}
          onPress={handleLogout}>
          <Text style={[styles.buttonText, styles.redText]}>Sair</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center', // Centraliza verticalmente
    alignItems: 'center', // Centraliza horizontalmente
    paddingBottom: 50, // Espaçamento inferior para os botões
  },
  text: {
    fontSize: 36,
    color: 'white',
    marginBottom: 30,
    paddingVertical: 20, // Adicione espaço vertical adicional
  },
  buttonContainer: {
    marginTop: 50, // Adicione um espaçamento superior para os botões
  },
  button: {
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 30,
    marginBottom: 10,
    width: 200,
    alignItems: 'center',
  },
  cancelButton: {
    backgroundColor: 'transparent', // Sem fundo
  },
  logoutButton: {
    backgroundColor: 'transparent', // Sem fundo
    borderWidth: 2, // Largura da borda
  },
  buttonText: {
    fontWeight: 'bold',
  },
  whiteText: {
    color: 'white',
  },
  redText: {
    color: 'red',
  },
});

export default LogoutScreen;
