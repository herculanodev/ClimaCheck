import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Appbar } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

function CadastrarCidade({ navigation }) {
  const [cityName, setCityName] = useState('');
  const [cities, setCities] = useState([]); // Estado para armazenar a lista de cidades

  // Função para adicionar uma cidade à lista
  const handleAddCity = async () => {
    if (cityName.trim() !== '') {
      try {
        // Recupere a lista atual de cidades armazenadas
        const existingCities = await AsyncStorage.getItem('cities');
        const parsedCities = existingCities ? JSON.parse(existingCities) : [];

        // Crie um identificador único para a nova cidade
        const cityId = new Date().getTime(); // Usando a marca de tempo como identificador

        // Adicione a nova cidade à lista com seu identificador único
        parsedCities.push({ id: cityId, name: cityName });

        // Salve a lista atualizada de cidades
        await AsyncStorage.setItem('cities', JSON.stringify(parsedCities));

        // Atualize o estado com a lista de cidades
        setCities(parsedCities);

        // Limpe o campo de entrada
        setCityName('');
      } catch (error) {
        console.error('Erro ao salvar a cidade:', error);
      }
    }
  };

  // Função para remover uma cidade da lista
  const removeCity = async (cityId) => {
    try {
      // Recupere a lista atual de cidades armazenadas
      const existingCities = await AsyncStorage.getItem('cities');
      const parsedCities = existingCities ? JSON.parse(existingCities) : [];

      // Remova a cidade com o ID correspondente da lista
      const updatedCities = parsedCities.filter((city) => city.id !== cityId);

      // Salve a lista atualizada de cidades
      await AsyncStorage.setItem('cities', JSON.stringify(updatedCities));

      // Atualize o estado com a lista de cidades
      setCities(updatedCities);
    } catch (error) {
      console.error('Erro ao remover a cidade:', error);
    }
  };

  useEffect(() => {
    // Recupere a lista de cidades ao carregar a tela
    const retrieveCities = async () => {
      try {
        const existingCities = await AsyncStorage.getItem('cities');
        const parsedCities = existingCities ? JSON.parse(existingCities) : [];
        setCities(parsedCities);
      } catch (error) {
        console.error('Erro ao recuperar a lista de cidades:', error);
      }
    };

    retrieveCities();
  }, []);

  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.header}>
        {/* Renderize o componente VoltarBtn */}
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={styles.backButton}
        >
          <Text style={styles.backButtonText}>Voltar</Text>
        </TouchableOpacity>
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

      {/* Exibe a lista de cidades */}
      <ScrollView style={styles.cityList}>
        {cities.map((city) => (
          <View key={city.id} style={styles.cityItem}>
            <Text style={styles.cityName}>{city.name}</Text>
            <TouchableOpacity
              style={styles.removeButton}
              onPress={() => removeCity(city.id)}
            >
              <Text style={styles.removeButtonText}>Remover</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
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
  cityList: {
    marginTop: 20,
  },
  cityItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  cityName: {
    fontSize: 16,
    color: 'white',
  },
  removeButton: {
    backgroundColor: 'red',
    borderRadius: 50,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  removeButtonText: {
    color: 'white',
    fontSize: 14,
  },
  backButton: {
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  backButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default CadastrarCidade;
