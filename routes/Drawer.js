import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import PrevisaodDiaria from '../screens/PrevisaodDiaria'
import PrevisaoSemanal from '../screens/PrevisaoSemanal'
import PesquisarCidade from '../screens/PesquisarCidade'
import CadastrarCidade from '../screens/CadastrarCidade'
import CidadesAdicionadas from '../screens/CidadesAdicionadas'
import Suporte from '../screens/Suporte'
import Config from '../screens/Config'

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Previsão Diária" component={PrevisaodDiaria} />
      <Drawer.Screen name="Previsão Semanal" component={PrevisaoSemanal} />
      <Drawer.Screen name="Pesquisar Cidade" component={PesquisarCidade} />
      <Drawer.Screen name="Cadastrar Cidade" component={CadastrarCidade} />
      <Drawer.Screen name="Cidades Adicionadas" component={CidadesAdicionadas} />
      <Drawer.Screen name="Suporte" component={Suporte} />
      <Drawer.Screen name="Configurações" component={Config} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;