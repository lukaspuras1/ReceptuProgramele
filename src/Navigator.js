import React, {Component} from 'react';
import { Text, View, Button } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Categories from './Categories.js';
import Foods from './Foods.js';
import KarstiPatiekalai from './KarstiPatiekalai.js';
import Salotos from './Salotos.js';
import Uzkandziai from './Uzkandziai.js';



const AppNavigator = createStackNavigator({
  Pradžia: {
    screen: Categories,
  }, 
  Sriubos: {
    screen: Foods,
  },
  Salotos: {
    screen: Salotos,
  },
  Užkandziai: {
    screen: Uzkandziai,
  },
  Karšti: {
    screen: KarstiPatiekalai,
  },
 
}, 
{
  initialRouteName: 'Pradžia',
})

const Navigator = createAppContainer(AppNavigator);

export default Navigator;