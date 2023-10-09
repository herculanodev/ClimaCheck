import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const RedefinirTelefoneScreen = ({ navigation }) => {
  const handleConfirm = () => {
    // Adicione aqui a lógica para confirmar a redefinição de telefone
    // Você pode implementar a lógica de acordo com as necessidades do seu aplicativo.
  };

  const handleCancel = () => {
    // Adicione aqui a lógica para cancelar a operação e voltar para a tela anterior, se necessário.
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>Alterar Telefone</Text>
      </View>
      <View style={styles.content}>
        <TextInput
          style={[styles.input, styles.inputBackground]}
          placeholder="Digite seu novo número de telefone"
          keyboardType="numeric"
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, styles.cancelButton]}
            onPress={handleCancel}>
            <Text style={[styles.buttonText, styles.whiteText]}>Cancelar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.confirmButton]}
            onPress={handleConfirm}>
            <Text style={[styles.buttonText, styles.redText]}>Confirmar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    position: 'absolute', // Posicionamento absoluto
    top: 0, // Alinhe o topo do elemento com o topo do pai
    width: '100%', // Largura total
    backgroundColor: 'black',
    alignItems: 'center',
  },
  text: {
    fontSize: 36,
    color: 'white',
    marginBottom: 20, // Espaçamento inferior para afastar o texto do topo
    marginTop: 80, // Espaçamento superior
  },
  content: {
    alignItems: 'center', // Centraliza o conteúdo verticalmente
  },
  input: {
    width: 300,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 20,
    paddingHorizontal: 8,
    color: 'white',
  },
  inputBackground: {
    backgroundColor: 'orange', // Background laranja
  },
  buttonContainer: {
    marginTop: 50,
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
    backgroundColor: 'transparent',
  },
  confirmButton: {
    backgroundColor: 'transparent',
    borderWidth: 2,
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

export default RedefinirTelefoneScreen;
