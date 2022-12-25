import axios from 'axios';
import React from 'react';
import { StatusBar, Text, View, Image } from 'react-native';
import HomePage from './components/pages/HomePage/HomePage';


export default function App() {
  return (
    <View>
      <HomePage />
      <StatusBar barStyle="light-content" theme='auto' />
    </View>
  );
}