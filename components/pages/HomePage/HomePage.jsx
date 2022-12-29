import axios from "axios";
import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components";
import {
  StyleSheet,
  StatusBar,
  Text,
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { Kit } from "./Kit/Kit";
import { TopBar } from "../../comon/TopBar/TopBar";
import { BottomBar } from "../../comon/BottomBar/BottomBar";

const Wrapper = styled.View`
  padding: 15px;
  background-color: #f8f5e9;
  min-height: 100%;
`;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "#1C1B15",
  },
  scrollView: {
    backgroundColor: "#1C1B15",
    marginHorizontal: 0,
  },
  text: {
    fontSize: 42,
  },
});

export const HomePage = ({ navigation }) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [items, setItems] = React.useState([]);
  const fetchKits = () => {
    setIsLoading(true);
    axios
      .get("https://63a0b184e3113e5a5c44cd5c.mockapi.io/CardTitles")
      .then(({ data }) => {
        setItems(data);
      })
      .catch((err) => {
        alert("Error of cards getting");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  React.useEffect(fetchKits, []);

  if (isLoading) {
    return (
      <Wrapper
        style={{
          flex: 1,
          justifyContent: "center",
        }}
      >
        <ActivityIndicator size="large" color="#3fb72d" />
        <Text style={{ marginTop: 15, textAlign: "center" }}>Loading...</Text>
      </Wrapper>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {/* <TopBar /> */}
        <Wrapper>
          {items.map((obj) => (
            <TouchableOpacity
              key={obj.id}
              onPress={() => navigation.navigate("Sets")}
            >
              <Kit title={obj.title} imageUrl={obj.imageUri} />
            </TouchableOpacity>
          ))}
        </Wrapper>
      </ScrollView>
      <BottomBar />
      <StatusBar barStyle="light-content" theme="auto" />
    </SafeAreaView>
  );
};
