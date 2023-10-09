import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { Appbar } from 'react-native-paper';

function AddCityScreen({ navigation }) {
  const [cityName, setCityName] = useState('');

  const handleAddCity = () => {
    if (cityName.trim() !== '') {
      // Aqui você pode adicionar lógica para salvar a cidade em sua lista de cidades
      // Por exemplo, você pode usar AsyncStorage ou um banco de dados para armazenar as cidades.
      // Após salvar a cidade, você pode navegar de volta para a tela de gerenciamento de cidades.

      // Neste exemplo, estamos apenas limpando o campo de entrada e voltando para a tela anterior.
      setCityName('');
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.header}>
        <Appbar.Action
          icon="arrow-left"
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Appbar.Content title="Cadastro de Cidade" />
      </Appbar.Header>

      <Text style={styles.label}>Nome da Cidade:</Text>

      <TextInput
        placeholder="Digite o nome da cidade"
        value={cityName}
        onChangeText={(text) => setCityName(text)}
        style={styles.input}
      />

      <TouchableOpacity
        title="Cadastrar"
        onPress={handleAddCity}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingHorizontal: 16,
    paddingTop: 32,
  },
  header: {
    backgroundColor: 'black',
  },
  label: {
    fontSize: 16,
    color: 'white',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 8,
    padding: 8,
    marginBottom: 16,
    backgroundColor: '#FDBF75',
    color: 'black',
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

export default AddCityScreen;
