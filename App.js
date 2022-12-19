// import axios from 'axios';
import React from 'react';
import { StatusBar, Text, View, Image } from 'react-native';
import { Kit } from './components/Kit/Kit';


export default function App() {
  // const [items, setItems] = React.useState();

  // React.useEffect(() => {
  //   axios.get('https://63a0b184e3113e5a5c44cd5c.mockapi.io/CardTitles')
  //   .then(({ data }) => {
  //     setItems(data);
  //   }).catch(err => {
  //     alert('Error of cards getting');
  //   });
  // }, []);

  return (
    <View>
      <Kit title="Test" imageUrl="https://avatars.yandex.net/get-music-content/4382102/019f15b8.p.12747823/m1000x1000" />
      <Kit title="Test" imageUrl="https://avatars.yandex.net/get-music-content/4382102/019f15b8.p.12747823/m1000x1000" />
      <Kit title="Test" imageUrl="https://avatars.yandex.net/get-music-content/4382102/019f15b8.p.12747823/m1000x1000" />
      <StatusBar theme='auto' />
    </View>
  );
}