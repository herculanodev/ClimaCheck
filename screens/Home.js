import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Appbar } from 'react-native-paper';

function HomeScreen({ navigation }) {
  // Supondo que você tenha a cidade e a temperatura como variáveis
  const city = 'Sua Cidade';
  const temperature = '25°C';

  const openMenu = () => {
    // Use o método openDrawer() para abrir o menu lateral
    navigation.openDrawer();
  };

  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.header}>
        <Appbar.Action icon="menu" onPress={openMenu} />
        <Appbar.Content title="Hoje" />
      </Appbar.Header>
      <Text style={styles.date}>06 de outubro de 2023</Text>
      <View style={styles.cityTemperatureContainer}>
        <Text style={styles.city}>{city}</Text>
        <Text style={styles.temperature}>{temperature}</Text>
      </View>
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
  date: {
    fontSize: 16,
    color: 'white', // Texto em branco
    marginBottom: 24,
  },
  cityTemperatureContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FDBF75', // Fundo dos campos de entrada branco
    paddingVertical: 16,
    borderRadius: 8,
  },
  city: {
    fontSize: 20,
    color: 'black',
    marginBottom: 8,
  },
  temperature: {
    fontSize: 32,
    color: 'black',
  },
});

export default HomeScreen;
