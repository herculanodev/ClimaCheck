import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import VoltarBtn from '../components/VoltarBtn'; // Importe o componente VoltarBtn

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
      <View style={styles.header}>
        <VoltarBtn navigation={navigation} /> {/* Adicione o componente VoltarBtn aqui */}
      </View>
      <Text style={styles.headerTitle}>Deseja mesmo sair da sua conta?</Text>
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
    paddingBottom: 50, // Espaçamento inferior para os botões
  },
  header: {
    flexDirection: 'row', // Disposição horizontal
    alignItems: 'center', // Centraliza verticalmente
    backgroundColor: 'black', // Cor de fundo do cabeçalho
    padding: 16,
  },
  headerTitle: {
    fontSize: 24,
    color: 'orange', // Alterado para laranja
    textAlign: 'center', // Centraliza horizontalmente
    marginTop: 20, // Espaçamento superior
  },
  buttonContainer: {
    alignItems: 'center', // Centraliza horizontalmente
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
