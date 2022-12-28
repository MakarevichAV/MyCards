import axios from 'axios';
import React from 'react';
import styled from 'styled-components';
import { Text, ActivityIndicator } from 'react-native';
import { Kit } from './Kit/Kit';

const Wrapper = styled.View`
    padding: 15px;
    background-color: #f8f5e9;
    min-height: 100%;
`;

export const HomePage = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [items, setItems] = React.useState([]);
  const fetchKits = () => {
    setIsLoading(true);
    axios.get('https://63a0b184e3113e5a5c44cd5c.mockapi.io/CardTitles')
    .then(({ data }) => {
      setItems(data);
    }).catch(err => {
      alert('Error of cards getting');
    }).finally(() => {
      setIsLoading(false);
    });
  }

  React.useEffect(fetchKits, []);

  if (isLoading) {
    return (
      <Wrapper style={{
        flex: 1,
        justifyContent: 'center'
      }}>
        <ActivityIndicator size="large" color="#3fb72d" />
        <Text style={{marginTop: 15, textAlign: 'center'}}>Loading</Text>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      {
          items.map((obj) => (
          <Kit key={obj.id} title={obj.title} 
              imageUrl={obj.imageUri} />
          ))
      }
    </Wrapper>
  );
}