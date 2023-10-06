import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  CheckBox,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import VoltarBtn from '../components/VoltarBtn';

const Registration = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const handleRegistration = () => {
    if (!agreedToTerms) {
      alert('Você deve concordar com os termos para se registrar.');
      return;
    }

    console.log('Nome:', name);
    console.log('Email:', email);
    console.log('Telefone:', phone);
    console.log('Cidade:', city);
    console.log('Senha:', password);
    console.log('Confirmação de Senha:', confirmPassword);
  };

  return (
    <View style={styles.container}>
      <VoltarBtn />
      <Text style={styles.title}>Registre-se</Text> {/* Título "Registre-se" */}
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Telefone"
        value={phone}
        onChangeText={(text) => setPhone(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Cidade"
        value={city}
        onChangeText={(text) => setCity(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirme sua senha"
        secureTextEntry={true}
        value={confirmPassword}
        onChangeText={(text) => setConfirmPassword(text)}
      />

      <View style={styles.checkBoxContainer}>
        <CheckBox
          value={agreedToTerms}
          onValueChange={(value) => setAgreedToTerms(value)}
        />
        <Text style={styles.checkBoxText}>
          Li e concordo com os termos de uso
        </Text>
      </View>

      <View style={styles.checkBoxContainer}>
        <CheckBox
          value={agreedToTerms}
          onValueChange={(value) => setAgreedToTerms(value)}
        />
        <Text style={styles.checkBoxText}>
          Permitir acesso à sua localização durante o uso do app
        </Text>
      </View>


      <View style={styles.containerBtn}>
        <TouchableOpacity
          title="Cadastrar"
          onPress={handleRegistration}
          style={styles.registerButton}>
          Cadastrar
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 20,
    fontFamily: 'Inter',
  },

  title: {
    fontSize: 36,
    color: 'orange', // Título em laranja
    marginBottom: 40, // Espaçamento inferior
    marginTop: 20,
    textAlign: 'center', // Centraliza o texto horizontalmente
  },

  input: {
    backgroundColor: '#FDBF75',
    marginBottom: 30,
    padding: 10,
    borderRadius: 10,
    width: '100%',
  },

  checkBoxContainer:{
    flex: 1,
    flexDirection: 'row'
  },

  checkBoxText: {
    color: 'white',
    marginStart: 10
  },

  containerBtn: {
    alignItems: 'center',
    margin: 20
  },

  registerButton: {
    borderRadius: 50,
    backgroundColor: '#759EFF',
    marginTop: 20,
    padding: 10,
    width: '14.375rem',
    height: '3.75rem',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Registration;
