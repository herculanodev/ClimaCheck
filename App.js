import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { View } from 'react-native';

import RedefinirSenha from './screens/RedefinirSenha';
import CadastrarCidade from './screens/CadastrarCidade';
import CidadesAdicionadas from './screens/CidadesAdicionadas';
import Config from './screens/Config';
import ForgotPassword from './screens/ForgotPassword';
import Home from './screens/Home';
import Login from './screens/Login';
import PesquisarCidade from './screens/PesquisarCidade';
import PrevisaoSemanal from './screens/PrevisaoSemanal';
import PrevisaoDiaria from './screens/PrevisaodDiaria';
import RedefinirEmail from './screens/RedefinirEmail';
import RedefinirTelefone from './screens/RedefinirTelefone';
import Registrar from './screens/Registrar';
import RemoverCidade from './screens/RemoverCidade';
import Sair from './screens/Sair';
import Suporte from './screens/Suporte';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
