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
import { Set } from "./Set/Set";
import { BottomBar } from "../../comon/BottomBar/BottomBar";
import { PlusButton } from "../../comon/PlusButton/PlusButton";

const Wrapper = styled.View`
  padding: 15px;
  padding-bottom: 80px;
  background-color: #f8f5e9;
  min-height: 100%;
`;

export const SetsPage = ({ navigation }) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [items, setItems] = React.useState([]);
  const fetchSets = () => {
    setIsLoading(true);
    axios
      .get("https://63a0b184e3113e5a5c44cd5c.mockapi.io/sets")
      .then(({ data }) => {
        setItems(data);
      })
      .catch((err) => {
        alert("Error of sets getting");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  React.useEffect(fetchSets, []);

  if (isLoading) {
    return (
      <Wrapper
        style={{
          flex: 1,
          justifyContent: "center",
        }}
      >
        <ActivityIndicator size="large" color="rgb(63, 183, 45)" />
        <Text style={{ marginTop: 15, textAlign: "center" }}>Loading...</Text>
      </Wrapper>
    );
  }

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
    button: {
      alignItems: "center",
      justifyContent: "center",
      padding: 10,
      flexGrow: 1,
      width: 80,
      height: 80,
      position: "absolute",
      bottom: 100,
      right: 30,
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Wrapper>
          {items.map((obj) => (
            <Set
              key={obj.id}
              title={obj.title}
              num={obj.num}
              passed={obj.passed}
            />
          ))}
        </Wrapper>
      </ScrollView>
      <TouchableOpacity style={styles.button}>
        <PlusButton />
      </TouchableOpacity>
      <BottomBar/>
      <StatusBar barStyle="light-content" theme="auto" />
    </SafeAreaView>
  );
};
