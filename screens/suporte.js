import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { Appbar } from 'react-native-paper';

function SupportScreen({ navigation }) {
  const [suggestion, setSuggestion] = useState('');

  const handleSendSuggestion = () => {
    // Adicione a lógica para enviar a sugestão aqui
    console.log('Sugestão enviada:', suggestion);
    // Limpar o campo de sugestão após o envio
    setSuggestion('');
  };

  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.header}>
        <Appbar.Action
          icon="arrow-left"
          onPress={() => {
            // Adicione a lógica para voltar à tela anterior aqui
            navigation.goBack();
          }}
        />
        <Appbar.Content title="Suporte" style={styles.appbarContent} />
      </Appbar.Header>

      <Text style={styles.label}>Digite no quadro abaixo sua sugestão:</Text>

      <TextInput
        placeholder="Sua sugestão..."
        onChangeText={(text) => setSuggestion(text)}
        value={suggestion}
        multiline
        style={styles.input}
      />

      <TouchableOpacity
        title="Enviar"
        onPress={handleSendSuggestion}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#76C7FF',
    paddingHorizontal: 16,
    paddingTop: 32,
  },
  header: {
    backgroundColor: 'black',
  },
  appbarContent: {
    backgroundColor: '#FCA43A',
  },
  label: {
    fontSize: 16,
    color: 'white',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: 'lightgray',
    padding: 8,
    borderRadius: 8,
    height: 120,
    backgroundColor: 'white',
    color: 'black',
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#759EFF',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SupportScreen;