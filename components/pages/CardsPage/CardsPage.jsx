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
  Alert,
} from "react-native";
import { PlusButton } from "../../comon/PlusButton/PlusButton";
import { LoadingElement } from "../../comon/LoadingElement/LoadingElement";
import { BottomBar } from "../../comon/BottomBar/BottomBar";
import { urlCard } from "../../../api/src";

const Wrapper = styled.View`
  padding: 15px;
  padding-bottom: 80px;
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

export const CardsPage = ({ navigation, route }) => {
  const { id, title } = route.params;

  const [isLoading, setIsLoading] = React.useState(true);
  const [items, setItems] = React.useState([]);
  const [addingCard, setAddingCard] = React.useState(false);

  const addCard = () => {
    setAddingCard(true);
  };

  const fetchCards = () => {
    setIsLoading(true);
    axios
      .get(urlCard + id)
      .then(({ data }) => {
        setItems(data.cards);
      })
      .catch((err) => {
        alert("Error of sets getting");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  React.useEffect(fetchCards, []);

  if (isLoading) {
    return <LoadingElement />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Wrapper>
          {
              items
            .map((obj) => (
              <TouchableOpacity
                key={obj.id}
                onPress={() => console.log(obj.name)}
              >
                <Text>{obj.name}</Text>
                {/* <Set
                  title={obj.title}
                  num={obj.num}
                  passed={obj.passed}
                  setId={obj.id}
                  deleteSet={deleteSet}
                /> */}
              </TouchableOpacity>
            ))
            .reverse()
          }
        </Wrapper>
      </ScrollView>
      <TouchableOpacity style={styles.button} onPress={addCard}>
        <PlusButton />
      </TouchableOpacity>
      <BottomBar />
      <StatusBar barStyle="light-content" theme="auto" />
    </SafeAreaView>
  );
};
