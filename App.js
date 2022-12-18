// import { StatusBar } from 'expo-status-bar';
import { StatusBar, Text, View, Image } from 'react-native';
import { Kit } from './components/Kit/Kit';


export default function App() {
  return (
    <View>
      <Kit title="Test" imageUrl="https://avatars.yandex.net/get-music-content/4382102/019f15b8.p.12747823/m1000x1000" />
      <Kit title="Test" imageUrl="https://avatars.yandex.net/get-music-content/4382102/019f15b8.p.12747823/m1000x1000" />
      <Kit title="Test" imageUrl="https://avatars.yandex.net/get-music-content/4382102/019f15b8.p.12747823/m1000x1000" />
      <StatusBar theme='auto' />
    </View>
  );
}