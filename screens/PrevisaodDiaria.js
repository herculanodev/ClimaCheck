import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Appbar } from 'react-native-paper';
import VoltarBtn from '../components/VoltarBtn'; // Importe o seu VoltarBtn

function DailyForecastScreen({ navigation }) {
  // Supondo que você tenha informações de previsão diária
  const city = 'Sua Cidade';
  const temperature = '25°C';
  const date = '06 de outubro de 2023';

  // Supondo que você tenha informações de previsão hora por hora
  const hourlyForecast = [
    { time: '08:00', temperature: '28°C' },
    { time: '09:00', temperature: '30°C' },
    { time: '10:00', temperature: '32°C' },
    // Adicione mais dados de previsão aqui...
  ];

  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.header}>
        <VoltarBtn /> {/* Substitua as três barras pelo VoltarBtn */}
        <Appbar.Content title="Previsão Diária" />
      </Appbar.Header>

      <Text style={styles.today}>Hoje</Text>
      <Text style={styles.date}>{date}</Text>

      <View style={styles.cityTemperatureContainer}>
        <Text style={styles.city}>{city}</Text>
        <Text style={styles.weatherForecast}>{temperature}</Text>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.hourlyForecastContainer}
      >
        {hourlyForecast.map((hourlyData, index) => (
          <View key={index} style={styles.hourlyForecastItem}>
            <Text style={styles.hourlyTime}>{hourlyData.time}</Text>
            <Text style={styles.hourlyTemperature}>{hourlyData.temperature}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#76C7FF', // Cor de fundo da tela
    paddingHorizontal: 16,
    paddingTop: 32,
  },
  header: {
    backgroundColor: 'orange',
  },
  today: {
    fontSize: 24,
    color: 'orange', // Laranja
    marginBottom: 8,
  },
  date: {
    fontSize: 16,
    color: 'white', // Texto em branco
    marginBottom: 8,
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
  weatherForecast: {
    fontSize: 24,
    color: 'black',
    marginBottom: 8,
  },
  hourlyForecastContainer: {
    marginTop: 16,
  },
  hourlyForecastItem: {
    marginRight: 16,
    alignItems: 'center',
    backgroundColor: 'white', // Fundo branco para cada item
    borderRadius: 8,
    padding: 8,
  },
  hourlyTime: {
    fontSize: 16,
    color: 'black',
  },
  hourlyTemperature: {
    fontSize: 16,
    color: 'black',
  },
});

export default DailyForecastScreen;

