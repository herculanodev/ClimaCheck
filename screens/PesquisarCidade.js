import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';
import VoltarBtn from '../components/VoltarBtn'; // Importe o seu VoltarBtn

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
        <VoltarBtn /> {/* Substitua as três barras pelo VoltarBtn */}
        <Appbar.Content title="Gerenciamento de Cidades" />
      </Appbar.Header>

      <TextInput
        placeholder="Digite o nome da cidade"
        value={newCity}
        onChangeText={(text) => setNewCity(text)}
        style={styles.input}
      />

      <TouchableOpacity
        onPress={addCity}
        style={styles.addButton}
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
    backgroundColor: 'black',
    paddingHorizontal: 16,
    paddingTop: 32,
  },
  header: {
    backgroundColor: 'black',
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
  addButton: {
    backgroundColor: '#759EFF',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  cityItem: {
    backgroundColor: '#FDBF75',
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
