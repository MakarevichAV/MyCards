import React from 'react';
import { StyleSheet, RefreshControl, SafeAreaView, ScrollView, StatusBar, View} from 'react-native';
import { BottomBar } from './components/comon/BottomBar/BottomBar.jsx';
import { TopBar } from './components/comon/TopBar/TopBar.jsx';
import { HomePage } from './components/pages/HomePage/HomePage.jsx';
import { Navigation } from './components/pages/Navigator.jsx';
import { SetsPage } from './components/pages/SetsPage/SetsPage.jsx';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: '#1C1B15',
  },
  scrollView: {
    backgroundColor: '#1C1B15',
    marginHorizontal: 0,
  },
  text: {
    fontSize: 42,
  },
});

const App = () => {
  return (
    <Navigation />
    // <SafeAreaView style={styles.container}>
    //   <ScrollView style={styles.scrollView}>
    //     <TopBar />
    //     <Navigation />
    //   </ScrollView>
    //   <BottomBar />
    //   <StatusBar barStyle="light-content" theme='auto' />
    // </SafeAreaView>
  );
}

export default App;