import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Lógica de autenticação
    if (username === 'daniel' && password === 'senha') {
      alert('Login bem-sucedido!');
    } else {
      alert('Nome de usuário ou senha incorretos');
    }
  };

  const handleGoogleLogin = () => {
    alert('Login com o Google');
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        {/* Logo */}
        <Image
          source={require('./assets/imagem.png')}
          style={styles.logo}
        />
        
        {/* Nome do aplicativo */}
        <View style={styles.appNameContainer}>
          <Text style={styles.blueText}>Wea</Text>
          <Text style={styles.orangeText}>Cast</Text>
        </View>
      </View>

      <Text style={styles.label}>Nome de Usuário:</Text>
      <TextInput
        style={[styles.input, styles.marginBottom]}
        placeholder="Digite seu nome de usuário"
        onChangeText={(text) => setUsername(text)}
        value={username}
      />

      <Text style={styles.label}>Senha:</Text>
      <TextInput
        style={[styles.input, styles.marginBottom]}
        placeholder="Digite sua senha"
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry={true}
      />

      {/* Botão de Login */}
      <TouchableOpacity style={[styles.loginButton, styles.marginBottom]} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      {/* Espaçamento entre os botões */}
      <View style={[styles.buttonSpacing, styles.marginBottom]}>
        <Text style={styles.orText}>ou</Text>
      </View>

      {/* Botão de Login com o Google */}
      <TouchableOpacity style={[styles.googleButton, styles.marginBottom]} onPress={handleGoogleLogin}>
        <Image
          source={require('./assets/google-icon.png')} // Caminho para o ícone do Google
          style={styles.googleIcon}
        />
        <Text style={styles.googleButtonText}>Google</Text>
      </TouchableOpacity>

      {/* Link para Registrar */}
      <TouchableOpacity style={styles.marginBottom} onPress={() => alert('Cliquei em Registrar')}>
        <Text style={styles.registerLink}>Registrar-se</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  logoContainer: {
    alignItems: 'center', // Centraliza a logo e o texto
  },
  logo: {
    width: 150, // Reduzi o tamanho do logo
    height: 150, // Reduzi o tamanho do logo
    marginBottom: 50,
  },
  appNameContainer: {
    flexDirection: 'row', // Alinha o texto "Wea" e "Cast" horizontalmente
  },
  blueText: {
    color: 'blue', // Cor azul para "Wea"
    fontSize: 56, // Reduzi o tamanho da fonte
    fontWeight: 'bold',
    marginBottom: 70, // Reduzi o espaço inferior
  },
  orangeText: {
    color: '#FFBF75', // Cor laranja para "Cast"
    fontSize: 56, // Reduzi o tamanho da fonte
    fontWeight: 'bold',
    marginBottom: 70, // Reduzi o espaço inferior
  },
  label: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#fff',
    width: '80%',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
    color: '#000',
  },
  loginButton: {
    backgroundColor: '#007bff',
    borderRadius: 20, // Reduzi o raio da borda
    paddingVertical: 10, // Reduzi o espaço vertical
    paddingHorizontal: 20, // Reduzi o espaço horizontal
    marginVertical: 10,
    width: '60%', // Reduzi a largura do botão
    justifyContent: 'center', // Centraliza o conteúdo verticalmente
    alignItems: 'center', // Centraliza o conteúdo horizontalmente
  },
  googleButton: {
    backgroundColor: '#75C7FF', // Cor de fundo personalizada para o botão do Google
    borderWidth: 2, // Adiciona uma borda
    borderColor: '#007bff', // Cor da borda
    borderRadius: 20, // Reduzi o raio da borda
    paddingVertical: 10, // Reduzi o espaço vertical
    paddingHorizontal: 20, // Reduzi o espaço horizontal
    marginVertical: 10,
    width: '60%', // Reduzi a largura do botão
    flexDirection: 'row', // Alinha o texto e a imagem horizontalmente
    justifyContent: 'center', // Centraliza o conteúdo verticalmente
    alignItems: 'center', // Centraliza o conteúdo horizontalmente
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  googleButtonText: {
    color: '#fff',
    fontSize: 16,
    // marginLeft: 10, // Removi o marginLeft para centralizar o texto
  },
  buttonSpacing: {
    marginVertical: 10,
  },
  orText: {
    color: '#fff',
    fontSize: 16,
  },
  registerLink: {
    color: '#fff',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
  marginBottom: {
    marginBottom: 10,
  },
  googleIcon: {
    width: 24, // Largura do ícone
    height: 24, // Altura do ícone
    marginRight: 10, // Espaçamento à direita da imagem (para separá-la do texto)
  },
});