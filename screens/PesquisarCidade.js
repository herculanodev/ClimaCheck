import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';

function CityManagementScreen() {
  const [cities, setCities] = useState([]);
  const [newCity, setNewCity] = useState('');

  const addCity = () => {
    if (newCity.trim() !== '') {
      setCities([...cities, newCity]);
      setNewCity('');
    }
  };

  const removeCity = (cityToRemove) => {
    const updatedCities = cities.filter((city) => city !== cityToRemove);
    setCities(updatedCities);
  };

  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.header}>
        <Appbar.Action
          icon="menu"
          onPress={() => {
            // Adicione a lógica para abrir o menu aqui
          }}
        />
        <Appbar.Content title="Gerenciamento de Cidades" />
      </Appbar.Header>

      <TextInput
        placeholder="Digite o nome da cidade"
        value={newCity}
        onChangeText={(text) => setNewCity(text)}
        style={styles.input}
      />

      <TouchableOpacity // Alterado de Button para TouchableOpacity
        onPress={addCity}
        style={styles.addButton} // Estilo semelhante ao botão de Registration
      >
        <Text style={styles.buttonText}>Adicionar Cidade</Text>
      </TouchableOpacity>

      <FlatList
        data={cities}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => removeCity(item)}
            style={styles.cityItem}
          >
            <Text style={styles.cityName}>{item}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black', // Fundo preto
    paddingHorizontal: 16,
    paddingTop: 32,
  },
  header: {
    backgroundColor: 'black', // Cabeçalho preto
  },
  input: {
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 8,
    padding: 8,
    marginBottom: 16,
    backgroundColor: '#FDBF75', // Fundo dos campos de entrada branco
    color: 'black', // Texto em preto
  },
  addButton: {
    backgroundColor: '#759EFF', // Cor de fundo do botão
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
  },
  buttonText: {
    color: 'white', // Texto em branco
    fontSize: 16,
    fontWeight: 'bold',
  },
  cityItem: {
    backgroundColor: '#FDBF75', // Cor de fundo dos boxes de previsão
    padding: 16,
    borderRadius: 8,
    marginBottom: 8,
  },
  cityName: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
  },
});

export default CityManagementScreen;
