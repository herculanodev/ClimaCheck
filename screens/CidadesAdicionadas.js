import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, ScrollView } from 'react-native';
import VoltarBtn from '../components/VoltarBtn';

const CidadesAdicionadas = () => {
  const [cities, setCities] = useState([
    { id: 1, name: 'São Paulo, SP' },
    { id: 2, name: 'Rio de Janeiro, RJ' },
    { id: 3, name: 'Brasília, DF' },
    { id: 4, name: 'Fortaleza' },
    { id: 5, name: 'Natal, CE' },
    { id: 6, name: 'Manaus, AM' },
    // Adicione mais cidades conforme necessário
  ]);
  const [searchText, setSearchText] = useState('');
  const [displayedCities, setDisplayedCities] = useState(cities);
  const [newCity, setNewCity] = useState(''); // Estado para a nova cidade a ser adicionada

  const removeCity = (cityId) => {
    const updatedCities = cities.filter((city) => city.id !== cityId);
    setCities(updatedCities);
    setDisplayedCities(updatedCities);
  };

  const handleSearch = () => {
    const filteredCities = cities.filter((city) =>
      city.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setDisplayedCities(filteredCities);
  };

  const addCity = () => {
    if (newCity.trim() !== '') {
      // Gere um novo ID para a cidade (apenas um exemplo, você pode usar outra abordagem)
      const newCityId = cities.length + 1;

      // Crie um objeto para representar a nova cidade
      const newCityObject = { id: newCityId, name: newCity };

      // Atualize a lista de cidades
      const updatedCities = [...cities, newCityObject];
      setCities(updatedCities);
      setDisplayedCities(updatedCities);

      // Limpe o campo de entrada da nova cidade
      setNewCity('');
    }
  };

  return (
    <View style={styles.container}>
      <VoltarBtn />
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Cidades Adicionadas</Text>
      </View>
      <ScrollView contentContainerStyle={styles.content}>
        <TextInput
          style={[styles.input, { marginTop: 50 }]}
          placeholder="Pesquisar cidade"
          value={searchText}
          onChangeText={(text) => setSearchText(text)}
          backgroundColor="white"
        />
        <View style={styles.centerSearchButton}>
          <TouchableOpacity
            style={[styles.searchButton, { marginBottom: 20 }]}
            onPress={handleSearch}>
            <Text style={styles.searchButtonText}>Pesquisar</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.addCityContainer}>
          <View style={styles.centerText}>
            <Text style={styles.addCityTitle}>Adicionadas recentemente</Text>
          </View>
          {displayedCities.map((city) => (
            <View style={styles.cityItem} key={city.id}>
              <Text style={styles.cityName}>{city.name}</Text>
              <TouchableOpacity
                style={styles.removeButton}
                onPress={() => removeCity(city.id)}>
                <Text style={styles.removeButtonText}>Remover</Text>
              </TouchableOpacity>
            </View>
          ))}
          <TextInput
            style={styles.input}
            placeholder="Nome da nova cidade"
            value={newCity}
            onChangeText={(text) => setNewCity(text)}
            backgroundColor="white"
          />
          <TouchableOpacity
            style={styles.addButton}
            onPress={addCity}>
            <Text style={styles.cityName}>Adicionar +</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#76C7FF',
  },
  header: {
    backgroundColor: '#FDBF75',
    padding: 16,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  content: {
    flexGrow: 1,
    padding: 16,
  },
  input: {
    height: 40,
    backgroundColor: '#FDBF75',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 9,
    paddingHorizontal: 8,
  },
  searchButton: {
    backgroundColor: '#FDBF75',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 80,
    alignItems: 'center',
  },
  searchButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  centerSearchButton: {
    alignItems: 'center',
    marginTop: 20,
  },
  cityItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 40,
    marginBottom: 20,
    marginTop: 20,
  },
  cityName: {
    fontSize: 16,
  },
  removeButton: {
    backgroundColor: '#FDBF75',
    borderRadius: 999,
    paddingVertical: 5,
    paddingHorizontal: 8,
  },
  removeButtonText: {
    color: 'black',
  },
  addCityContainer: {
    backgroundColor: 'white',
    padding: 14,
  },
  addButton: {
    backgroundColor: '#759EFF',
    borderRadius: 999,
    paddingVertical: 5,
    paddingHorizontal: 30,
    alignSelf: 'center',
  },
  addCityTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  centerText: {
    alignItems: 'center',
  },
});

export default CidadesAdicionadas;

