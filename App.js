import axios from 'axios';
import React from 'react';
import { StatusBar, Text, View, Image } from 'react-native';
import { Kit } from './components/Kit/Kit';


export default function App() {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    axios.get('https://63a0b184e3113e5a5c44cd5c.mockapi.io/CardTitles')
    .then(({ data }) => {
      setItems(data);
    }).catch(err => {
      alert('Error of cards getting');
    });
  }, []);

  return (
    <View>
      {
        items.map((obj) => (
          <Kit title={obj.title} 
               imageUrl={obj.imageUri} />
        ))
      }
      
      <StatusBar theme='auto' />
    </View>
  );
}