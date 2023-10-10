import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Appbar } from 'react-native-paper';
import VoltarBtn from '../components/VoltarBtn'; // Importe o seu VoltarBtn

function WeeklyForecastScreen({ navigation }) {
  // Supondo que você tenha informações de previsão semanal
  const city = 'Sua Cidade';
  const date = '06 de outubro de 2023';

  // Supondo que você tenha informações de previsão para os próximos dias
  const weeklyForecast = [
    { day: 'Segunda', temperature: '28°C / 20°C' },
    { day: 'Terça', temperature: '29°C / 21°C' },
    { day: 'Quarta', temperature: '30°C / 22°C' },
    // Adicione mais dados de previsão aqui...
  ];

  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.header}>
        <VoltarBtn /> {/* Substitua a ação de menu pelo VoltarBtn */}
        <Appbar.Content title="Previsão Semanal" />
      </Appbar.Header>

      <Text style={styles.date}>{date}</Text>

      <View style={styles.cityContainer}>
        <Text style={styles.city}>{city}</Text>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.weeklyForecastContainer}
      >
        {weeklyForecast.map((dailyForecast, index) => (
          <View key={index} style={styles.dailyForecastItem}>
            <Text style={styles.day}>{dailyForecast.day}</Text>
            <Text style={styles.temperature}>{dailyForecast.temperature}</Text>
          </View>
        ))}
      </ScrollView>
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
    backgroundColor: 'orange',
  },
  date: {
    fontSize: 16,
    color: 'white',
    marginBottom: 16,
  },
  cityContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FDBF75', // Cor de fundo dos boxes de previsão
    paddingVertical: 16,
    borderRadius: 8,
  },
  city: {
    fontSize: 20,
    color: 'black',
  },
  weeklyForecastContainer: {
    marginTop: 16,
  },
  dailyForecastItem: {
    marginBottom: 16,
    backgroundColor: '#FDBF75', // Cor de fundo dos boxes de previsão
    borderRadius: 8,
    padding: 16,
  },
  day: {
    fontSize: 20,
    color: 'black',
    marginBottom: 8,
  },
  temperature: {
    fontSize: 16,
    color: 'black',
  },
});

export default WeeklyForecastScreen;
