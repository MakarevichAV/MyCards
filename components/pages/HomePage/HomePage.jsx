import axios from 'axios';
import React from 'react';
import styled from 'styled-components';
import { ImageBackground, View } from 'react-native';
import { Kit } from './Kit/Kit';
import { TopBar } from '../../comon/TopBar/TopBar';

const Wrapper = styled.View`
    padding: 15px;
    background-color: #f8f5e9;
`;

export const HomePage = () => {
  // const [items, setItems] = React.useState([]);

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
      {/* <TopBar>
        <EditButton/>
      </TopBar> */}
      {/* <BottomBar/> */}
      <ImageBackground 
                          // source={{uri: 'https://damion.club/uploads/posts/2022-09/1663920556_2-damion-club-p-kletchatii-fon-tetrad-instagram-2.png'}} 
                      //  source={require('../../../assets/images/bg2.png')}
                        resizeMode="repeat" style={{
                                                      padding:15,
                                                      paddingTop: 25,
                                                      // backgroundColor: "#fefbec"
                                                  }}>
      
      {
          // items.map((obj) => (
          // <Kit title={obj.title} 
          //     imageUrl={obj.imageUri} />
          // ))
      }
      <Kit title="Learning English by playlist with teacher " imageUrl="" />
      <Kit title="Learning English by playlist with teacher " imageUrl="" />
      <Kit title="Learning English by playlist with teacher " imageUrl="" />
      <Kit title="Learning English by playlist with teacher " imageUrl="" />
      <Kit title="Learning English by playlist with teacher " imageUrl="" />
      <Kit title="Learning English by playlist with teacher " imageUrl="" />
      <Kit title="Learning English by playlist with teacher " imageUrl="" />
      <Kit title="Learning English by playlist with teacher " imageUrl="" />
      <Kit title="Learning English by playlist with teacher " imageUrl="" />
      <Kit title="Learning English by playlist with teacher " imageUrl="" />
      {/* <StatusBar barStyle="light-content" theme='auto' /> */}
      </ImageBackground>
    </View>
  );
}