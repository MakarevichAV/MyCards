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
  Alert
} from "react-native";
import { Kit } from "./Kit/Kit";
import { BottomBar } from "../../comon/BottomBar/BottomBar";
import { PlusButton } from "../../comon/PlusButton/PlusButton";
import { KitCreater } from "./Kit/KitCreater";

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
    zIndex: 200,
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

  const [addingCategory, setEddingCategory] = React.useState(false);
  const addCategory = () => {
    setEddingCategory(true);
  }
  const escFromAdding = () => {
    setEddingCategory(false);
  }
  const addNewCat = (data) => {
    setItems([...items, data]);
  }

  const deleteCategory = (id) => {
    const deleteRequest = () => {
      axios
      .delete(`https://63a0b184e3113e5a5c44cd5c.mockapi.io/CardTitles/${id}`)
      .then(({ data }) => {
        alert(`Category ${data.title} has been successfully deleted`);
      })
      .catch((err) => {
        alert("Error of deleting");
      })
      .finally(() => {
        let newItems = items.forEach(function(el, i) {
          if (el.id == id) items.splice(i, 1)
        });
        fetchKits();
      });
    }
    Alert.alert('You are trying to delete a category', 'Are you sure', [
      {
        text: 'Cancel',
        style: 'cancel'
      },
      {text: 'OK', onPress: () => deleteRequest()},
    ]);
  }

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
      <TouchableOpacity style={styles.button} onPress={addCategory}>
        <PlusButton />
      </TouchableOpacity>
      <ScrollView style={styles.scrollView}>
        {/* <TopBar /> */}
        <Wrapper>
          {addingCategory && (
            <KitCreater escFromAdding={escFromAdding} addNewCat={addNewCat}/>
          )}
          {items
            .map((obj) => (
              <TouchableOpacity
                key={obj.id}
                onPress={() => navigation.navigate("Sets")}
              >
                <Kit catId={obj.id} title={obj.title} imageUrl={obj.imageUri} deleteCategory={deleteCategory} />
              </TouchableOpacity>
            ))
            .reverse()}
        </Wrapper>
      </ScrollView>
      <BottomBar />
      <StatusBar barStyle="light-content" theme="auto" />
    </SafeAreaView>
  );
};