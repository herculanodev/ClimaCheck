import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

function MenuScreen({ navigation }) {
  const handleNavigation = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Wea</Text>
        <Text style={styles.subtitle}>Cast</Text>
      </View>
      <View style={styles.menuItems}>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => handleNavigation('DailyForecast')}>
          <Text style={styles.menuText}>Previsão Diária</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => handleNavigation('WeeklyForecast')}>
          <Text style={styles.menuText}>Previsão Semanal</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => handleNavigation('SearchCity')}>
          <Text style={styles.menuText}>Pesquisar Cidade</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => handleNavigation('AddCity')}>
          <Text style={styles.menuText}>Cadastrar Cidade</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => handleNavigation('CityList')}>
          <Text style={styles.menuText}>Cidades Adicionadas</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => handleNavigation('Settings')}>
          <Text style={styles.menuText}>Configurações</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => handleNavigation('Support')}>
          <Text style={styles.menuText}>Suporte</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333', // Fundo cinza escuro
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 32,
    color: '#00f', // Azul
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 32,
    color: '#f60', // Laranja
    fontWeight: 'bold',
    marginLeft: 5,
  },
  menuItems: {
    flex: 1,
  },
  menuItem: {
    marginBottom: 20,
    backgroundColor: '#444', // Fundo cinza mais claro
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  menuText: {
    fontSize: 18,
    color: 'white',
  },
});

export default MenuScreen;