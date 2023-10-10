import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, ScrollView } from 'react-native';
import VoltarBtn from '../components/VoltarBtn'

const CityListScreen = () => {
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
    // Adicione aqui a lógica para adicionar uma nova cidade
  };

  return (
    <View style={styles.container}>
      
      <View style={styles.header}>
        < VoltarBtn />
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
            style={[styles.searchButton, { marginBottom: 20 }]} // Adicione uma margem inferior ao botão
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
    backgroundColor: '#759EFF',
  },
  header: {
    backgroundColor: '#FDBF75',
    padding: 16,
    
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center'
  },
  content: {
    flexGrow: 1,
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 9,
    paddingHorizontal: 8,
    backgroundColor: '#FFFFFF',
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

export default CityListScreen;
