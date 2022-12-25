import axios from 'axios';
import React from 'react';
import { ImageBackground, StatusBar, Text, View, Image } from 'react-native';
import { Kit } from './Kit/Kit';
import { TopBar } from '../../comon/TopBar/TopBar';
import styled from 'styled-components';

const Wrapper = styled.View`
    padding: 15px;
    background-color: #f8f5e9;
    min-height: 100%;
`;

export default function HomePage() {
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
        <TopBar />
        <ImageBackground source={{uri: 'https://flomaster.club/uploads/posts/2022-07/thumbs/1657725150_54-flomaster-club-p-risunok-kletka-tetradnaya-krasivo-57.jpg'}} 
                        //  source={require('../../../assets/images/bg2.png')}
                         
                         resizeMode="repeat" style={{minHeight:'100%'}}>
        
        {
            items.map((obj) => (
            <Kit title={obj.title} 
                imageUrl={obj.imageUri} />
            ))
        }
        <Kit title="Learning English by playlist with teacher " imageUrl="" />
        <StatusBar barStyle="light-content" theme='auto' />
        </ImageBackground>
    </View>
  );
}